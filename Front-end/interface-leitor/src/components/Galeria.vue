<template>
    <section id="posts">
        <div class="container posts">
            <div @click="$emit('detalhes', post.id)" v-for="post in posts" :key="post.id" class="box">
                <a href="#">
                    <img :src="post.img" alt="">
                    <div class="descricao">
                        <p class="title">{{post.titulo}}</p>
                        <p class="resumo">{{post.resumo}}</p>
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Galeria',
    props: ["posts"]
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
</style>