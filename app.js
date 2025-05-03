const container = document.querySelector('#container');
const base = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for(let i=1;i<=10;i++){
    const newImg = document.createElement('img');
    newImg.src = `${base}${i}.png`;
    container.appendChild(newImg);
}