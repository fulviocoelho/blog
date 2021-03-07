<template>
    <div class="form">
        <form action="#" @submit="NewComment" class="addcomment">
            <textarea v-model="comentario" rows="7" type="text" class="comment"></textarea>
            <button type="submit" class="submit">Comentar</button>
        </form>
        <div class="clear"></div>
    </div>
</template>

<script>
import axios from 'axios'
import { Auth } from 'aws-amplify'

export default {
    name : 'AddComment',
    props: ["postid"],
    data() {
        return{
            comentario: '',
            auth: ''
        }
    },
    async mounted(){
        try{
            const user = await Auth.currentAuthenticatedUser();
            this.auth = user;
        }catch(err){
            console.log(err);
        }
    },
    methods: {
        async NewComment(e) {
            e.preventDefault();
            await this.getUser();
            if(this.comentario !== '' && this.auth !== ''){
                console.log(this.$props.postid);
                axios.post(`http://192.168.15.15:3000/api/comment`, {postid : this.$props.postid, coment: this.comentario, usuario: this.auth.username}).then(res => (console.log(res)));
                
                const html = new RegExp('\\n', 'g');
                this.comentario = this.comentario.replace(html, '<br>');
                const newComment = {
                    usuario: this.auth.username,
                    comentario: this.comentario 
                }
                this.$emit('novoComentario', newComment);
                this.comentario = '';
            }
        },
        async getUser(){
            try{
                const user = await Auth.currentAuthenticatedUser();
                this.auth = user;
            }catch(err){
                console.log(err);
            }
        }
    }
}
</script>

<style scoped>
.form{
    margin: 30px 0;
    width: 100%;
}
.submit{
    padding: 10px 20px;
    border-radius: 0;
    border: none;
    background: rgb(218, 218, 218);
    transition-duration: 0.5s;
    cursor: pointer;
}
.submit:hover{
    background: rgb(163, 163, 163);
}
.submit:focus{
    outline: none;
}

.comment{
    width: -webkit-fill-available;
    padding: 10px 20px;
    border-radius: 0;
    border: 1px solid rgb(218, 218, 218);
    transition-duration: 0.5s;
    resize: none;
    overflow: auto;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
}
.comment:focus{
    border-radius: 0;
    outline: none;
    border: 1px solid rgb(163, 163, 163);
}
</style>