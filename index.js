// const myPromise = new Promise((resolve, reject) => {
//     const arr = [1, "hello", 2, "world"]
//     const rando = Math.floor(Math.random() * 4);
//     const item = arr[rando];
//     if (typeof(item) == "string") {
//         resolve();
//     } else {
//         reject();
//     }
// });

// myPromise.then(() => {
//     console.log("It is a string");

// }).catch(() => console.log("It is a number"))


// const myPromise = async () => {
//     const arr = await [1, "hello", 2, "world"]
//     const rando = await Math.floor(Math.random() * 4);
//     const item = arr[rando];
//     if (typeof(item) == "string") {
//         console.log("string");
//         return;
//     } else {
//         return error;
//     }

// };

// myPromise().catch((err) => console.log(err));


const charInfo = async (index) => {
    const rawData = await fetch(`https://swapi.dev/api/people/${index}`);
    const characters = await rawData.json();
    console.log(characters);
    const characterName = document.getElementById("charName");
    characterName.textContent = characters.name;
    const charPlanet = document.getElementById("charPlanet");
    charPlanet.textContent = characters.homeworld.name;
    console.log(characters.homeworld.name);
    const charHeight = document.getElementById("charHeight");
    charHeight.textContent = characters.height;

    // const pokeList = document.getElementById("list");
    // pokeList.innerHTML = "";
    // for (let i = 0; i < 5; i++) {
    //     let li = document.createElement("li");
    //     li.textContent = pokemonData.moves[i].move.name;
    //     pokeList.appendChild(li);
    // }
    
}
charInfo(1).catch(err => console.log(err));

index = 1;

const button = document.getElementById("charRandom");
button.addEventListener("click", () => {
    index = Math.floor(Math.random() * 82);
    charInfo(index).catch(err => console.log(err));
})
