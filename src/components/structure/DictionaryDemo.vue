<template>
    <div>
        dictionary-demo
    </div>
</template>
<script>
import { Dictionary } from './../../assets/scripts/structure/Dictionary'

export default {
    created () {
        console.log('-----------Dictionary---------------');
        var pbook = new Dictionary();
        pbook.add("Mike", "123");
        pbook.add("David", "345");
        pbook.add("Cynthia", "456");
        console.log("David's extension: " + pbook.find("David"));
        pbook.remove("David");
        pbook.showAll();
        console.log(pbook.count());
        pbook.clear()
        console.log(pbook.count());
    }
}
</script>
<style scoped>
</style>
