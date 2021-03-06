<template>
  <div v-if="loaded">
    <Header v-bind:config="config" />  
    <Artigo v-bind:at="accesstoken" v-bind:login="login" v-bind:post="post" v-on:act="act" v-on:voltar="emptyArtigo" v-on:novoComentario="novoComentario" v-if="showpost === true"/> 
    <Galeria v-bind:posts="posts" v-on:detalhes="loadArtigo" v-else-if="showpost === false && posts !== ''"/> 
    <div class="container" v-else>
        <div style="margin: 50px auto;width: fit-content;">
          <h1 class="erro">Nenhum Artigo Disponivel no Momento</h1>
        </div>
    </div>
    <div class="clear"></div>
    <Footer v-bind:config="config"/>
  </div>
</template>

<script>
import axios from 'axios'
import Header from './components/Header'
import Galeria from './components/Galeria'
import Artigo from './components/Artigo'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Galeria,
    Artigo,
    Footer
  },
  async created(){
    await axios.get('http://localhost:3000/api/config').then(res => (this.config = res.data));
    await axios.get('http://localhost:3000/api/post').then(res => (this.posts = res.data.textos));
    this.loaded = true;
  },
  data() {
    return {
      showpost: false,
      login: false,
      loaded: false,
      accesstoken: '',
      config: '',
      posts: '',
      post: ''
    }
  },
  methods: {
    changePost() {
      this.showpost = !this.showpost;
    },
    novoComentario(newComment) {      
      this.post.comentarios = [...this.post.comentarios, newComment]
    },
    act(token){
      if(token !== null && token !== ''){
        this.accesstoken = token;
        this.login = true;
      }
    },
    loadArtigo(id){
      axios.get(`http://localhost:3000/api/post/${id}`)
      .then(res => (this.post = res.data))
      .catch(error => {
        console.log(error) 
        })
      .finally(() => this.changePost());
    },
    emptyArtigo(){
      this.post = '';
      this.changePost();
    }
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  body{
    margin: 0;
    padding: 0;
    min-height: 100vh;
    font-family: Arial, Helvetica, sans-serif;
  }
  .clear{
    clear: both;
  }
  .container{
    max-width: 1000px;
    margin: 0 auto;
    padding-left: 10px;
    padding-right: 10px;
  }
  .hidden{
    display: none !important;
  }
  .erro{
    font-size: 50px;
  }
</style>
