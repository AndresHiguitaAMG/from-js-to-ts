interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
};

interface Address {
    postalCode: string,
    city: string,
}

const iromann: Person = {
    firstName: "Tony",
    lastName: "Stark",
    age: 45,
    address: {
        postalCode: "ABC123",
        city: "New York"
    }
};

console.log(iromann);

//structuredClone -> clona un objeto de manera profunda (deep clone), es decir, copia todas las propiedades y subpropiedades del objeto original.
// const spiderman = structuredClone(iromann);

// iromann.firstName = "Peter";
// iromann.lastName = "Parker";
// spiderman.age = 22;
// spiderman.address.city = "Cali";

// console.log(iromann, spiderman);
