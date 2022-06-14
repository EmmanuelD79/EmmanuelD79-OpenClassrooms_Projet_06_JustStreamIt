const main = document.getElementById("main")
const best_movie_url = 'http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page_size=15';
const drama_movie_url = 'http://localhost:8000/api/v1/titles/?genre=Drama&sort_by=-imdb_score&page_size=15';
const horror_movie_url = 'http://localhost:8000/api/v1/titles/?genre=Horror&sort_by=-imdb_score&page_size=15';
const action_movie_url = 'http://localhost:8000/api/v1/titles/?genre=Action&sort_by=-imdb_score&page_size=15';
const biography_movie_url = 'http://localhost:8000/api/v1/titles/?genre=Biography&sort_by=-imdb_score&page_size=15';
const url_movies = 'http://localhost:8000/api/v1/titles/';


async function getMovieInfo(url){
    try {
        const response = await fetch(url);
        const json = await response.json();
        return json;
    } catch (err) {
        console.log(err);
    }
};


async function movies(url, cat){
    fetch(url)
        .then(function(res){
            if(res.ok){
                return res.json();
            }
        })
        .then(function(value){
            const categorie = document.getElementById(cat);
            main.appendChild(categorie);
            const slider = document.createElement('div');
            slider.className = "slider";
            categorie.appendChild(slider);
            const row = document.createElement('div');
            row.className = "row";
            slider.appendChild(row);
            for (const result of value.results){
                const movie = document.createElement('p')
                movie.className = "item";
                const link_movie = document.createElement('a');
                const nContent = document.createElement('img');

                row.appendChild(movie);
                movie.appendChild(link_movie);
                movie.setAttribute("onclick", "showModal(" + result.id + ")");
                link_movie.appendChild(nContent).src = result.image_url;

            }
        })
        .catch(function(err){
            console.log(err);
        })
}

async function load_movie(){
    await movies(best_movie_url, "best_movie");
    await movies(drama_movie_url, "drama");
    await movies(horror_movie_url, "horror");
    await movies(action_movie_url, "action");
    await movies(biography_movie_url, "biography");
    await best_movie(best_movie_url);
}

try {
    document.addEventListener("DOMContentLoaded",load_movie());
}
catch (e){
    console.log(e);
}

 async function showModal(id) {
   
    const data = await getMovieInfo(url_movies + id);
    console.log(data);

    let modal = document
    .getElementById("modal")
    let close = document
    .getElementsByClassName("modal__close")[0]

    document
        .getElementById("movie_image")
        .setAttribute("src", data.image_url);
    document
        .getElementById("movie_title")
        .innerText = data.title;
    document
        .querySelector("#modal div .btn")
        .setAttribute("href", "https://www.imdb.com/title/tt" + data.id + "/")
    document
        .getElementById("movie_genre")
        .innerHTML = "<span><b>Genre: </b></span>" + data.genres.join(', ');
    document
        .getElementById("movie_year")
        .innerHTML = "<span><b>Année: </b></span>" + data.year;   
    document
        .getElementById("movie_score")
        .innerHTML = "<span><b>IMDB Score: </b></span>" + data.imdb_score;
    document
        .getElementById("movie_directors")
        .innerHTML = "<span><b>Réalisateur: </b></span>" + data.directors.join(', ');
    document
        .getElementById("movie_actors")
        .innerHTML = "<span><b>Acteurs: </b></span>" + data.actors.join(', ');
    document
        .getElementById("movie_duration")
        .innerHTML = "<span><b>Durée: </b></span>" + data.duration + "min";
    document
        .getElementById("movie_countrie")
        .innerHTML = "<span><b>Pays: </b></span>" + data.countries.join(', ');

    document
        .getElementById("movie_description")
        .innerHTML = "<span><b>Description: </b></span>" + data.long_description;

    modal.style.display = "block";

    close.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
}

async function best_movie(url){
    const data = await getMovieInfo(url);
    const movie_info = await getMovieInfo(url_movies + data.results[0].id);
    console.log(movie_info);
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
        .getElementById("best_movie_year")
        .innerHTML = "<span><b>Année: </b></span>" + movie_info.year;  
    
    document
        .getElementById("best_movie_genre")
        .innerHTML = "<span><b>Genre: </b></span>" + movie_info.genres.join(', ');
    
    
    document
        .getElementById("best_movie_score")
        .innerHTML = "<span><b>IMDB Score: </b></span>" + movie_info.imdb_score;

    document
        .getElementById("best_movie_description")
        .innerHTML = movie_info.long_description;
    
    document
        .getElementById("#best_movie_btn")
        .setAttribute("href", "https://www.imdb.com/title/tt" + movie_info.id + "/")
}
