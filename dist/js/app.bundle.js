/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var BEST_MOVIES_URL = 'http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page_size=7';
var DRAMA_MOVIES_URL = 'http://localhost:8000/api/v1/titles/?genre=Drama&sort_by=-imdb_score&page_size=7';
var HORROR_MOVIES_URL = 'http://localhost:8000/api/v1/titles/?genre=Horror&sort_by=-imdb_score&page_size=7';
var ACTION_MOVIES_URL = 'http://localhost:8000/api/v1/titles/?genre=Action&sort_by=-imdb_score&page_size=7';
var ALL_MOVIES_URL = 'http://localhost:8000/api/v1/titles/';
var intScroll;
/**
 * @param {string} url url of API.
 */

function getData(_x) {
  return _getData.apply(this, arguments);
}

function _getData() {
  _getData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url) {
    var RESPONSE, _JSON;

    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch(url);

          case 3:
            RESPONSE = _context.sent;
            _context.next = 6;
            return RESPONSE.json();

          case 6:
            _JSON = _context.sent;
            return _context.abrupt("return", _JSON);

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));
  return _getData.apply(this, arguments);
}

;
/**
 * @param {json} data result of API's response.
 * @param {string} nameCategorie name of movies category searched.
 */

function getMovies(_x2, _x3) {
  return _getMovies.apply(this, arguments);
}

function _getMovies() {
  _getMovies = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(data, nameCategorie) {
    var SLIDE, PREV, NEXT, CATEGORIE, SLIDE_CONTAINER, _iterator, _step, RESULT_MOVIE, MOVIE_ITEM, MOVIE_COVER;

    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            SLIDE = document.getElementById(nameCategorie);
            PREV = SLIDE.getElementsByClassName('prev');
            NEXT = SLIDE.getElementsByClassName('next');
            CATEGORIE = document.getElementById(nameCategorie + '_covers');
            SLIDE_CONTAINER = document.createElement('div');
            SLIDE_CONTAINER.className = 'cards';
            CATEGORIE.appendChild(SLIDE_CONTAINER);
            _iterator = _createForOfIteratorHelper(data.results);

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                RESULT_MOVIE = _step.value;
                MOVIE_ITEM = document.createElement('p');
                MOVIE_ITEM.addEventListener('click', showModal(RESULT_MOVIE.id)); //MOVIE_ITEM.setAttribute('onclick', 'showModal(' + RESULT_MOVIE.id + ')')

                SLIDE_CONTAINER.appendChild(MOVIE_ITEM);
                MOVIE_COVER = document.createElement('img');
                MOVIE_COVER.setAttribute('src', RESULT_MOVIE.image_url);
                MOVIE_ITEM.appendChild(MOVIE_COVER);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            PREV[0].addEventListener('mouseover', goPrev(CATEGORIE.id));
            PREV[0].addEventListener('mouseout', clearScroll());
            NEXT[0].addEventListener('mouseover', goNext(CATEGORIE.id));
            NEXT[0].addEventListener('mouseout', clearScroll()); //prev[0].setAttribute('onmouseover', 'goPrev(' + categorie.id + ')')
            //prev[0].setAttribute('onmouseout', 'clearScroll()')
            //next[0].setAttribute('onmouseover', 'goNext(' + categorie.id + ')')
            //next[0].setAttribute('onmouseout', 'clearScroll()')

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getMovies.apply(this, arguments);
}

;
/**
 * @param {json} data result of API's response.
 */

function getBestMovie(_x4) {
  return _getBestMovie.apply(this, arguments);
}

function _getBestMovie() {
  _getBestMovie = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(data) {
    var movieInfo, bestImg;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return getData(ALL_MOVIES_URL + data.results[0].id);

          case 2:
            movieInfo = _context3.sent;
            bestImg = document.getElementById('best-img');
            bestImg.setAttribute('src', movieInfo.image_url);
            bestImg.setAttribute('onclick', 'showModal(' + movieInfo.id + ')');
            document.getElementById('best-title').innerText = movieInfo.title;
            document.getElementById('best-description').innerHTML = movieInfo.long_description;

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getBestMovie.apply(this, arguments);
}

;
/**
 * @param {number} id the movie's id to search.
 */

function getModalMovieInfo(_x5) {
  return _getModalMovieInfo.apply(this, arguments);
}

function _getModalMovieInfo() {
  _getModalMovieInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(id) {
    var data;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return getData(ALL_MOVIES_URL + id);

          case 2:
            data = _context4.sent;
            console.log(data);
            document.getElementById('modal_cover').setAttribute('src', data.image_url);
            document.getElementById('modal_title').innerText = data.title;
            document.getElementById('modal_genre').innerHTML = '<span><b>Genre: </b></span>' + data.genres.join(', ');
            document.getElementById('modal_date').innerHTML = '<span><b>Date: </b></span>' + data.date_published;
            document.getElementById('modal_score').innerHTML = '<span><b>Note IMDB: </b></span>' + data.imdb_score;
            document.getElementById('modal_rated').innerHTML = '<span><b>Note: </b></span>' + data.rated;
            document.getElementById('modal_country').innerHTML = '<span><b>Pays: </b></span>' + data.countries.join(', ');
            document.getElementById('modal_duration').innerHTML = '<span><b>Durée: </b></span>' + data.duration + 'min';
            document.getElementById('modal_directors').innerHTML = '<span><b>Réalisateur: </b></span>' + data.directors.join(', ');
            document.getElementById('modal_actors').innerHTML = '<span><b>Acteurs: </b></span>' + data.actors.join(', ');
            document.getElementById('modal_result').innerHTML = '<span><b>Résultat au box office: </b></span>' + data.worldwide_gross_income;
            document.getElementById('modal_description').innerHTML = '<span><b>Description: </b></span>' + data.long_description;

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getModalMovieInfo.apply(this, arguments);
}

;

function loadMovies() {
  return _loadMovies.apply(this, arguments);
}

function _loadMovies() {
  _loadMovies = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var bestMovies;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return getData(BEST_MOVIES_URL);

          case 3:
            bestMovies = _context5.sent;
            getMovies(bestMovies, 'best_movies');
            getBestMovie(bestMovies);
            _context5.next = 8;
            return getData(DRAMA_MOVIES_URL).then(function (data) {
              getMovies(data, 'drama');
            });

          case 8:
            _context5.next = 10;
            return getData(HORROR_MOVIES_URL).then(function (data) {
              getMovies(data, 'horror');
            });

          case 10:
            _context5.next = 12;
            return getData(ACTION_MOVIES_URL).then(function (data) {
              getMovies(data, 'action');
            });

          case 12:
            _context5.next = 17;
            break;

          case 14:
            _context5.prev = 14;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);

          case 17:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 14]]);
  }));
  return _loadMovies.apply(this, arguments);
}

;
/**
 * @param {number} id the movie's id to show on the modal.
 */

function showModal(_x6) {
  return _showModal.apply(this, arguments);
}

function _showModal() {
  _showModal = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(id) {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            getModalMovieInfo(id);
            toggleModal();

          case 2:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _showModal.apply(this, arguments);
}

;

function toggleModal() {
  return _toggleModal.apply(this, arguments);
}

function _toggleModal() {
  _toggleModal = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
    var MODAL_CONTAINER, MODAL_TRIGGERS;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            MODAL_CONTAINER = document.querySelector('.modal__container');
            MODAL_TRIGGERS = document.querySelectorAll('.modal-trigger');
            MODAL_TRIGGERS.forEach(function (trigger) {
              return trigger.addEventListener('click', toggleModal);
            });
            MODAL_CONTAINER.classList.toggle('active');

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _toggleModal.apply(this, arguments);
}

;
/**
 * @param {objet} section the HTML node to move to right.
 */

function goNext(section) {
  intScroll = setInterval(function () {
    document.getElementById(section.id).scrollLeft += 1;
  }, 5);
}

;
/**
 * @param {objet} section the HTML node to move to left.
 */

function goPrev(section) {
  intScroll = setInterval(function () {
    document.getElementById(section.id).scrollLeft -= 1;
  }, 5);
}

;

function clearScroll() {
  clearInterval(intScroll);
}

;
loadMovies();
/******/ })()
;