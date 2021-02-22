
const urlNoPage = "https://swapi.dev/api/people/?page=";
let pageNumber = 1;
let characterData;
let homeworldData;

getCharacters(pageNumber);


/********************* Fetch Data ***********************/

async function myFetch(url) {

    try {
            let response = await fetch(url);
        
            if (!response.ok) {
                throw new Error(`HTTPS error! status: ${response.status}`);
            } 
            return response = await response.json();
        }
    catch (error) {
        console.log(error);
    }
}

/********************* Get Characters ***********************/

async function getCharacters(pageNumber){

    const url = urlNoPage + pageNumber;
    respons = await myFetch(url);
    characterData = respons.results;
    createCharacters();  
}

/********************* Create Characters ***********************/

function createCharacters() {
    
    const characterUlTag = document.getElementById("characters-list");
    
    clearElementContent("characters-list");

    for (let i = 0; i < characterData.length; i++) {

        const listTag = document.createElement("li");
        listTag.innerHTML = characterData[i].name;

        if (i % 2) {
            listTag.classList.add("list-light-color");
        } 
        else {
            listTag.classList.add("list-dark-color");
        }

        listTag.addEventListener('click', () => {

            let character = [];
            
            character[0] = characterData[i].name;
            character[1] = characterData[i].height + " cm";
            character[2] = characterData[i].mass + " kg";
            character[3] = characterData[i].hair_color;
            character[4] = characterData[i].skin_color;
            character[5] = characterData[i].eye_color;
            character[6] = characterData[i].birth_year;
            character[7] = characterData[i].gender;
            let worldUrl = characterData[i].homeworld;
            
            setActiveButton(listTag);
            createDetails(character);
            getHomeworld(worldUrl);
            loadAnimation("homeworld-list", "load-ring-small");
        });
        
        characterUlTag.appendChild(listTag);
    }
}

/********************* Change Page / Display Page ***********************/

const downBtn = document.getElementById("nav-down-btn");
const upBtn = document.getElementById("nav-up-btn");
const pageDisplay = document.getElementById("page-display");

downBtn.addEventListener('click', pageDown);
upBtn.addEventListener('click', pageUp);

function pageDown() {

    if (pageNumber === 1) return;
    pageNumber -= 1;
    changePage(pageNumber);
}

function pageUp() {

    if (pageNumber === 8) return;
    pageNumber += 1;
    changePage(pageNumber);
}

function changePage() {

    pageDisplay.innerText = `${pageNumber} / 8`;
    clearElementContent("characters-list");
    clearElementContent("character-list");
    clearElementContent("homeworld-list");
    loadAnimation("characters-list", "load-ring-big");
    getCharacters(pageNumber);
}

/********************* Set Active Button ***********************/

function setActiveButton(listTag) {
    
    // ▸ is character &#9656;
    const characterLiTag = document.querySelectorAll("li");
    
    for (let i = 0; i < characterLiTag.length; i++) {
        characterLiTag[i].classList.remove("list-active-color");
        
        let hasArrow = characterLiTag[i].innerHTML;
        
        hasArrow = hasArrow.replace(" ▸", "");
        characterLiTag[i].innerHTML = hasArrow;
    }
    
    listTag.classList.add("list-active-color");
    listTag.innerHTML += " ▸";
}

/********************* Show Character Info ***********************/

function createDetails(character) {

    clearElementContent("character-list");

    const characterUlTag = document.getElementById("character-list");
    const characterDescription = ["", "Heigth: ", "Mass: ", "Hair color: ", "Skin color: "
        , "Eye color: ", "Birth year: ", "Gender: "];

    for (let i = 0; i < character.length; i++) {
        const listTag = document.createElement("li");
        listTag.innerHTML = characterDescription[i] + character[i];
        characterUlTag.appendChild(listTag);
    }
}

/********************* Get Homeworld ***********************/

async function getHomeworld(url){

    // Fix https error from swapi
    if (!url.includes("https")) {
        url = url.replace("http", "https");
    }

    respons = await myFetch(url);

    homeworldData = respons;

    createHomeworld(homeworldData);
}

/********************* Create Homeworld **********************/

function createHomeworld(homeworldData) {

    clearElementContent("homeworld-list");

    const homeworldUlTag = document.getElementById("homeworld-list");
    const homeworldDescription = ["", "Rotation period: ", "Orbital period: "
        , "Diameter: ", "Climate: ", "Gravity: ", "Terrain: "];
    const homeworld = [homeworldData.name, homeworldData.rotation_period
        , homeworldData.orbital_period, homeworldData.diameter
        , homeworldData.climate, homeworldData.gravity, homeworldData.terrain];

    for (let i = 0; i < homeworld.length; i++) {
        const listTag = document.createElement("li");
        listTag.innerHTML = homeworldDescription[i] + homeworld[i];
        homeworldUlTag.appendChild(listTag);
    }
}

/********************* Load Animation ***********************/

function loadAnimation(elementId, elementSize) {

    clearElementContent(elementId);

    const choosenElement = document.getElementById(elementId);
    const listTag = document.createElement("li");
    listTag.classList.add("load-ring");
    listTag.classList.add(elementSize);
    choosenElement.appendChild(listTag);
}

/********************* Clear Element Content **********************/

function clearElementContent(elementId) {

    const choosenElement = document.getElementById(elementId);
    choosenElement.innerHTML = "";
}