const BEST_MOVIES_URL = 'http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page_size=7'
const DRAMA_MOVIES_URL = 'http://localhost:8000/api/v1/titles/?genre=Drama&sort_by=-imdb_score&page_size=7'
const HORROR_MOVIES_URL = 'http://localhost:8000/api/v1/titles/?genre=Horror&sort_by=-imdb_score&page_size=7'
const ACTION_MOVIES_URL = 'http://localhost:8000/api/v1/titles/?genre=Action&sort_by=-imdb_score&page_size=7'
const ALL_MOVIES_URL = 'http://localhost:8000/api/v1/titles/'

let intScroll

/**
 * @param {string} url url of API.
 */
async function getData (url) {
  try {
    const RESPONSE = await fetch(url)
    const JSON = await RESPONSE.json()
    return JSON
  } catch (err) {
    console.log(err)
  }
};

/**
 * @param {json} data result of API's response.
 * @param {string} nameCategorie name of movies category searched.
 */
async function getMovies (data, nameCategorie) {
  const SLIDE = document.getElementById(nameCategorie)
  const PREV = SLIDE.getElementsByClassName('prev')
  const NEXT = SLIDE.getElementsByClassName('next')
  const CATEGORIE = document.getElementById(nameCategorie + '_covers')
  const SLIDE_CONTAINER = document.createElement('div')
  SLIDE_CONTAINER.className = 'cards'
  CATEGORIE.appendChild(SLIDE_CONTAINER)
  for (const RESULT_MOVIE of data.results) {
    const MOVIE_ITEM = document.createElement('p')
    MOVIE_ITEM.addEventListener('click', showModal(RESULT_MOVIE.id))
    //MOVIE_ITEM.setAttribute('onclick', 'showModal(' + RESULT_MOVIE.id + ')')
    SLIDE_CONTAINER.appendChild(MOVIE_ITEM)
    const MOVIE_COVER = document.createElement('img')
    MOVIE_COVER.setAttribute('src', RESULT_MOVIE.image_url)
    MOVIE_ITEM.appendChild(MOVIE_COVER)
  }

  PREV[0].addEventListener('mouseover', goPrev(CATEGORIE.id))
  PREV[0].addEventListener('mouseout', clearScroll())
  NEXT[0].addEventListener('mouseover', goNext(CATEGORIE.id))
  NEXT[0].addEventListener('mouseout', clearScroll())

  //prev[0].setAttribute('onmouseover', 'goPrev(' + categorie.id + ')')
  //prev[0].setAttribute('onmouseout', 'clearScroll()')
  //next[0].setAttribute('onmouseover', 'goNext(' + categorie.id + ')')
  //next[0].setAttribute('onmouseout', 'clearScroll()')
};

/**
 * @param {json} data result of API's response.
 */
async function getBestMovie (data) {
  const movieInfo = await getData(ALL_MOVIES_URL + data.results[0].id)
  const bestImg = document.getElementById('best-img')

  bestImg.setAttribute('src', movieInfo.image_url)
  bestImg.setAttribute('onclick', 'showModal(' + movieInfo.id + ')')

  document
    .getElementById('best-title')
    .innerText = movieInfo.title

  document
    .getElementById('best-description')
    .innerHTML = movieInfo.long_description
};

/**
 * @param {number} id the movie's id to search.
 */
async function getModalMovieInfo (id) {
  const data = await getData(ALL_MOVIES_URL + id)
  console.log(data)

  document
    .getElementById('modal_cover')
    .setAttribute('src', data.image_url)
  document
    .getElementById('modal_title')
    .innerText = data.title
  document
    .getElementById('modal_genre')
    .innerHTML = '<span><b>Genre: </b></span>' + data.genres.join(', ')
  document
    .getElementById('modal_date')
    .innerHTML = '<span><b>Date: </b></span>' + data.date_published
  document
    .getElementById('modal_score')
    .innerHTML = '<span><b>Note IMDB: </b></span>' + data.imdb_score

  document
    .getElementById('modal_rated')
    .innerHTML = '<span><b>Note: </b></span>' + data.rated

  document
    .getElementById('modal_country')
    .innerHTML = '<span><b>Pays: </b></span>' + data.countries.join(', ')

  document
    .getElementById('modal_duration')
    .innerHTML = '<span><b>Durée: </b></span>' + data.duration + 'min'

  document
    .getElementById('modal_directors')
    .innerHTML = '<span><b>Réalisateur: </b></span>' + data.directors.join(', ')
  document
    .getElementById('modal_actors')
    .innerHTML = '<span><b>Acteurs: </b></span>' + data.actors.join(', ')

  document
    .getElementById('modal_result')
    .innerHTML = '<span><b>Résultat au box office: </b></span>' + data.worldwide_gross_income

  document
    .getElementById('modal_description')
    .innerHTML = '<span><b>Description: </b></span>' + data.long_description
};

async function loadMovies () {
  try {
    const bestMovies = await getData(BEST_MOVIES_URL)
    getMovies(bestMovies, 'best_movies')
    getBestMovie(bestMovies)
    await getData(DRAMA_MOVIES_URL).then((data) => { getMovies(data, 'drama') })
    await getData(HORROR_MOVIES_URL).then((data) => { getMovies(data, 'horror') })
    await getData(ACTION_MOVIES_URL).then((data) => { getMovies(data, 'action') })
  } catch (err) {
    console.log(err)
  }
};

/**
 * @param {number} id the movie's id to show on the modal.
 */
async function showModal (id) {
  getModalMovieInfo(id)
  toggleModal()
};

async function toggleModal () {
  const MODAL_CONTAINER = document.querySelector('.modal__container')
  const MODAL_TRIGGERS = document.querySelectorAll('.modal-trigger')

  MODAL_TRIGGERS.forEach(trigger => trigger.addEventListener('click', toggleModal))
  MODAL_CONTAINER.classList.toggle('active')
};

/**
 * @param {objet} section the HTML node to move to right.
 */
function goNext (section) {
  intScroll = setInterval(function () { document.getElementById(section.id).scrollLeft += 1 }, 5)
};

/**
 * @param {objet} section the HTML node to move to left.
 */
function goPrev (section) {
  intScroll = setInterval(function () { document.getElementById(section.id).scrollLeft -= 1 }, 5)
};

function clearScroll () {
  clearInterval(intScroll)
};

loadMovies()
