const firstName = "Fernando";
const lastName  = "Toledo";
const age       = "28"

const canIEnter = (_string, name, ageExpresion) => {

    console.log(name);
    console.log(ageExpresion);
}

const output = canIEnter`${firstName} quiere pasar y tienen ${age} y trae su INE`

console.log(output);
console.log(firstName + lastName);