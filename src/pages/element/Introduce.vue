<template>
    <div class="elementui">
        <h2>基础组件</h2>
        <h3>Layout 布局</h3>
        <p>通过基础的24分栏，迅速简便地创建布局。</p>
        <h4>基础布局</h4>
        <p>使用单一分栏创建基础的栅格布局</p>
        <div>
            <el-row :gutter="20">
                <el-col :span="24">
                    24
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">12</el-col>
                <el-col :span="12">12</el-col>
            </el-row>
            <el-row :gutter="24">
                <el-col :span="8" :offset="2">
                    :gutter="24" 增加分隔
                </el-col>
                <el-col :span="8" :offset="2">
                    :offset="2" 增加偏移
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8" :offset="2">
                    :gutter="24" 增加分隔
                </el-col>
                <el-col :span="8" :offset="2">
                    :offset="2" 增加偏移
                </el-col>
            </el-row>
            <el-row>
                <h3>图标</h3>
                <el-col :span="12">
                    通过设置类名为 el-icon-iconName 来使用即可
                </el-col>
                <el-col :span="12">
                    <i class="el-icon-edit"></i>
                    <i class="el-icon-share"></i>
                    <i class="el-icon-delete"></i>
                    <el-button type="primary" icon="el-icon-search">搜索</el-button>
                </el-col>
            </el-row>
            <el-row :gutter="24">
                <el-col :span="8">
                    <el-button>默认按钮</el-button>
                    <el-button type="primary">主要按钮</el-button>
                    <el-button type="text">文字按钮</el-button>
                </el-col>
                <el-col :span="8">
                    <el-button :plain="true" :disabled="true">主要按钮</el-button>
                    <el-button type="primary" :disabled="true">主要按钮</el-button>
                    <el-button type="text" :disabled="true">文字按钮</el-button>
                </el-col>
                <el-col :span="8">
                    <el-button type="success">成功按钮</el-button>
                    <el-button type="warning">警告按钮</el-button>
                    <el-button type="danger">危险按钮</el-button>
                    <el-button type="info">信息按钮</el-button>

                    <el-button :plain="true" type="success">成功按钮</el-button>
                    <el-button :plain="true" type="warning">警告按钮</el-button>
                    <el-button :plain="true" type="danger">危险按钮</el-button>
                    <el-button :plain="true" type="info">信息按钮</el-button>
                </el-col>
            </el-row>
            <el-row :gutter="24">
                <el-col :span="6">
                    <el-button type="primary" icon="el-icon-edit"></el-button>
                    <el-button type="primary" icon="el-icon-share"></el-button>
                    <el-button type="primary" icon="el-icon-delete"></el-button>
                    <el-button type="primary" icon="el-icon-search">搜索</el-button>
                    <el-button type="primary">上传
                        <i class="el-icon-upload el-icon-right"></i>
                    </el-button>
                </el-col>
                <el-col :span="6">
                    <el-button-group>
                        <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
                        <el-button type="primary">下一页
                            <i class="el-icon-arrow-right el-icon--right"></i>
                        </el-button>
                    </el-button-group>
                    <el-button-group>
                        <el-button type="primary" icon="el-icon-edit"></el-button>
                        <el-button type="primary" icon="el-icon-share"></el-button>
                        <el-button type="primary" icon="el-icon-delete"></el-button>
                    </el-button-group>
                </el-col>
                <el-col :span="6">
                    :loading="true" : 在按钮上显示加载状态
                    <br>
                    <el-button type="primary" :loading="true">加载中</el-button>
                </el-col>
                <el-col :span="6">
                    size: large | small | mini
                    <br>
                    <el-button type="primary" size="large">大型按钮</el-button>
                    <el-button type="primary">正常按钮</el-button>
                    <el-button type="primary" size="small">小型按钮</el-button>
                    <el-button type="primary" size="mini">超小按钮</el-button>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>

export default {
    name: 'elementui',
    data () {
        let msg = 'Element'
        return {
            msg: msg
        }
    }
}

</script>

<style>
</style>
