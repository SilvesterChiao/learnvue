<template>
	<div>
		<p>{{ msg }}</p>
		<button @click="emitMyEvent">emit</button>
	</div>
</template>

<script>
export default {
  name: 'banner',
  data () {
    return {
      msg: 'banner'
    }
  },
  methods: {
  	emitMyEvent(){
  		this.$emit('my-event', this.msg)
  	}
  }
}
</script>