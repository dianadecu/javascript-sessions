const person = {
    firstName: "Joe",
    lastName: "Doe",
    printName: function(){ 
       (() => {
        console.log(`${this.firstName} ${this.lastName}`);
    })();
    },
    shoutName: function(){
        setTimeout(() => {
           this.printName();
        }, 1000);
    },
};
 
person.shoutName()


//function() {} // contextul este cel unde este definita functia 
//() => {} // contextul unde este rulata functia