let user = {                    // Új adatokkal feltöltött Objektum létrehozása
    name: "Kiss Ramóna",
    age: 20,
    city: "Bp"
};

let admin = new Object();       // Új üres Objektum léterhozása
let customer = {};              // Új üres Objektum létrehozása     'Shorthand'

user.name                       // Objektum mmeghívása
Object.keys(user);              // Objektum kulcsainak lekérése
Object.values(user);            // Objektum értékeinek lekérése
Object.entries(user);           // Objektum kulcsai és értékeinek lekérése
Object.entries(user)[1][0];     // Specifikus tömb és elem lekérése


const user = {                  // const-al létrehozott dolgokat nem lehet változtatni később, mint tömb
    name: "John Doe",
    age: 33
};

user.name = "Sanyi";            // A const tömb elemeit külön-külön lehet változtatni

// Objektumban a FOR IN ciklust kell használni
let user = {                    // Új adatokkal feltöltött Objektum létrehozása
    name: "Kiss Ramóna",
    age: 20,
    city: "Bp"
};
/*
for (let i = 0; i < user.length; i++){          // Ez így nem működik az objektumban
    console.log(user[i]);
}
*/

for (let k in user){
    console.log("Key: ", k, 'value: ', user[k]);
}

// Objektumban a FOR OF ciklus
let cars = ["Volvo", "BMW", "Opel"];                                // Itt el tudja dönteni a sorrendet (Iterálható)
cars

let user = {name: "Pisti", age: 33, email: "pisti@gmail.com"};      // Itt nem tudja eldönteni a sorrendet (Nem Iterálható)


// Metódusok

let user = {
    name: "John Doe",
    age: 30,
    sayHi: function(){                              // Az Objektum ezen tulajdonsága egy függvény
        console.log("Hi");
    }
};
_