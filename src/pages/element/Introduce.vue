<template>
    <div class="elementui-demo">
        <!-- Basic -->
        <basic-layout></basic-layout>
        <basic-button></basic-button>
        <!-- Form -->
        <!-- Data -->
        <!-- Notice -->
        <!-- Navigation -->
        <!-- Others -->
        <others-tooltip></others-tooltip>
        <others-card></others-card>
        <others-carousel></others-carousel>
        <others-collapse></others-collapse>
    </div>
</template>

<script>
// Basic
import BasicLayout from './basic/BasicLayout'
import BasicButton from './basic/BasicButton'
// Others
import OthersTooltip from './others/OthersTooltip'
import OthersCard from './others/OthersCard'
import OthersCarousel from './others/OthersCarousel'
import OthersCollapse from './others/OthersCollapse'

export default {
    name: 'elementui',
    data () {
        let msg = 'Element'
        return {
            msg: msg
        }
    },
    methods: {
    },
    components: {
        BasicLayout,
        BasicButton,
        OthersTooltip,
        OthersCard,
        OthersCarousel,
        OthersCollapse
    }
}

</script>

<style lang="scss" scope>
@import '~styles/elementui.scss';
</style>
