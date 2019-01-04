<template>
    <div style="flex: 1;">
        <div>
            <h3>vuex</h3>
            <div class="vuex-demo">
                <h5>vuex基础</h5>
                <div>
                    <p>number: {{ number }}</p>
                    <p>是否为正数:{{ isZh }}</p>
                    <p>收否等于0: {{ isFu }}</p>
                    <el-button type="primary" @click="addNumber" size="small">+ 1</el-button>
                    <el-button @click="changeFu" size="small">相反数</el-button>
                </div>
            </div>
            <div class="vuex-demo pet-shop">
                <h5>modules</h5>
                <div>
                    <p>
                        动物数量: {{ animalCount }}&nbsp;&nbsp;
                        <transition name="list">
                            <span v-if="dogAdd && catAdd" class="list-item">+1</span>
                        </transition>
                    </p>
                    <p>
                        狗的数量: {{ dogCount }}&nbsp;&nbsp;
                        <transition name="list" @after-enter="afterDogEnter" @after-leave="afterDogLeave">
                            <span v-if="dogAdd" class="list-item">+1</span>
                        </transition>
                    </p>
                    <p>
                        猫的数量: {{ catCount }}&nbsp;&nbsp;
                        <transition name="list" @after-enter="afterCatEnter" @after-leave="afterCatLeave">
                            <span v-if="catAdd" class="list-item">+1</span>
                        </transition>
                    </p>
                </div>
                <el-row>
                    <el-col :span="8">
                        <el-button type="primary" @click="addDogCount">狗+1</el-button>
                        <el-button type="primary" @click="addCatCount">猫+1</el-button>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
    data () {
        return {
            dogAdd: true,
            catAdd: true
        }
    },
    computed: {
        ...mapState([
            'number'
        ]),
        ...mapGetters([
            'isZh'
        ]),
        ...mapGetters({
            zheng: 'isZh'
        }),
        anNumber () {
            return this.$store.state.number
        },
        isFu () {
            return this.$store.getters.isFu(0)
        },
        animalCount () {
            return this.$store.state.a.count
        },
        ...mapState({
            dogCount: state => state.d.count,
            catCount: state => state.c.count
        })
    },
    methods: {
        ...mapMutations([
            'add'
        ]),
        addNumber () {
            this.$store.commit('add')
        },
        changeFu () {
            this.$store.dispatch('changFu', {
                flag: true
            }).then(() => {
                console.log('action then')
            }).catch(() => {
                console.log('action catch')
            })
        },
        addDogCount () {
            this.$store.dispatch('incrementDog').then(() => {
                this.dogAdd = !this.dogAdd
                this.$store.dispatch('incrementAnimal')
            })
        },
        addCatCount () {
            this.$store.dispatch('incrementCat').then(() => {
                this.catAdd = !this.catAdd
                this.$store.dispatch('incrementAnimal')
            })
        },
        afterDogEnter: function (el) {
            this.dogAdd = true
        },
        afterDogLeave: function (el) {
            this.dogAdd = true
        },
        afterCatEnter: function (el) {
            this.catAdd = true
        },
        afterCatLeave: function (el) {
            this.catAdd = true
        }
    },
    created () {
    }
}
</script>

<style scoped>
.vuex-demo {
    margin-top: 10px;
}

.vuex-demo h5 {
    font-size: 16px;
    margin-bottom: 10px;
}

.vuex-demo p {
    margin-bottom: 10px;
}
/* 过渡效果 */
.list-item {
    display: inline-block;
    opacity: 0;
}

.list-enter-active {
    animation: leave-out 1s;
}

@keyframes leave-out {
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    100% {
        transform: translateY(-10px);
        opacity: 0;
    }
}
</style>
