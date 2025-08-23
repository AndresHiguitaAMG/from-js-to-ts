function greet(name: string): string {
    return `Hola ${name}`;
};

const message = greet("Andrés");
console.log(message);

const greet2 = (name: string): string => `Hola ${name}`;

const message2 = greet2("Mar");
console.log(message2);

interface User {
    userId: string;
    username: string;
};

function getUser(): User {
    return {
        userId: "ABC-123",
        username: "Aved123",
    };
};

const getUser2 = () => ({
    userId: "ABC-123",
    username: "Aved123",
});

const user = getUser();
const user2 = getUser2();
console.log({user, user2});

const myNumbers: number[] = [1,2,3,4,5,6,7];

// myNumbers.forEach(function(value) {
//     console.log({value});
// });


// myNumbers.forEach((value) => {
//     console.log({value});
// });

myNumbers.forEach(console.log);



