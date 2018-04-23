var square = x => x * x;
console.log(square(9));

var user = {
    name :'aamir',
    satHi:() => {
      console.log(`hi I'm ${this.name}`);
    },
    satHiAlt(){
        console.log(arguments);
        console.log(`hi I'm ${this.name}`);
    }
}
user.satHiAlt(1,2,3,4);