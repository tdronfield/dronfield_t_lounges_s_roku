import { fetchData } from "./components/dataMiner.js";


// VUE for login
(() => {
    let vue_vm = new Vue({
        mounted: function() {
            console.log("Vue is mounted");
        },

    }).$mount("#login"); // Connect Vue to HTML wrapper
})



// VUE for Pick User
(() => {
    let vue_vm = new Vue({
        data: {
            collection: [],
        }, 
        
        mounted: function() {
            console.log("Vue is mounted, trying to fetch for initial data");

            // fetchData("./includes/index.php").then(data => console.log(data)).catch(err => console.error(err));
            // fetchData("./includes/index.php")
            // .then(data => {
            //     data.forEach(item => this.collection.push(item));
            // })
            // .catch(err => console.error(err));
        },

        methods: {
        },
    }).$mount("#pickuser"); // Connect Vue to HTML wrapper
})



// VUE for Adult Dashboard
(() => {
    let vue_vm = new Vue({
        data: {
            collection: [],
        }, 
        
        mounted: function() {
            console.log("Vue is mounted, trying to fetch for initial data");

            // fetchData("./includes/index.php").then(data => console.log(data)).catch(err => console.error(err));
            fetchData("./includes/index.php")
            .then(data => {
                data.forEach(item => this.collection.push(item));
            })
            .catch(err => console.error(err));
        },

        methods: {
        },
    }).$mount("#dash-adult"); // Connect Vue to HTML wrapper
})



// VUE for kid's dashboard
(() => {
    let vue_vm = new Vue({
        data: {
            collection: [],
        }, 
        
        mounted: function() {
            console.log("Vue is mounted, trying to fetch for initial data");

            // fetchData("./includes/index.php").then(data => console.log(data)).catch(err => console.error(err));
            fetchData("./includes/index.php")
            .then(data => {
                data.forEach(item => this.collection.push(item));
            })
            .catch(err => console.error(err));
        },

        methods: {
        },
    }).$mount("#dash-kid"); // Connect Vue to HTML wrapper
})

();