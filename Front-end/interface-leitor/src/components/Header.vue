<template>
    <header>
        <div class="container">    
            <div v-if="config.logo !== ''" id="logo"><img :src="config.logo" alt=""></div>    
            <div v-else class="text"><h1>{{config.nome}}</h1></div>
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
        margin-top: 50px;
        margin-left: auto;
    }
    header .container .text{
        margin-top: 50px;
    }
    header .container .text h1{
        margin: 0;
        padding: 0;
    }
    header{
        margin-bottom: 35px;
        height: auto;
        display: flex;
    }
</style>