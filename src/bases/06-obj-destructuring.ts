const person = {
    name: "Andrés",
    age: 29,
    key: "AvedMG",
};

const {  name: Aved, age, key } = person;
console.log({Aved, age, key});

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
};

const useContext = ({ name, age, key, rank }: Hero) => {
    return {
        keyName: key,
        user: {
            name,
            age,
        },
        rank,
    };
};

const { 
    rank, 
    keyName, 
    user
    // user: { name } 
} = useContext(person);
const { name } = user;
console.log({rank, keyName, name});