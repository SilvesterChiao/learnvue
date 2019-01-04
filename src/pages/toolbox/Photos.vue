<template>
    <div class="main" style="flex: 1;">
        <div class="photo-list">
        <div class="photo" v-for="(pic, index) in pictures" :key="index" v-on:click="showPhoto(index)">
            <img :src="pic" alt="image">
        </div>
        </div>
        <div class="photo-show" v-if="show" v-on:click="hidePhoto">
        <div>
            <img :src="showedPhoto" alt="image">
        </div>
        </div>
    </div>
</template>

<script>
import picture1 from 'images/photo_1.jpg'
import picture2 from 'images/photo_2.jpg'
import picture3 from 'images/photo_3.jpg'
import picture4 from 'images/photo_4.jpg'
import picture5 from 'images/photo_5.jpg'
import picture6 from 'images/photo_6.jpg'
import picture7 from 'images/photo_7.jpg'
import picture8 from 'images/photo_8.jpg'
import picture9 from 'images/photo_9.jpg'

export default {
    name: 'photos',
    data: function () {
        return {
            msg: 'photos',
            showedPhoto: '',
            show: false,
            pictures: [
                picture1,
                picture2,
                picture3,
                picture4,
                picture5,
                picture6,
                picture7,
                picture8,
                picture9,
                picture1,
                picture2,
                picture3,
                picture4,
                picture5,
                picture6,
                picture7,
                picture8,
                picture9,
                picture1
            ]
        }
    },
    methods: {
        showPhoto: function (index) {
            this.showedPhoto = this.pictures[index]
            this.show = true
        },
        hidePhoto: function () {
            this.show = false
        }
    }
}
</script>

<style lang="scss" scoped>
.main {
    .photo-list {
        // overflow: hidden;
        column-count: 4;
        column-gap: 8px;
        .photo {
            // float: left;
            // padding: 10px;
            // border: 1px solid #ccc;
            break-inside: avoid;
            box-sizing: border-box;
            padding: 10px;
            img {
                width: 100%;
            }
        }
    }
    .photo-show {
        // display: none;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);
        img {
            display: block;
            margin: 100px auto 0;
            width: 600px;
        }
    }
}
</style>
