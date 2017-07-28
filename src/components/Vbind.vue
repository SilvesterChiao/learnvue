<template>
    <div>
        <h1>{{ msg }}</h1>
        <div>
            <h3>绑定HTML Class</h3>
            <div>
                <h3>对象语法</h3>
                <p>
                    我们可以传给<code>v-bind:class</code>一个对象，以动态地切换class。
                </p>
                <div v-bind:class="classObject">
                    Vue
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-bind',
    data() {
        return {
            msg: 'Class 与 Style 绑定',
            classObject: {
                active: true,
                'text-danger': false
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
