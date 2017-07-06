<template>
    <div class="film">
        <img class="film-image" src="../assets/movie1.jpg" alt="生化危机6" v-on:click="get">
        <div class="film-info">
            <h3>{{ film.name }}</h3>
            <el-input v-on:keyup.enter.native="addFilm" v-model="newFilm.name" placeholder="Enter确认"></el-input>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'film',
        data () {
            let msg = 'Login'
            return {
                msg: msg,
                film: {
                    id: '0',
                    name: '生化危机：终章',
                    title: '爱丽丝',
                    image: '../assets/movie1.jpg',
                    hot: true
                },
                newFilm: {
                    id: '1',
                    name: '',
                    title: '',
                    image: '',
                    hot: false
                }
            }
        },
        methods: {
            addFilm: function(){
                this.film.name = this.newFilm.name;
            },
            get: function(){
                console.log('OK')
            }
        }
    }

</script>

<style>
    .film {

    }
    .film-image {
        display: block;
        float: left;
    }
    .film-info {
        float: left;

    }
</style>
