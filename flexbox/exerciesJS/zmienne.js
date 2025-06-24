// srednia z liczb

let srdnia = (1 + 3 + 5 + 7) / 4
console.log(srdnia)

// termometr logiczny

let temperatura = 19;
if(temperatura < 0){
    console.log('bierzemy kurtkę')
}
else if (temperatura == 0) {
    console.log('bierzemy lekką kurtkę')
}
else if (temperatura >= 20) {
    console.log('bierzemy krótki rękach')
}
else {
    console.log("Zostajemy w domu")
}

//termomter logiczny 2 

let zmienna = 2;
if(zmienna > 0) {
    console.log("liczba jest dodatnia")
}
else if(zmienna == 0) {
    console.log("liczba to 0")
}
else{
    console.log("liczba jest ujemna")
}

// test na oddanie krwi 

let age = 18;
let weight = 34;

if(age >= 18){
    if(weight >=50){
        console.log("mozesz pobrac krew")
    }
    else{
        console.log("waga musi byc minimum 50kg, przykro mi ;-)")
    }
}
    else{
console.log("nie mozesz oddac krwi")
    }

 // petla

 let numbers = [1,2,3,4,5,6];
 for(let i = 0; i<numbers.length; i++) {
    console.log(`petla wypluwa nam: ${numbers[i] * 2}`);
 }

 let names = ['Ania', 'Ola', 'Kasia', 'Olek']
 for (let j = 0; j<names.length; j++) {
    console.log(`petla daje nam ${names[j]}`)
 }
 
 for(let p = names.length - 1; p>=0; p--){
    let el = names[p];
    console.log(`petla odwrotna wypluwa ${el}`)
  }

  // suma tablicy

  let array = [1,2,3,4,5,6,7,8,9,10];
  let suma = 0;

  for(u = 0; u<array.length; u++){
    suma=suma+array[u];
  }

  console.log(suma);


// obliczanie BMI

function calculatBmi(weight, height){
 let bmi = weight / (height * height)
 return bmi;
}

let result = calculatBmi(105, 1.75);
console.log(result)

// konwersja czasu 

function convertToSeconds(hours, minutes){
    return minutes * 60 + (hours * 60 * 60)
}