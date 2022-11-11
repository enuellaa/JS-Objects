//Oppgave 1
let bilfirma = {
    firmaNavn: "Enuella's Car Heaven",
    antallAnsatte: 300,
    bilListe: ["Tesla", "BMW", "Toyota", "Honda", "Nissan", "Jeep"],
    betaltSkatt: "25%",
    nettside: "https://www.enuella'scarheaven.no",
    informasjon(){
        console.log("Enuella is the owner and CEO of Enuella's Car Heaven. She is 19 years old.");
    }
};

console.log(bilfirma);

//Oppgave 2
bilfirma.firmaNavn = "Enuella Car Shop";
console.log(bilfirma.firmaNavn);

//Oppgave 3
bilfirma.bilListe.push("Jaguar");
console.log(bilfirma.bilListe);

//Oppgave 4
bilfirma.bilListe.shift();
console.log(bilfirma.bilListe);

//Oppgave 5
delete bilfirma.nettside;
console.log(bilfirma);

//Oppgave 6
bilfirma.status = "True";
console.log(bilfirma.status);

//Oppgave 7
for (const i of bilfirma.bilListe) {
    console.log(i);
}

//Oppgave 8
for (const key in bilfirma) {
    console.log(key);
}

//Oppgave 9
for (const key in bilfirma) {
   console.log(bilfirma[key]);
}

//Oppgave 10
function firstElement(params) {
    console.log(bilfirma.bilListe[params]);
}

firstElement(0)

//Oppgave 11
function lastElement(params) {
    console.log(bilfirma.bilListe[params]);
}

lastElement(5)

//Oppgave 12
var library = [
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
    },
    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: false
    },
    {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
    }];



    console.log(library);


    for (const i of library) {
    
    if (i.readingStatus == false) {
        console.log(i.title);
    }
}

