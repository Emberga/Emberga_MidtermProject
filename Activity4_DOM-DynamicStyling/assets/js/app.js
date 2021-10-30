const app = Vue.createApp({
    data() {
        return {
            user: '',
            active: true,
            activeColor: '',
            color: '',
            button: 'Hide'
        }
    },
    methods: {
        userInput(event) {
            this.user = event.target.value;
            if (this.user === 'user1') {
                this.user1 = !this.user1;
            } else if (this.user === 'user2') {
                this.user2 = !this.user2;
            } else {
                this.user = user;
            }
        },
        toggle() {
            this.active = !this.active;
            if (this.active === true) {
                this.button = 'Hide'
                this.active = 'hidden'
            } else {
                this.button = 'Show'
            }
        },
        style(event) {
            this.color = event.target.value;
            if (this.color === 'purple') {
                this.activeColor = this.color;
            } else if (this.color === 'red') {
                this.activeColor = this.color
            } else if (this.color === 'yellow') {
                this.activeColor = this.color;
            } else {
                this.activeColor = activeColor;
            }

        }
    },
});

app.mount('#styling');