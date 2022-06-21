const BEST_MOVIES_URL = 'http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page_size=7';
const DRAMA_MOVIES_URL = 'http://localhost:8000/api/v1/titles/?genre=Drama&sort_by=-imdb_score&page_size=7';
const HORROR_MOVIES_URL = 'http://localhost:8000/api/v1/titles/?genre=Horror&sort_by=-imdb_score&page_size=7';
const ACTION_MOVIES_URL = 'http://localhost:8000/api/v1/titles/?genre=Action&sort_by=-imdb_score&page_size=7';
const ALL_MOVIES_URL = 'http://localhost:8000/api/v1/titles/';


let intScroll;

/**
 * @param {string} url url of API.
 */
async function getData(url){
    try {
        const RESPONSE = await fetch(url);
        const JSON = await RESPONSE.json();
        return JSON;
    } catch (err) {
        console.log(err);
    }
};


/**
 * @param {json} data result of API's response.
 * @param {string} nameCategorie name of movies category searched.
 */
async function getMovies(data, nameCategorie){
    let slide = document.getElementById(nameCategorie);
    let prev = slide.getElementsByClassName("slide__container__prev");
    let next = slide.getElementsByClassName("slide__container__next");
    let categorie = document.getElementById(nameCategorie+'_cover');
    let slideContainer = document.createElement('div');
    slideContainer.className = "slide__container__cover__items";
    categorie.appendChild(slideContainer);
    for (let resultMovie of data.results){
        let movieItem = document.createElement('p')
        movieItem.className = "item";
        let movieCover = document.createElement('img');
        slideContainer.appendChild(movieItem);
        movieItem.setAttribute("onclick", "showModal(" + resultMovie.id + ")");
        movieCover.setAttribute("src",resultMovie.image_url);
        movieItem.appendChild(movieCover);

    }
    prev[0].setAttribute("onmouseover", "goPrev(" + categorie.id +")");
    prev[0].setAttribute("onmouseout", "clearScroll()");
    next[0].setAttribute("onmouseover", "goNext(" + categorie.id +")");
    next[0].setAttribute("onmouseout", "clearScroll()");

};

/**
 * @param {json} data result of API's response.
 */
async function getBestMovie(data){
    let movieInfo = await getData(ALL_MOVIES_URL + data.results[0].id);
    document
        .getElementById("best_movie_img")
        .setAttribute("src", movieInfo.image_url)
    document
        .getElementById("best_movie_img")
        .setAttribute("onclick", "showModal(" + movieInfo.id + ")");
    document
        .getElementById("best_movie_title")
        .innerText = movieInfo.title;

    document
        .getElementById("best_movie_description")
        .innerHTML = movieInfo.long_description;
};


/**
 * @param {number} id the movie's id to search.
 */
async function getModalMovieInfo(id){

    let data = await getData(ALL_MOVIES_URL + id);
    console.log(data);

    document
        .getElementById("cover")
        .setAttribute("src", data.image_url);
    document
        .getElementById("title")
        .innerText = data.title;
    document
        .getElementById("genre")
        .innerHTML = "<span><b>Genre: </b></span>" + data.genres.join(', ');
    document
        .getElementById("date")
        .innerHTML = "<span><b>Date: </b></span>" + data.date_published;   
    document
        .getElementById("score")
        .innerHTML = "<span><b>Note IMDB: </b></span>" + data.imdb_score;

    document
        .getElementById("rated")
        .innerHTML = "<span><b>Note: </b></span>" + data.rated;

    document
        .getElementById("country")
        .innerHTML = "<span><b>Pays: </b></span>" + data.countries.join(', ');
    
    document
        .getElementById("duration")
        .innerHTML = "<span><b>Durée: </b></span>" + data.duration + "min";
       
    document
        .getElementById("directors")
        .innerHTML = "<span><b>Réalisateur: </b></span>" + data.directors.join(', ');
    document
        .getElementById("actors")
        .innerHTML = "<span><b>Acteurs: </b></span>" + data.actors.join(', ');

    document
        .getElementById("result")
        .innerHTML = "<span><b>Résultat au box office: </b></span>" + data.worldwide_gross_income;
        
    document
        .getElementById("description")
        .innerHTML = "<span><b>Description: </b></span>" + data.long_description;
};

async function loadMovies(){
    
    try {
        let bestMovies = await getData(BEST_MOVIES_URL);
        getMovies(bestMovies,"best_movies");
        getBestMovie(bestMovies);
        await getData(DRAMA_MOVIES_URL).then((data)=>{getMovies(data,"drama" )});
        await getData(HORROR_MOVIES_URL).then((data)=>{getMovies(data,"horror" )});
        await getData(ACTION_MOVIES_URL).then((data)=>{getMovies(data,"action" )});
    } catch (err) {
        console.log(err);
    }

};

/**
 * @param {number} id the movie's id to show on the modal.
 */
async function showModal(id) {

    getModalMovieInfo(id); 
    toggleModal();
      
};

async function toggleModal(){   
    const MODAL_CONTAINER = document.querySelector(".modal__container");
    const MODAL_TRIGGERS = document.querySelectorAll(".modal-trigger");

    MODAL_TRIGGERS.forEach(trigger => trigger.addEventListener("click", toggleModal));
    MODAL_CONTAINER.classList.toggle("active");
};

/**
 * @param {objet} section the HTML node to move to right.
 */
function goNext(section){
    intScroll = setInterval(function(){ document.getElementById(section.id).scrollLeft += 1} , 5);
};

/**
 * @param {objet} section the HTML node to move to left.
 */
function goPrev(section){
    intScroll = setInterval(function(){ document.getElementById(section.id).scrollLeft -= 1} , 5);
};

function clearScroll(){
    clearInterval(intScroll);
};

loadMovies();
