export default {
    methods: {
        hello () {
            console.log('Hello from HelloMixin')
        }
    },
    created () {
        this.hello()
    }
}
