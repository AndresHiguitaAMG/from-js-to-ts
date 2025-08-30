import './style.css';
// import './bases/01-cons-let';
// import './bases/02-template-string';
// import './bases/03-object-literals';
// import './bases/04-arrays';
// import './bases/05-functions';
// import './bases/06-obj-destructuring';
// import './bases/07-array-destructuring';
// import './bases/08-imp-exp';
import { getHeroByOwner } from './bases/08-imp-exp';
import { Owner } from './bases/data/heroes.data';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hola Mundo</h1>
  </div>
`;

console.log(getHeroByOwner (Owner.DC));
