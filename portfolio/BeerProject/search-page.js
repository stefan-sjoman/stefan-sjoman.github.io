const searchUrl = 'https://api.punkapi.com/v2/beers';
const formElement = document.querySelector('form');
formElement.addEventListener('submit', search);
const forwardButton = document.createElement('button');
const backButton = document.createElement('button');
const pageDisplay = document.createElement('span');
const navElement = document.querySelector('nav');
const ulTag = document.querySelector('ul');
let pageNumber = 1;
let cachePages = [];

let searchStr = "";
let searchStrHops = "";
let searchStrMalt = "";
let searchStrBrewedBefore = "";
let searchStrBrewedAfter = "";
let searchStrAbvMin = 0;
let searchStrAbvMax = 100;

function search(evt) {
    pageNumber = 1;

    cachePages = [];

    searchStr = evt.target[0].value;
    searchStrHops = evt.target[1].value;
    searchStrMalt = evt.target[2].value;
    searchStrBrewedAfter = evt.target[3].value;
    searchStrBrewedBefore = evt.target[4].value;

    searchStrAbvMin = evt.target[5].value;
    if (searchStrAbvMin.length !== 0) {
        searchStrAbvMin = parseFloat(searchStrAbvMin);
    }
    searchStrAbvMax = evt.target[6].value;
    if (searchStrAbvMax.length !== 0) {
        searchStrAbvMax = parseFloat(searchStrAbvMax);
    }

    if (validate()) {
        getData(generateUrl(), showFirstPage);
    }

    pageNumber++;
    getData(generateUrl(), cacheNextPage);
    pageNumber--;
    evt.preventDefault();
}

function render(data) {

    ulTag.innerText = "";
    ulTag.addEventListener('click', openBeerInfo);

    data.forEach((item) => {
        const liTag = document.createElement('li');
        liTag.textContent = item.name;
        liTag.setAttribute('name', item.id);
        ulTag.appendChild(liTag);
    });
    createNavButtons();

    if (pageNumber === 1) {
        backButton.classList.add('inactive');
    }
}

function validate() {
    if (compareDates(searchStrBrewedAfter, searchStrBrewedBefore) &&
        checkIfNumber(searchStrAbvMax) &&
        checkIfNumber(searchStrAbvMin) &&
        compareAbv(searchStrAbvMin, searchStrAbvMax)) {
        return true;
    }
    return false;
}

function checkIfNumber(value) {
    if (value.length === 0) {
        return true;
    } else if (isNaN(value) || value < 0) {
        alert("Skriv in ett positivt tal för alkoholhalterna.");
        return false
    }
    return true;
}

function compareAbv(min, max) {
    if (min > 100 || max > 100) {
        alert("Alkoholprocenten kan inte vara över 100.");
        return false;
    } else if (min.length === 0 || max.length === 0) {
        return true;
    } else if (min <= max) {
        return true;
    }
    alert("Kontrollera ordningen på alkoholhalterna.");
    return false;
}

function compareDates(after, before) {
    if (after.length === 0 && before.length === 0) {
        return true
    } else if (after.length !== 0 && !after.includes("-")) {
        alert("Kontrollera datumformat.");
        return false
    } else if (before.length !== 0 && !before.includes("-")) {
        alert("Kontrollera datumformat.");
        return false
    } else {
    let dateArray = (after.split('-'))
    let monthAfter = dateArray[0] - 1;
    let yearAfter = dateArray[1];
    dateArray = (before.split('-'))
    let monthBefore = dateArray[0] - 1;
    let yearBefore = dateArray[1];

    let dateAfter = new Date(yearAfter, monthAfter);
    let dateBefore = new Date(yearBefore, monthBefore);

    if (dateAfter > dateBefore) {
        alert("Kontrollera ordningen på datumen.");
        return false;
    }
}
return true;
}

function generateUrl() {
    let beerNameSearch = "";
    if (searchStr !== "") {
        beerNameSearch = `&beer_name=${searchStr}`;
    }
    let hopsSearch = "";
    if (searchStrHops !== "") {
        hopsSearch = `&hops=${searchStrHops}`;
    }
    let maltSearch = "";
    if (searchStrMalt !== "") {
        maltSearch = `&malt=${searchStrMalt}`;
    }
    let brewedBefore = "";
    if (searchStrBrewedBefore !== "") {
        brewedBefore = `&brewed_before=${searchStrBrewedBefore}`;
    }
    let brewedAfter = "";
    if (searchStrBrewedAfter !== "") {
        brewedAfter = `&brewed_after=${searchStrBrewedAfter}`;
    }
    let abvMin = "";
    if (searchStrAbvMin !== "") {
        abvMin = `&abv_gt=${searchStrAbvMin}`;
    }
    let abvMax = "";
    if (searchStrAbvMax !== "") {
        abvMax = `&abv_lt=${searchStrAbvMax}`;
    }

    const url = `${searchUrl}?&page=${pageNumber}&per_page=10${beerNameSearch}${hopsSearch}${maltSearch}${brewedBefore}${brewedAfter}${abvMin}${abvMax}`;
    return url;
}

function getData(url, callback) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            callback(data);
        })
        .catch(error => {
            console.log(error);
            ulTag.innerText = `Något gick fel:
        ${error}`;
        });
}

function showFirstPage(data) {
    if (data.length !== 0) {
        render(data);
        cachePages.push(data);
    } else {
        backButton.classList.add('inactive');
        ulTag.innerText = "";
        const liTag = document.createElement('li');
        liTag.innerText = "Inga sökresultat";
        ulTag.appendChild(liTag);
        navElement.innerText = "";
        pageNumber--;
    }
}

function cacheNextPage(data) {
    if (data.length !== 0) {
        cachePages.push(data);
        forwardButton.classList.remove('inactive');
    } else {
        forwardButton.classList.add('inactive');
    }
}

function createNavButtons() {
    forwardButton.textContent = '►';
    forwardButton.addEventListener('click', goForward);
    backButton.textContent = '◄';
    backButton.addEventListener('click', goBack);

    pageDisplay.textContent = pageNumber;

    navElement.appendChild(backButton);
    navElement.appendChild(pageDisplay);
    navElement.appendChild(forwardButton);
}

function goForward() {

    if (cachePages.length > pageNumber) {
        pageNumber++;
        backButton.classList.remove('inactive');
        render(cachePages[pageNumber - 1])
        pageNumber++;
        getData(generateUrl(), cacheNextPage);
        pageNumber--;
    }
}

function goBack() {

    if (pageNumber > 1) {
        pageNumber--;
        render(cachePages[pageNumber - 1]);
        forwardButton.classList.remove('inactive');
    }
}

function openBeerInfo(evt) {

    const beerId = evt.target.getAttribute('name');
    if (beerId !== null) {
        const url = `beer-info.html?name=${beerId}`;
        window.open(url);
    }
}