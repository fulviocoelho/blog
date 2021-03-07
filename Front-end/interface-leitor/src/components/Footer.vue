<template>
    <footer class="footer">
        <div class="container">
            <div class="nome">
                <p class="nome">{{config.nome}} &copy; {{config.ano}}</p>
            </div>
            <div v-if="config.midias.rss !== ''" class="midia">
                <a :href="config.midias.rss" target="_blank">
                    <img src="../assets/rss.svg" alt="">
                </a>
            </div>
            <div v-if="config.midias.twitch !== ''" class="midia">
                <a :href="config.midias.twitch" target="_blank">
                    <img src="../assets/twitch.svg" alt="">
                </a>
            </div>
            <div v-if="config.midias.youtube !== ''" class="midia">
                <a :href="config.midias.youtube" target="_blank">
                    <img src="../assets/youtube.svg" alt="">
                </a>
            </div>
            <div v-if="config.midias.twitter !== ''" class="midia">
                <a :href="config.midias.twitter" target="_blank">
                    <img src="../assets/twitter.svg" alt="">
                </a>
            </div>
            <div v-if="config.midias.instagram !== ''" class="midia">
                <a :href="config.midias.instagram" target="_blank">
                    <img src="../assets/instagram.svg" alt="">
                </a>
            </div>
            <div v-if="config.midias.facebook !== ''" class="midia">
                <a :href="config.midias.facebook" target="_blank">
                    <img src="../assets/facebook.svg" alt="">
                </a>
            </div>
            <div class="clear"></div>
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
        margin-top: 30px;
        height: auto;
        width: 100%;
        color: gray;
    }
    .container{
        padding-top: 20px;
        padding-bottom: 20px;
    }
    .nome{
        text-transform: uppercase;
        float: left;
    }
    .midia{
        height: 20px;
        width: 20px;
        float: right;
        margin-left: 10px;
    }
    .midia img{
        max-height: 20px;
    }
</style>