const h1 = document.querySelector(`h1`);
h1.innerHTML = "Latihan Javascript Selesai";

let name = "John";
const age = 30;
const divOutput = document.querySelector(`div#output`);
divOutput.innerHTML = `Nama: ${name} | Umur: ${age} - `;

let fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
  divOutput.innerHTML += fruits[i] + " ";
}

let person = { firstName: "John", lastName: "Doe", age: 30 };

divOutput.innerHTML += `| ${person.firstName} ${person.lastName}`;

let inputSubmit = document.querySelector(`#inputSubmit`);
inputSubmit.addEventListener("click", () => {
  let inputNumber = parseInt(document.getElementById(`inputNumber`).value);

  if (inputNumber > 10) {
    divOutput.innerHTML += "<br/> Nomor yang anda masukan lebih dari 10.";
  } else if (inputNumber < 10) {
    divOutput.innerHTML += "<br/> Nomor yang anda masukan kurang dari 10.";
  } else if ((inputNumber = 10)) {
    divOutput.innerHTML += "<br/> Nomor yang anda masukan sama dengan 10.";
  }

  for (let i = 1; i <= inputNumber; i++) {
    divOutput.innerHTML += `<br/> ${i}`;
  }
});

function greet(name) {
  return `Hello, ${name}`;
}

divOutput.innerHTML += "<br/>" + greet("Candra");


function calculateSquare(number) {
  return number * number;
}

divOutput.innerHTML += "<br/> Nomor Akar: " + calculateSquare(3); 

let jumlahkanAngka = (num1, num2) => {
  return num1 + num2;
}


divOutput.innerHTML += "<br/> Hasil Jumlah: " + jumlahkanAngka(3, 2); 

let students = ["Alice", "Bob", "Charlie"];
students.push("Candra");
students.forEach(student => {
  divOutput.innerHTML += "<br/> " + student; 
});

let car = {brand: "Toyota", model: "Corolla", year: 2020};

for (const key in car) {
  divOutput.innerHTML += "<br/> " + key; 
}

let listCar = [
  {brand: "Toyota", model: "Corolla", year: 2020},
  {brand: "Ford", model: "Focus", year: 2019},
  {brand: "Tesla", model: "Model 3", year: 2022}
]

// let carsList;

listCar.forEach(car => {
  divOutput.innerHTML +='<br/>Brand: ' + car.brand + ', Model: ' + car.model + ', Year: ' + car.year ;
});