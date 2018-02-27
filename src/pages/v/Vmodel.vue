<template>
    <div>
        <h1>{{ msg }}</h1>
        <div>
            <h3>表单控件绑定</h3>
        </div>
        <div class="cinema">
            <h5>电影院选座</h5>
            <div class="cinema-box">
                <div v-for="row in rows" :key="row">
                    <div :ref="col + '-' + row" :class="{'cinema-chair-selected': false}" class="cinema-chair" v-for="col in cols" :key="col" @click="selectChair([col, row])">
                        {{ col }} {{ row }}
                    </div>
                </div>
            </div>

            <div>
                <span>已选座位({{ selectedChairs.length }}个共{{ selectedChairs.length * price }}元)：</span>
                <div>
                    <span v-for="selectedChair in selectedChairs">
                        {{selectedChair[0]}}排{{ selectedChair[1] }}号
                    </span>
                </div>
                <el-button type="primary" @click="submitChairs">确认</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-model',
    data() {
        return {
            msg: 'v-model',
            price: 20,
            rows: 5,
            cols: 8,
            selectedChairs: [
            ],
            disabledChairs: [
                [3, 5]
            ]
        }
    },
    methods: {
        selectChair(chair){
            if(this.checkDisabledChairs(chair)){
                alert('此座位已被预定，请选择其他作为');
                return;
            };
            var refIndex = chair[0] + '-' + chair[1];
            var dom = this.$refs[refIndex][0];
            var selectedIndex = 0;
            var selected = this.selectedChairs.some(function(item, index){
                if(item[0] == chair[0] && item[1] == chair[1]){
                    selectedIndex = index;
                };
                return item[0] == chair[0] && item[1] == chair[1];
            });
            if(selected){
                this.selectedChairs.splice(selectedIndex, 1);
                dom.style.backgroundColor = '';
            }else{
                this.selectedChairs.push(chair);
                dom.style.backgroundColor = 'green';
            }
        },
        redDisabledChairs(){
            this.disabledChairs.forEach((item, index, array)=>{
                var disabledChairsIndex = item[0] + '-' + item[1];
                this.$refs[disabledChairsIndex][0].style.cursor = 'no-drop';
                this.$refs[disabledChairsIndex][0].style.backgroundColor = 'red';
            });
        },
        checkDisabledChairs(chair){
             return this.disabledChairs.some((item, index, array)=>{
                return item[0] === chair[0] && item[1] === chair[1];
            });
        },
        submitChairs(){
            console.log(this.selectedChairs);
        }
    },
    mounted(){
        this.$nextTick(()=>{
            this.redDisabledChairs();
        })
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

.cinema {

}

.cinema-box {
    display: flex;
    justify-content: center;
    flex-flow:
}

.cinema-chair {
    margin: 4px;
    height: 20px;
    border: 1px solid #f0f0f0;
    cursor: pointer;
}

.cinema-chair-selected {
    background-color: green;
}

.cinema-chair-disabled {
    background-color: red;
    cursor: no-drop;
}
</style>
