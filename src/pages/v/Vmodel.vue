<template>
    <div style="flex: 1;">
        <div>
            <h3>表单控件绑定</h3>
            <div>
                <h5>单行文本</h5>
                <input v-model="message" placeholder="edit me">
                <p>Message is: {{ message }}</p>
            </div>
            <div>
                <h5>多行文本</h5>
                <span>Multiline message is:</span>
                <p style="white-space: pre-line;">{{ message }}</p>
                <br>
                <textarea v-model="message" placeholder="add multiple lines"></textarea>
            </div>
            <div>
                <h5>复选框</h5>
                <input type="checkbox" id="checkbox" v-model="checked">
                <label for="checkbox">{{ checked }}</label>
                <div id='example-3'>
                    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
                    <label for="jack">Jack</label>
                    <input type="checkbox" id="john" value="John" v-model="checkedNames">
                    <label for="john">John</label>
                    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
                    <label for="mike">Mike</label>
                    <br>
                    <span>Checked names: {{ checkedNames }}</span>
                </div>
            </div>
            <div>
                <h5>单选按钮</h5>
                <div id="example-4">
                    <input type="radio" id="one" value="One" v-model="picked">
                    <label for="one">One</label>
                    <br>
                    <input type="radio" id="two" value="Two" v-model="picked">
                    <label for="two">Two</label>
                    <br>
                    <span>Picked: {{ picked }}</span>
                </div>
            </div>
            <div>
                <h5>选择框</h5>
                <div id="example-5">
                    <select v-model="selected">
                        <option disabled value="">请选择</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                    </select>
                    <span>Selected: {{ selected }}</span>
                </div>
                <div id="example-6">
                    <select v-model="selectedArray" multiple style="width: 50px;">
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                    </select>
                    <br>
                    <span>Selected: {{ selectedArray }}</span>
                </div>
                <select v-model="selected2">
                    <option v-for="option in options" v-bind:value="option.value" :key="option.value">
                        {{ option.text }}
                    </option>
                </select>
                <span>Selected: {{ selected2 }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-model',
    data () {
        return {
            msg: 'v-model',
            message: '',
            checked: false,
            checkedNames: [],
            picked: '',
            selected: '',
            selectedArray: [],
            selected2: 'A',
            options: [
                { text: 'One', value: 'A' },
                { text: 'Two', value: 'B' },
                { text: 'Three', value: 'C' }
            ]
        }
    },
    methods: {
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
