<template>
    <section class="container" id="posts">
        <div class="posts">
            <div @click="$emit('detalhes', post.id)" v-for="post in posts.textos" :key="post.id" class="box">
                <a href="#">
                    <img :src="post.img" alt="">
                    <div class="descricao">
                        <p class="title">{{post.titulo}}</p>
                        <p class="resumo">{{post.resumo}}</p>
                    </div>
                </a>
            </div>
        </div>
        <div class="clear"></div>
        <div class="paginacao">
            <div @click="page(1)" class="icons"> &laquo; </div>
            <div @click="page((paginaatual - 1))" class="icons"> &lsaquo; </div>
            <div @click="page(index)" v-for="index in posts.pages" v-bind:class="{ active : index === paginaatual}" :key="index" class="icons"> {{index}} </div>
            <div @click="page((paginaatual + 1))" class="icons"> &rsaquo; </div>
            <div @click="page(posts.pages)" class="icons"> &raquo; </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Galeria',
    props: ["posts"],
    data(){
        return {
            paginaatual: 1
        }
    },
    methods: {
        async page(id){
            if(id != 0 && id <= this.$props.posts.pages){
                this.$emit('movePage' ,id);
                this.paginaatual = id;
            }
        }   
    }
}
</script>

<style scoped>
    .posts{
        max-width: 960px;
        margin: auto;
    } 
    .box{
        width: 300px;
        margin: 10px;
        float: left;
        background: white;
    }
    .box img{
        max-width: 300px;
    }
    .box .descricao{
        padding: 15px 10px;
    }
    .box .descricao .title{
        text-align: center;
        font-size: 20px;
        margin-bottom: 5px;
    }
    .box .descricao .resumo{
        text-align: justify;
    }
    .box a{
        color: inherit;
        text-decoration: none;
    }
    .icons{
        height: 20px;
        width: 20px;
        background: white;
        float: left;
        text-align: center;
        border: 0.5px solid rgb(218, 218, 218);
        cursor: pointer;
        padding-top: 3px;
    }
    .active{
        text-decoration: underline;
    }
</style>