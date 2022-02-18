let link = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

let main = document.querySelector('main');

// let pokemonSprite = document.createElement('img');
// pokemonSprite.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`;
// pokemonSprite.alt="#1";
// pokemonSprite.classList.add('sprite');
// main.appendChild(pokemonSprite);

for(let i =1; i<=151; i++)
{
    let figure = document.createElement('figure'); 
    let pokemonSprite = document.createElement('img');
    let caption = document.createElement('figcaption');

    caption.innerText = `#${i}`;
    caption.classList.add('caption');

    pokemonSprite.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    pokemonSprite.alt=`${i}`;
    pokemonSprite.classList.add('sprite');

    figure.appendChild(pokemonSprite);
    figure.appendChild(caption);
    main.appendChild(figure);
}