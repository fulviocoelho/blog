<template>
    <footer class="footer">
        <div class="container">
            <p>{{config.footer}}</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    props: ['config']
}
</script>

<style scoped>
    footer{
        height: auto;
        width: 100%;
        border-top: 3px solid gray;
        color: gray;
    }
    .container{
        padding-top: 20px;
        padding-bottom: 20px;
    }
</style>