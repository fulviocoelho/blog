<template>
    <header>
        <div class="container">    
            <div id="logo"><img :src="config.logo" alt=""></div>    
            <div class="text"><h1>{{config.titulo}}</h1></div>
            <div style="clear:both"></div>
        </div>
    </header>    
</template>

<script>
export default {
    name : 'Header',
    props: ['config']
}
</script>

<style scoped>
    header .container #logo img{
        max-height: 100px;
    }
    header .container #logo{
        float: left;
    }
    header .container .text{
        float: right;
        margin-top: 30px;
    }
    header .container .text h1{
        margin: 0;
        padding: 0;
    }
    header{
        border-bottom: 3px solid gray;
        height: auto;
    }
</style>