<template>
    <section class="container" id="post">
        <div class="container">
            <button @click="$emit('voltar')" class="back"><img src="../assets/left-arrow.svg" alt=""></button>
            <div v-if="post !== ''">
                <div class="clear"></div>
                <img :src="post.img" alt="">
                <p class="title">{{post.titulo}}</p>
                <div class="texto" v-html="post.texto">
                    {{post.texto}}
                </div> 
            </div>
            <div v-else style="padding: 200px 0px;">
                <div style="margin: auto;width: fit-content;">
                    <h1 class="erro">Texto Não Encontrado!!</h1>
                </div>
            </div>
        </div>
        <Comments v-if="post !== ''" v-on:novoComentario="novoComentario" v-bind:comentarios="post.comentarios" v-bind:postid="post.id" />
    </section>
</template>

<script>
import Comments from './Comments'

export default {
    name: 'Post',
    props: ['post'],
    components: {
        Comments
    },
    methods: {
        novoComentario(newComment){
            this.$emit('novoComentario', newComment);
        }
    }
}
</script>

<style scoped>
    .container img{
        width: 100%;
    }
    .container .title{
        font-size: 50px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .container .texto{
        text-align: justify;
    }

    .back img{
        height: 20px;
        width: 20px;
    }
    .back{
        padding: 10px 20px;
        margin: 10px 0;
        border: 1px solid rgb(218, 218, 218);
        width: auto;
        float:left;
        background: white;
        cursor: pointer;
    }
    .back:focus{
        outline: none;
    }
    #post{
        background: white;
    }
</style>