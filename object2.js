"use strict"

let user = {
  name: "John",
  money: 1000,

  /*
  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
  */

  // for hint="string"
  toString() {
    return `{name: "${this.name}"}`;
  },

  // for hint="number" or "default"
  valueOf() {
    return this.money;
  }ß


};


alert(user); 
alert(+user); 
alert(user + 500); 