const app = Vue.createApp({
    data() {
        return {
            counter: 0
        }
    },
    watch: {
        counter(value) {
            if (value >= 37) {
                const that = this;
                setTimeout(function() {
                    that.counter = 0;
                }, 5000);
            }

        }
    },


    methods: {
        add5(num) {
            this.counter = this.counter + num;
        },
        add1(num) {
            this.counter = this.counter + num;
        },
        result() {
            if (this.counter === 0) {
                return '0';
            } else if (this.counter < 37) {
                return 'Not there yet';
            } else if (this.counter > 37) {
                return 'Too much!';
            } else if (this.counter === 37) {
                return this.counter;
            } else {
                return this.counter = 0;
            }
        }

    }
});
app.mount('#assignment3');