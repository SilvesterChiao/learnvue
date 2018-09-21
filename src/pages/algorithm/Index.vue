<template>
    <div>
        <div id="dynamic-component-demo" class="demo">
            <button v-for="item in tabs" v-bind:key="item.tab" v-bind:class="['tab-button', { active: currentTab === item.tab }]" v-on:click="currentTab = item.tab">
                {{ item.label }}
            </button>

            <keep-alive>
                <component v-bind:is="currentTabComponent" class="tab"></component>
            </keep-alive>
        </div>
    </div>
</template>
<script>
import SortDemo from './../../components/algorithm/SortDemo'

export default {
    data () {
        return {
            currentTab: 'sort',
            tabs: [
                {
                    tab: 'sort',
                    label: '排序'
                }
            ]
        }
    },
    computed: {
        currentTabComponent: function () {
            return 'tab-' + this.currentTab.toLowerCase()
        }
    },
    methods: {
    },
    components: {
        'tab-sort': SortDemo
    },
    created () {
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
