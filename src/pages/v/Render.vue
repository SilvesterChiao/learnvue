<template>
    <div>
        <anchored-heading :level="1">Hello world!</anchored-heading>
    </div>
</template>
<script>
// 渲染函数
var getChildrenTextContent = function (children) {
    return children.map(function (node) {
        return node.children
            ? getChildrenTextContent(node.children)
            : node.text
    }).join('')
}

// let AnchoredHeading = {
//     render: function (createElement) {
//         return createElement(
//             'h' + this.level,
//             this.$slots.default
//         )
//     },
//     props: {
//         level: {
//             type: Number,
//             required: true
//         }
//     }
// }

let AnchoredHeading = {
    render: function (createElement) {
        // 创建 kebab-case 风格的ID
        var headingId = getChildrenTextContent(this.$slots.default)
            .toLowerCase()
            .replace(/\W+/g, '-')
            .replace(/(^\-|\-$)/g, '')

        return createElement(
            'h' + this.level,
            [
                createElement('a', {
                    attrs: {
                        name: headingId,
                        href: '#' + headingId
                    }
                }, this.$slots.default)
            ]
        )
    },
    props: {
        level: {
            type: Number,
            required: true
        }
    }
}

export default {
    components: {
        AnchoredHeading
    }
}
</script>
<style lang="scss" scoped>
</style>
