<template>
    <div>
        hashtable-demo
    </div>
</template>
<script>
import { HashTable } from './../../assets/scripts/structure/HashTable'

export default {
    created () {
        console.log('--------HashTable----------')
        let someNames = ['David', 'Jennifer', 'Donnie', 'Raymond',
            'Cynthia', 'Mike', 'Clayton', 'Danny', 'Jonathan']
        let hTable = new HashTable()
        for (let i = 0; i < someNames.length; ++i) {
            hTable.put(someNames[i])
        }

        hTable.showDistro()
    }
}
</script>
<style scoped>
</style>
