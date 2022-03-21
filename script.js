let pokeNum = Math.floor((Math.random() * 151) + 1);
let container = document.querySelector('.container')
let pokeImg = document.createElement('img')

pokeImg.style.width = '10rem'

pokeImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeNum}.png`  

container.append(pokeImg)