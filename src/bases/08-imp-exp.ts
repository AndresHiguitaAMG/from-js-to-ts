import { heroes, Owner, type Hero } from "./data/heroes.data";

const getHeroById = (id: number): Hero | undefined => {
    const hero = heroes.find((hero) => {
        return hero.id === id;
    });
    // if (!hero) {
    //     throw new Error(`No existe un héroe con el id ${id}`)
    // }
    return hero;
};

export const getHeroByOwner = (owner: Owner): Hero[] | undefined => {
    const owners = heroes.filter((ow) => {
        return ow.owner === owner;
    })
    return owners;
};

// console.log(getHeroById(2));