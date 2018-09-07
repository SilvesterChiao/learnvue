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
import ListDemo from './../../components/structure/ListDemo'
import StackDemo from './../../components/structure/StackDemo'
import QueueDemo from './../../components/structure/QueueDemo'
import DictionaryDemo from './../../components/structure/DictionaryDemo'
import HashtableDemo from './../../components/structure/HashtableDemo'
import TreeDemo from './../../components/structure/TreeDemo'
import SortDemo from './../../components/structure/SortDemo'

export default {
    data () {
        return {
            currentTab: 'list',
            tabs: [
                {
                    tab: 'list',
                    label: '列表'
                },
                {
                    tab: 'stack',
                    label: '栈'
                },
                {
                    tab: 'queue',
                    label: '队列'
                },
                {
                    tab: 'dictionary',
                    label: '字典'
                },
                {
                    tab: 'hashtable',
                    label: '散列'
                },
                {
                    tab: 'tree',
                    label: '树'
                },
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
        'tab-list': ListDemo,
        'tab-stack': StackDemo,
        'tab-queue': QueueDemo,
        'tab-dictionary': DictionaryDemo,
        'tab-hashtable': HashtableDemo,
        'tab-tree': TreeDemo,
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
