const container = document.querySelector('#container');
const base = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const inp = prompt("Enter A Number");

for(let i=1;i<=inp;i++){
    const newImg = document.createElement('img');
    const pokemon = document.createElement('div');
    const num = document.createElement('span');
    newImg.src = `${base}${i}.png`;
    num.innerText=`#${i}`;
    pokemon.appendChild(newImg);
    pokemon.appendChild(num);
    container.appendChild(pokemon);
}