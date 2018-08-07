<template>
    <div>
        <!-- 传入prop时使用连字符 -->
        <!-- 使用v-bind动态绑定 -->
        <!-- 不使用v-bind传的都是字符串 true 123 -->
        <blog-post v-bind="post" prop-f="success">

        </blog-post>
    </div>
</template>
<script>
// 属性
// 子组件中不得直接改变props
// 如果需要请在data中定义(父组件传入的prop用作初始值)
// 或computed(需要进行转换)
// 类型检查: String, Number, Boolean, Object, Array, Date, Function, Symbol
// 自定义构造函数: Person, Dog, Girl ...
let Child = {
    props: {  // 组件定义中props使用驼峰
        post: {
            type: Object,
            required: false
        },
        title: {
            type: String,
            required: true
        },
        content: {
            type: [String, Number],
            required: false
        },
        propA: Boolean,
        propB: [String, Number],
        propC: {
            type: Object,
            required: false
        },
        propD: {
            type: Number,
            default: 100
        },
        propE: {
            type: Object,
            default () {
                return { message: 'hello' }
            }
        },
        propF: {
            type: String,
            validator: function (value) {
                // 这个值必须匹配下列字符串中的一个
                return ['success', 'warning', 'danger'].indexOf(value) !== -1
            }
        }
    },
    data () {
        return {
            article: {
                title: '文章标题',
                content: '文章内容',
                time: '2018-08-07'
            }
        }
    },
    template: `
        <div>
            <h3>{{ title }}</h3>
            <p>{{ content }}</p>
            <p>
                prop-f: {{ propF }}
            </p>
        </div>
    `
}

export default {
    data () {
        return {
            post: {
                title: '文章标题',
                content: '文章内容',
                time: '2018-08-07'
            }
        }
    },
    components: {
        'blog-post': Child
    },
    created () {
        console.log(this.axios)
    }
}
</script>
<style scoped>
</style>
