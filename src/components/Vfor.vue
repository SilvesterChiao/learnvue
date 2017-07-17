<template>
    <div>
        <h1>{{ msg }}</h1>
        <div>
            <h3>列表渲染</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-for',
    data() {
        return {
            msg: 'v-for'
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
