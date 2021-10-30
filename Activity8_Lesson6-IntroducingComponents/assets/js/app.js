const app = Vue.createApp({
    data() {
        return {
            // detailsAreVisible: false,
            friends: [{
                    id: 'marcela',
                    name: 'Marcela Emberga',
                    phone: '01234 5678 991',
                    email: 'embergamarzcela@gmail.com'
                },
                {
                    id: 'marz',
                    name: 'Marz Almonte',
                    phone: '09876 543 221',
                    email: 'marzalmonte23@gmail.com'
                },
            ],
        };
    }
});

app.component('friend-contact', {
    template: `
    <li>
        <h2> {{ friend.name }} </h2>
        <button @click="toggle()"> 
            {{ detailsAreVisible ? 'Hide' : 'Show'}} Details
        </button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }} </li>
            <li><strong>Email:</strong> {{ friend.email }} </li>
        </ul>
    </li>
    `,
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'marcela',
                name: 'Marcela Emberga',
                phone: '01234 5678 991',
                email: 'embergamarzcela@gmail.com'
            },
        };
    },
    methods: {
        toggle() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount('#app');