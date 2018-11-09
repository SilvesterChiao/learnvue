<template>
    <div class="elementui-demo">
        <!-- Basic -->
        <basic-layout></basic-layout>
        <basic-button></basic-button>
        <!-- Form -->
        <!-- Data -->
        <!-- Notice -->
        <notice-alert></notice-alert>
        <notice-loading></notice-loading>
        <notice-message></notice-message>
        <notice-message-box></notice-message-box>
        <notice-notification></notice-notification>
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
// Notice
import NoticeAlert from './notice/NoticeAlert'
import NoticeLoading from './notice/NoticeLoading'
import NoticeMessage from './notice/NoticeMessage'
import NoticeMessageBox from './notice/NoticeMessageBox'
import NoticeNotification from './notice/NoticeNotification'
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
        NoticeAlert,
        NoticeLoading,
        NoticeMessage,
        NoticeMessageBox,
        NoticeNotification,
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
