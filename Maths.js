function hotel (name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked =booked;
    
    this.checkavailability = function() {
        return this.rooms - this.booked;
    };
}

let hilton = new hotel (madar, 200, 20);
let albarako= new hotel (misbax, 300, 24);

console.log(hilton.checkavailability() );

function sum (num1, num2, num3) {
    return num1+num2-num3
}

console.log(sum(10,3,4));


let name = "maajid" ; 
    function toUpper(text) {
        return text.toUppercase();
        
    }
    console.log(toUpper(name));
