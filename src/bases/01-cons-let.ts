//En la variable firstName se asigna un string ya que al ser una constante su valor no puede cambiar, y además TypeScript infiere el tipo de dato y no muestra el tipo de dato explícitamente.
const firstName: String = "Andrés";
const lastName: String = "Higuita";
let diceNumber: number = 2;
diceNumber = 7;

const containsLetterH = lastName.includes("H");
console.log({ containsLetterH, diceNumber, firstName, lastName }); 
