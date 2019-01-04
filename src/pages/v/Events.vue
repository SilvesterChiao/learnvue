<template>
    <div style="flex: 1;">
        <ul>
            <li>
                searchText: {{ searchText }}
            </li>
            <li>
                lovingVue: {{ lovingVue }}
            </li>
        </ul>
        <article-post :title="article.title" :read-count="article.readCount" @add-read-count="doSomething" v-model="searchText">

        </article-post>
        <base-checkbox v-model="lovingVue">
        </base-checkbox>
    </div>
</template>
<script>
// 自定义事件
// 事件名使用小写连字符格式
// 缺绑定原生事件
// 缺.sync修饰符
let Child = {
    props: {
        title: {
            type: String,
            required: true
        },
        readCount: {
            type: Number,
            required: true
        },
        value: {
            type: String,
            required: true
        }
    },
    template: `
        <div>
            <h3>{{ title }}</h3>
            <button @click="addReadCount">阅读量{{ readCount }}</button>
            <input :value="value" @input="$emit('input', $event.target.value)">
        </div>
    `,
    methods: {
        addReadCount () {
            this.$emit('add-read-count', 0.1)
        }
    }
}

let BaseCheckbox = {
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: ['checked'],
    template: `
        <div>
            <input type="checkbox" :checked="checked" @change="$emit('change', $event.target.checked)">
        </div>
    `
}

export default {
    data () {
        return {
            article: {
                title: '震惊!16岁少女竟然造如此对待!',
                readCount: 0
            },
            searchText: '',
            lovingVue: false
        }
    },
    methods: {
        doSomething (e) {
            this.article.readCount++
            console.log(e)
        }
    },
    components: {
        'article-post': Child,
        'base-checkbox': BaseCheckbox
    }
}
</script>
<style scoped>
</style>
