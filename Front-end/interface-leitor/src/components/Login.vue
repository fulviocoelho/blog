<template>
    <div>

        <div v-if="this.login === true">
            <form action="#" @submit="Login" class="form">
                <h1>Login</h1>
                <div class="form-input">
                    <input class="input usuario" placeholder="Usuario" v-model="usuario" name="usuario" type="text">
                    <input class="input senha" placeholder="Senha" v-model="senha" name="senha" type="password">
                </div>
                <div class="clear"></div>
                <div class="form-button">    
                    <button type="submit" class="submit login">Logar</button>
                    <a href="#" @click="form" class="registrar">Registrar-me</a>
                </div>
                <div class="clear"></div>
            </form>
        </div>
        <div v-else>
            <form action="#" @submit="Registrar" class="form">
                <h1>Registrar</h1>
                <div class="form-input">
                    <input class="input usuario" placeholder="Usuario" v-model="usuario" name="usuario" type="text">
                    <input class="input senha" placeholder="Senha" v-model="senha" name="senha" type="password">
                </div>
                <div class="clear"></div>
                <div class="form-button">    
                    <button type="submit" class="submit login">Registrar</button>
                    <a href="#" @click="form" class="registrar">Logar-me</a>
                </div>
                <div class="clear"></div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return{
            usuario: '',
            senha: '',
            login: true
        }
    },
    methods: {
        Login(e) {
            e.preventDefault();
            this.$emit('act','ds578f15sd489fdgs98ds1f1sd198f1s');
        },
        Registrar(e) {
            e.preventDefault();
        },
        form(e) {
            e.preventDefault();
            this.login = !this.login; 
        }
    }
}
</script>

<style scoped>
.form{
    margin: 30px 0;
    width: 100%;
}
h1{
    margin-bottom: 20px;
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

.input{
    padding: 10px 20px;
    border-radius: 0;
    border: 1px solid rgb(218, 218, 218);
    transition-duration: 0.5s;
    resize: none;
    overflow: auto;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
}
.input:focus{
    border-radius: 0;
    outline: none;
    border: 1px solid rgb(163, 163, 163);
}

.usuario{
    width: 44%;
    float: left;
}
.senha{
    width: 44%;
    float: right;
}

.login{
    width: 48%;
    float: left;
}
.registrar{
    padding-top: 20px;
    float: right;
}
.form-button{
    margin-top:10px;
}
</style>