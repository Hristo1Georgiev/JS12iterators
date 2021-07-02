//For loop:
//While loop:
const colors = ["yellow", "blue", "red", "orange"];
let i = 0;
while (colors[i]) {
    console.log("this is the color " + colors[i])
    i++;
}

//For loop:

for (colors[i = 0]; i <= colors.length - 1; i++) {
    console.log("this is the color " + colors[i])
}

//Nieuwe stijl: array methods
colors.forEach(Element => console.log(Element));

/*
Mijn while loop neemt 5 regels in beslag.
MIjn For loop neemt 3 regels in beslag 
en gebruken van array method neemt 1 regel in beslag.
Gebruiken van array method is corter en makkelijker te begrijpen (voor mij).
Gebruiken van for loop is makkelijker door de prosperities van een object 
te gaan dan gebruiken van een array method.
*/
// Ik heb google gebruikt en hier geprobeert for loop op object.
const person = {
    firstName: "Chris",
    lastName: "Gerrge",
    age: 49,
    eyeColor: "black",
    hair: "brown"
};
for (const key in person) {
    console.log(person[key]);
}
