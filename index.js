const best_movie_url = 'http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page_size=7';
const drama_movie_url = 'http://localhost:8000/api/v1/titles/?genre=Drama&sort_by=-imdb_score&page_size=7';
const horror_movie_url = 'http://localhost:8000/api/v1/titles/?genre=Horror&sort_by=-imdb_score&page_size=7';
const action_movie_url = 'http://localhost:8000/api/v1/titles/?genre=Action&sort_by=-imdb_score&page_size=7';
const url_movies = 'http://localhost:8000/api/v1/titles/';
let intScroll;



async function getData(url){
    try {
        const response = await fetch(url);
        const json = await response.json();
        return json;
    } catch (err) {
        console.log(err);
    }
};

async function getMovies(data, cat){
    const slider = document.getElementById(cat);
    const prev = slider.getElementsByClassName("slide__container__prev");
    const next = slider.getElementsByClassName("slide__container__next");
    const categorie = document.getElementById(cat+'_cover');
    const slider_items = document.createElement('div');
    slider_items.className = "slide__container__cover__items";
    slider_items.id = cat + "_covers_items";
    categorie.appendChild(slider_items);
    for (const result of data.results){
        const movie = document.createElement('p')
        movie.className = "item";
        const link_movie = document.createElement('a');
        const nContent = document.createElement('img');
        slider_items.appendChild(movie);
        movie.appendChild(link_movie);
        movie.setAttribute("onclick", "showModal(" + result.id + ")");
        link_movie.appendChild(nContent).src = result.image_url;

    }
    const section = document.getElementById(slider_items.id);
    prev[0].setAttribute("onclick", () => {
        console.log(section.scrollLeft)
        section.scroll({left: section.scrollLeft + 600, behavior:"smooth"})
    })
    next[0].setAttribute("onclick", () => {
        section.scroll({left: section.scrollLeft - 600, behavior:"smooth"})
    })

}

async function getBestMovie(data){
    const movie_info = await getData(url_movies + data.results[0].id);
    document
        .getElementById("best_movie_img")
        .setAttribute("src", movie_info.image_url)
    document
        .getElementById("best_movie_img")
        .setAttribute("onclick", "showModal(" + movie_info.id + ")");
    document
        .getElementById("best_movie_title")
        .innerText = movie_info.title;

    document
        .getElementById("best_movie_description")
        .innerHTML = movie_info.long_description;
}

async function loadMovies(){
    
    try {
        const best_movies = await getData(best_movie_url);
        getMovies(best_movies,"best_movies");
        getBestMovie(best_movies);
        await getData(drama_movie_url).then((data)=>{getMovies(data,"drama" )});
        await getData(horror_movie_url).then((data)=>{getMovies(data,"horror" )});
        await getData(action_movie_url).then((data)=>{getMovies(data,"action" )});
    } catch (err) {
        console.log(err);
    }

}

 async function showModal(id) {
   
    const data = await getData(url_movies + id);
    console.log(data);

    let modal = document
    .getElementById("modal")
    let close = document
    .getElementsByClassName("modal__close")[0]

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
        .innerHTML = "<span><b>date: </b></span>" + data.date_published;   
    document
        .getElementById("score")
        .innerHTML = "<span><b>IMDB Score: </b></span>" + data.imdb_score;

    document
        .getElementById("rated")
        .innerHTML = "<span><b>Rated: </b></span>" + data.rated;

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

    modal.style.display = "block";

    close.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      }
}


loadMovies()
