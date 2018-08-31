<template>
    <div id="editor">
        <textarea :value="input" @input="update"></textarea>
        <div class="markdown-box" v-html="compiledMarkdown"></div>
    </div>
</template>
<script>
import _ from 'lodash'
import marked from 'marked'

export default {
    data () {
        return {
            input: '# hello'
        }
    },
    computed: {
        compiledMarkdown: function () {
            return marked(this.input, { sanitize: true })
        }
    },
    methods: {
        update: _.debounce(function (e) {
            this.input = e.target.value
        }, 300)
    }
}
</script>
<style>
#editor {
    margin: 0;
    height: 100%;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: #333;
    display: flex;
}

textarea,
#editor div {
    display: inline-block;
    width: 50%;
    height: 100%;
    vertical-align: top;
    box-sizing: border-box;
    padding: 20px;
}

textarea {
    resize: none;
    outline: none;
    background-color: #292929;
    border: none;
    border-right: 1px solid #ccc;
    font-size: 14px;
    font-family: 'Monaco', courier, monospace;
    color: #fff;
}

code {
    color: #f66;
}

.markdown-box {
    background-color: #f6f6f6;
}
</style>
