const app = Vue.createApp({
    // template: '<h1>Hello {{firstName}}</h1>',
    data (){
        return {
            firstName : "Mustapha",
            lastName : "David",
            email : "davetush@gmail.com",
            gender : "male",
            showButtons : true,
            picture : "https://randomuser.me/api/portraits/men/10.jpg",
        }
    },
    methods : {
      showButton (){
        this.showButton = false;
      } , 
      async getUser(){
        res = await fetch("https://randomuser.me/api");
        const { results } = await res.json();
        console.log(results);
        this.firstName = results[0].name.first,
        this.lastName = results[0].name.last,
        this.gender = results[0].gender,
        this.email = results[0].email,
        this.picture = results[0].picture.large;
      }
    }
})
app.mount('#app');