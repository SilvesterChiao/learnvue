<template>
    <div>
        tree-demo
    </div>
</template>
<script>
import { BST } from './../../assets/scripts/structure/Tree'

export default {
    created () {
        console.log('---------Tree----------')
        var nums = new BST()
        nums.insert(23)
        nums.insert(45)
        nums.insert(16)
        nums.insert(37)
        nums.insert(3)
        nums.insert(99)
        nums.insert(22)
        console.log('Inorder traversal: ')
        nums.postOrder(nums.root)
        console.log(nums.getMin().data)
        console.log(nums.getMax().data)
    }
}
</script>
<style scoped>
</style>
