<template>
    <div class="container">
        <div class="comments">
            <div v-for="comentario in comentarios" :key="comentario.id" class="comment">
                <p class="usuario">{{comentario.usuario}} diz:</p>
                <p class="comentario" v-html="comentario.comentario">{{comentario.comentario}}</p>
            </div>
        </div>
        <amplify-authenticator>
            <AddComment v-bind:postid="postid" v-on:novoComentario="novoComentario" />
            <amplify-sign-out></amplify-sign-out>
        </amplify-authenticator>
        <div class="clear"></div>
    </div>
</template>

<script>
import AddComment from './AddComment'


export default {
    name: 'Comments',
    props: ['comentarios','postid'],
    components: {
        AddComment
    },
    methods: {
        novoComentario(newComment){
            this.$emit('novoComentario', newComment);
        }
    }
}
</script>

<style scoped>
    .comments{
        margin-top: 30px;
    }
    .comment{
        width: -webkit-fill-available;
        padding-top: 20px;
        padding-bottom: 20px;
        border-top: 1px solid gray;
    }
    .comment .usuario{
        font-size: 25px;
        margin-bottom: 15px;
        margin-left: 15px;
    }
    .comment .comentario{
        margin-left: 15px;
    }
</style>