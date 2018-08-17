<template>
    <div>
        <h1>{{ msg }}</h1>
        <div>
            <h3>列表渲染</h3>
            <div>
                <ul>
                    <li>数组</li>
                    <li v-for="(item, index) in items" :key="`arr-${index}`">
                        {{ parentMessage }}-{{ index }}-{{ item.message }}
                    </li>
                    <li>对象</li>
                    <li v-for="(value, key, index) in object" :key="`obj-${index}`">
                        {{ index }}-{{ key }}-{{ value }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-for',
    data () {
        return {
            msg: 'v-for',
            parentMessage: 'parent',
            items: [
                {
                    message: 'Foo'
                },
                {
                    message: 'Bar'
                }
            ],
            object: {
                firstName: 'John',
                lastName: 'Doe',
                age: 19
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
