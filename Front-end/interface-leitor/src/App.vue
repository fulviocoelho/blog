<template>
  <div>
    <div v-if="isLoaded">
      <Header v-bind:config="config" />  
      <Artigo v-bind:post="post" v-on:voltar="emptyArtigo" v-on:novoComentario="novoComentario" v-if="isVisible === true"/> 
      <Galeria v-bind:posts="posts" v-on:movePage="movePage" v-on:detalhes="loadArtigo" v-else-if="isVisible === false && posts !== ''"/> 
      <div class="container" v-else>
          <div style="margin: 50px auto;width: fit-content;">
            <h1 class="erro">Nenhum Artigo Disponivel no Momento</h1>
          </div>
      </div>
      <div class="clear"></div>
      <Footer v-bind:config="config"/>
    </div>
    <Loader v-else />
  </div>
</template>

<script>
import axios from 'axios'
import Header from './components/Header'
import Galeria from './components/Galeria'
import Artigo from './components/Artigo'
import Footer from './components/Footer'
import Loader from './components/Loader'

export default {
  name: 'App',
  components: {
    Header,
    Galeria,
    Artigo,
    Footer,
    Loader
  },
  async created(){
    await axios.get('http://192.168.15.15:3000/api/config').then(res => (this.config = res.data));
    await axios.get('http://192.168.15.15:3000/api/post/1').then(res => (this.posts = res.data));
    document.title = this.config.nome;
    this.isLoaded = true;
  },
  data() {
    return {
      isVisible: false,
      isLoaded: false,
      config: '',
      posts: '',
      post: ''
    }
  },
  methods: {
    changePost() {
      this.isVisible = !this.isVisible;
    },
    novoComentario(newComment) {      
      this.post.comentarios = [...this.post.comentarios, newComment]
    },
    loadArtigo(id){
      axios.get(`http://192.168.15.15:3000/api/post/article/${id}`)
      .then(res => (this.post = res.data))
      .catch(error => {
        console.log(error) 
        })
      .finally(() => this.changePost());
    },
    emptyArtigo(){
      this.post = '';
      this.changePost();
    },
    movePage(pagina){
      axios.get(`http://192.168.15.15:3000/api/post/${pagina}`).then(res => (this.posts = res.data));
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
    background: #eeeeee;
  }
  .clear{
    clear: both;
  }
  .container{
    max-width: 960px;
    margin: 0 auto;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
  }
  .hidden{
    display: none !important;
  }
  .erro{
    font-size: 50px;
  }
  @media only screen and (max-width: 996px) {
    .container{
      max-width: 640px !important;
    }
    .container .title{
      font-size: 30px !important;
    }
  }
  @media only screen and (max-width: 659px) {
    .container{
      max-width: 320px !important;
    }
    .container .title{
      font-size: 20px !important;
      text-align: center;
    }
    footer .nome{
      float: none !important;
      text-align: center !important;
    }
    footer .midias{
      margin: 0 auto !important;
      max-width: fit-content !important;
      padding-top: 10px !important;
    }
  }
</style>
