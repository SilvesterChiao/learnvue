<template>
    <div style="flex: 1;">
        <div id="dynamic-component-demo" class="demo">
            <button v-for="tab in tabs" v-bind:key="tab" v-bind:class="['tab-button', { active: currentTab === tab }]" v-on:click="currentTab = tab">{{ tab }}</button>

            <keep-alive :include="['hello', 'tab-archive']" exclude="tab-posts">
                <component v-bind:is="currentTabComponent" class="tab"></component>
            </keep-alive>
        </div>
    </div>
</template>
<script>
// 动态组件
let Home = {
    name: 'hello',
    data () {
        return {
            number: 0
        }
    },
    template: '<div>Home component: {{ number }} <button @click="number ++">add</button></div>',
    deactivated () {
        console.log('home deactivated')
    }
}
let Posts = {
    data () {
        return {
            number: 0
        }
    },
    template: '<div>Posts component: {{ number }} <button @click="number ++">add</button></div>',
    activated () {
        console.log('posts activated')
    }
}
let Archive = {
    template: '<div>Archive component</div>'
}
export default {
    data () {
        return {
            currentTab: 'Home',
            tabs: ['Home', 'Posts', 'Archive']
        }
    },
    computed: {
        currentTabComponent: function () {
            return 'tab-' + this.currentTab.toLowerCase()
        }
    },
    components: {
        'tab-home': Home,
        'tab-posts': Posts,
        'tab-archive': Archive
    }
}
</script>
<style scoped>
.tab-button {
    padding: 6px 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #f0f0f0;
    margin-bottom: -1px;
    margin-right: -1px;
}
.tab-button:hover {
    background: #e0e0e0;
}
.tab-button.active {
    background: #e0e0e0;
}
.tab {
    border: 1px solid #ccc;
    padding: 10px;
}
</style>
