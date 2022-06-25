const API_URL = "http://localhost:8000/";
const BEST_MOVIES_URL = API_URL + 'api/v1/titles/?sort_by=-imdb_score&page_size=7';
const DRAMA_MOVIES_URL = API_URL + 'api/v1/titles/?genre=Drama&sort_by=-imdb_score&page_size=7';
const HORROR_MOVIES_URL = API_URL + 'api/v1/titles/?genre=Horror&sort_by=-imdb_score&page_size=7';
const ACTION_MOVIES_URL = API_URL + 'api/v1/titles/?genre=Action&sort_by=-imdb_score&page_size=7';
const ALL_MOVIES_URL = API_URL + 'api/v1/titles/';


/**
 * @param {string} url url of API.
 */
async function getData (url) {
	try {
		let response = await fetch(url);
		let json = await response.json();
		return json;
	} catch (err) {
		console.log(err);
	}
}

/**
 * @param {json} data result of API's response.
 * @param {string} nameCategorie name of movies category searched.
 */
async function getMovies (data, nameCategorie) {
	let slide = document.getElementById(nameCategorie);
	let prev = slide.getElementsByClassName('prev');
	let next = slide.getElementsByClassName('next');
	let categorie = document.getElementById(nameCategorie + '_covers');
	let slideContainer = document.createElement('div');

	slideContainer.className = 'cards';
	categorie.appendChild(slideContainer);

	for (let ResultMovie of data.results) {
		let MovieItem = document.createElement('p');
		MovieItem.onclick = ()=>{showModal(ResultMovie.id)};
		slideContainer.appendChild(MovieItem);
		let MovieCover = document.createElement('img');
		MovieCover.setAttribute('src', ResultMovie.image_url);
		MovieItem.appendChild(MovieCover);
	};

	prev[0].id = "pre_" + categorie.id;
	next[0].id = "next_" + categorie.id;
	
	document.getElementById("pre_" + categorie.id).onclick = ()=>{goPrev(categorie.id)};
	document.getElementById("next_" + categorie.id).onclick = ()=>{goNext(categorie.id)};

}

/**
 * @param {json} data result of API's response.
 */
async function getBestMovie (data) {
	let movieInfo = await getData(ALL_MOVIES_URL + data.results[0].id);
	let bestImgContainer = document.getElementById('best-img');
	let bestImg = document.createElement('img');
	
	bestImg.setAttribute('src', movieInfo.image_url);
	bestImg.onclick = ()=>{showModal(movieInfo.id)};
	bestImgContainer.appendChild(bestImg);

	document
		.getElementById('best-title')
		.innerText = movieInfo.title;
	document
		.getElementById('best-description')
		.innerHTML = movieInfo.long_description;
}

/**
 * @param {number} id the movie's id to search.
 */
async function getModalInfo (id) {
	let data = await getData(ALL_MOVIES_URL + id);
	let ModalCover = document.getElementById('modal_cover');
	ModalCover.style.backgroundImage = "url(" + data.image_url + ")";
	ModalCover.style.backgroundRepeat = "no-repeat";
	ModalCover.style.backgroundPosition = "center";

	document
		.getElementById('modal_title')
		.innerText = data.title;
	
	document
		.getElementById('modal_genre')
		.innerHTML = '<span><b>Genre: </b></span>' + data.genres.join(', ');
	
	document
		.getElementById('modal_date')
		.innerHTML = '<span><b>Date: </b></span>' + data.date_published;
	
	document
		.getElementById('modal_score')
		.innerHTML = '<span><b>Note IMDB: </b></span>' + data.imdb_score;

	document
		.getElementById('modal_rated')
		.innerHTML = '<span><b>Note: </b></span>' + data.rated;

	document
		.getElementById('modal_country')
		.innerHTML = '<span><b>Pays: </b></span>' + data.countries.join(', ');

	document
		.getElementById('modal_duration')
		.innerHTML = '<span><b>Durée: </b></span>' + data.duration + 'min';

	document
		.getElementById('modal_directors')
		.innerHTML = '<span><b>Réalisateur: </b></span>' + data.directors.join(', ');
	document
		.getElementById('modal_actors')
		.innerHTML = '<span><b>Acteurs: </b></span>' + data.actors.join(', ');

	document
		.getElementById('modal_result')
		.innerHTML = '<span><b>Résultat au box office: </b></span>' + data.worldwide_gross_income;

	document
		.getElementById('modal_description')
		.innerHTML = '<span><b>Description: </b></span>' + data.long_description;
}

async function loadMovies () {

	try {
		let bestMovies = await getData(BEST_MOVIES_URL);
		getMovies(bestMovies, 'best_movies');
		getBestMovie(bestMovies);
		await getData(DRAMA_MOVIES_URL).then((data) => { getMovies(data, 'drama') });
		await getData(HORROR_MOVIES_URL).then((data) => { getMovies(data, 'horror') });
		await getData(ACTION_MOVIES_URL).then((data) => { getMovies(data, 'action') });
	} catch (err) {
		console.log(err);
	}
}

/**
 * @param {number} id the movie's id to show on the modal.
 */
async function showModal (id) {
	getModalInfo(id);
	toggleModal();
}

async function toggleModal () {
	let ModalContainer = document.querySelector('.modal__container');
	let ModalTrigger = document.querySelectorAll('.modal-trigger');

	ModalTrigger.forEach(trigger => trigger.addEventListener('click', toggleModal));
	ModalContainer.classList.toggle('active');
}

/**
 * @param {objet} section the HTML node to move to right.
 */
function goNext (section) {
	document.getElementById(section).scrollLeft += 160;
}

/**
 * @param {objet} section the HTML node to move to left.
 */
function goPrev (section) {
	document.getElementById(section).scrollLeft -= 160;
}

loadMovies();
