<template>
    <div>
        <h1>{{ msg }}</h1>
        <div>
            <h3>计算属性</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'computed',
    data() {
        return {
            msg: 'computed'
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
