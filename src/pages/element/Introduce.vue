<template>
    <div class="elementui">
        <h2>基础组件</h2>
        <h3>Layout 布局</h3>
        <p>通过基础的24分栏，迅速简便地创建布局。</p>
        <h4>基础布局</h4>
        <p>使用单一分栏创建基础的栅格布局</p>
        <div>
            <el-row :gutter="24" type="flex" align="middle" tag="article">
                <el-col :span="8" :push="1" tag="section">
                    :gutter="24" 增加分隔
                    <div class="hidden-xs-only">xs时隐藏</div>
                </el-col>
                <el-col :span="8" :offset="2" :pull="1" tag="section" :xs="12" :sm="{ span: 24, offset: 0 }" :md="8" :lg="{ span: 8, offset: 4 }">
                    :offset="2" 增加偏移
                    <div class="hidden-sm-and-down">sm以下隐藏</div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <i class="el-icon-edit"></i>
                    <i class="el-icon-share"></i>
                    <i class="el-icon-delete"></i>
                    <el-button size="small" type="primary" icon="el-icon-search" @click="search">搜索</el-button>
                    <el-button-group>
                        <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
                        <el-button type="primary">下一页
                            <i class="el-icon-arrow-right el-icon--right"></i>
                        </el-button>
                    </el-button-group>
                </el-col>
                <el-col :span="12">
                    <el-button-group>
                        <el-button type="primary" icon="el-icon-edit"></el-button>
                        <el-button type="primary" icon="el-icon-share"></el-button>
                        <el-button type="primary" icon="el-icon-delete"></el-button>
                        <el-button type="primary" icon="el-icon-search">搜索</el-button>
                        <el-button type="primary">上传
                            <i class="el-icon-upload el-icon-right"></i>
                        </el-button>
                    </el-button-group>
                </el-col>
            </el-row>
            <div>
                <h3>折叠面板</h3>
                <el-row>
                    <el-col :span="8">
                        <el-collapse v-model="activeNames" @change="handleChange" accordion>
                            <el-collapse-item title="一致性 Consistency" name="1">
                                <div>bulabula不用啦</div>
                                <div>bulabula不用啦</div>
                            </el-collapse-item>
                            <el-collapse-item title="反馈 Fankui" name="2">
                                <div>buadflkj</div>
                                <div>buiadf</div>
                            </el-collapse-item>
                            <el-collapse-item>
                                <template slot="title">
                                    一致性 Consistency
                                    <i class="header-icon el-icon-info"></i>
                                </template>
                                <div>可控</div>
                                <div>可控</div>
                            </el-collapse-item>
                        </el-collapse>
                    </el-col>
                </el-row>
            </div>
            <div>
                <h3>走马灯</h3>
                <el-row>
                    <el-col :span="12">
                        <el-carousel height="150px" trigger="click" indicator-position="none" arrow="never" :interval="3000" type="card">
                            <el-carousel-item v-for="item in 4" :key="item">
                                <h3>{{ item }}</h3>
                            </el-carousel-item>
                        </el-carousel>
                    </el-col>
                </el-row>
            </div>
            <div>
                <h3>卡片</h3>
                <el-row>
                    <el-col :span="12">
                        <el-card :body-style="{ padding: '10px' }">
                            <div slot="header">
                                <span>卡片名称</span>
                                <el-button style="float: right; padding: 3px 0;" type="text">
                                    操作按钮
                                </el-button>
                            </div>
                            <div v-for="o in 4" :key="o">
                                {{ '列表内容' + o }}
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </div>
            <div>
                <h3>文字提示</h3>
                <el-row>
                    <el-col :span="12">
                        <el-tooltip effect="light" placement="top">
                            <div slot="content">用具名 slot 分发content<br/>替代tooltip中的content属性</div>
                            <el-button>上左</el-button>
                        </el-tooltip>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css'

export default {
    name: 'elementui',
    data () {
        let msg = 'Element'
        return {
            msg: msg,
            activeNames: ['1']
        }
    },
    methods: {
        search () {
            this.$message({
                message: '提示',
                type: 'error',
                showClose: true,
                center: true
            })

            // this.$message.info({
            //     message: 'info'
            // })
        },
        handleChange (val) {
            console.log(val)
        }
    }
}

</script>

<style lang="scss" scope>
$blue: #409eff;
$success: #67c23a;
$warning: #e6a23c;
$danger: #f56c6c;
$info: #909399;
$text-primary: #303133;
$text-normal: #606266;
$text-secondary: #909399;
$text-Placeholder: #c0c4cc;
$border-1: #dcdfe6;
$border-2: #e4e7ed;
$border-3: #ebeef5;
$border-4: #f2f6fc;

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>
