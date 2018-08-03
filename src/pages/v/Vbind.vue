<template>
    <div>
        <h1>{{ msg }}</h1>
        <div>
            <h3>对象语法</h3>
            <div :class="{ active: isActive }">
                :class="{ active: isActive }"
            </div>
            <div class="static" :class="{ active: isActive, 'text-danger': hasError }">
                :class="{ active: isActive, 'text-danger': hasError }"
            </div>
            <div :class="classObject">
                :class="classObject"
            </div>
            <div :class="classObjectComputed">
                :class="classObjectComputed"
            </div>

            <h3>数组语法</h3>
            <div :class="[ activeClass, errorClass ]">
                :class="[ activeClass, errorClass ]"
            </div>
            <div :class="[ isActive ? activeClass : '', errorClass ]">
                :class="[ isActive ? activeClass : '', errorClass ]"
            </div>
            <div :class="[ {active: isActive}, errorClass ]">
                :class="[ {active: isActive}, errorClass ]"
            </div>

            <h3>绑定内联样式</h3>
            <h5>对象语法</h5>
            <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">
                :style="{ color: activeColor, fontSize: fontSize + 'px' }"
            </div>
            <div :style="styleClass">
                :style="styleClass"
            </div>
            <h5>数组语法</h5>
            <div :style="[ baseStyle, overridingStyles ]">
                :style="[ baseStyle, overridingStyles ]"
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-bind',
    data () {
        return {
            msg: 'Class 与 Style 绑定',
            isActive: true,
            hasError: false,
            classObject: {
                active: false,
                'text-danger': true
            },
            error: false,
            activeClass: 'active',
            errorClass: 'text-danger',
            activeColor: 'red',
            fontSize: 20,
            styleClass: {
                color: 'gray',
                fontSize: '18px'
            },
            baseStyle: {
                color: 'darkblue'
            },
            overridingStyles: {
                color: 'pink'
            }
        }
    },
    computed: {
        classObjectComputed () {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
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
