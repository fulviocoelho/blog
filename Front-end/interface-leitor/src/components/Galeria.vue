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
            <div @click="page((Number(pagina) - 1))" class="icons"> &lsaquo; </div>
            <div @click="page((Number(pagina) - 5))" v-if="where > 0" class="icons"> ... </div>
            <div @click="page(Number(index) + (5*where))" v-for="index in this.blocos[where].paginas" v-bind:class="{ active : (index + (5*where)) == pagina}" :key="(index + (5*where))" class="icons"> {{(index + (5*where))}} </div>
            <div @click="page((Number(pagina) + 5))" v-if="where < (blocos.length - 1 )" class="icons"> ... </div>
            <div @click="page((Number(pagina) + 1))" class="icons"> &rsaquo; </div>
            <div @click="page(posts.pages)" class="icons"> &raquo; </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Galeria',
    props: ["posts"],
    created() {
        try{
        var repeticao = Math.ceil(this.$props.posts.pages / 5);
        var paginas = this.$props.posts.pages;
        for(var i = 1; i <= repeticao; i++){
            if(i == repeticao){
                this.blocos = [...this.blocos, {paginas: paginas}]
            }else{
                this.blocos = [...this.blocos, {paginas: paginas - (paginas-5)}]
            }
            paginas = paginas-5;
        }
        this.pagina = this.$props.posts.thispage;
        this.where = (Math.ceil(this.pagina/5)-1);
        }catch(e){
            console.log('achoooo');
        }
    },
    data(){
        return{
            pagina: 1,
            where: 0,
            blocos: []
        }
    },
    methods: {
        async page(id){
            if(id != 0 && id <= this.$props.posts.pages){
                this.$emit('movePage' ,id);
                this.where = (Math.ceil(id/5) - 1);
                this.$props.posts.thispage = id;
                this.pagina = id;
            }else if(id != 0 && id > this.$props.posts.pages){
                id = this.$props.posts.pages;
                this.$emit('movePage' ,id);
                this.where = (Math.ceil(id/5) - 1);
                this.$props.posts.thispage = id;
                this.pagina = id;
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
        min-width: 20px;
        background: white;
        float: left;
        text-align: center;
        border: 0.5px solid rgb(218, 218, 218);
        cursor: pointer;
        padding: 3px;
    }
    .active{
        text-decoration: underline;
    }
</style>