const apikey = "b53465e8"
var title = ""
var imdb = ""

toggleGuess()
toggleResult()
toggleWin()
toggleLose()

function getMovie() {
  title = document.getElementById("inputMovie").value
  document.getElementById("inputMovie").value = ""
  toggleSelect()
  toggleGuess()

  fetch(`https://www.omdbapi.com/?t=${title}&apikey=${apikey}&type=movie`)
  .then(response => {
    if(!response.ok) {
      throw new Error(`${id}:${response.statusText}`)
    }
    return response.json()
  })
  .then(data => {
    var { Plot, Actors, Released, Genre, Poster } = data

    title = data["Title"]
    imdb = data["imdbID"]

    document.getElementById("plot").innerHTML = `<p>${Plot}</p>`
    document.getElementById("actors").innerHTML = `<p>${Actors}</p>`
    document.getElementById("relese").innerHTML = `<p>${Released}</p>`
    document.getElementById("launch").innerHTML = `<p>${Genre}</p>`
    document.getElementById("poster").innerHTML = `<img  src="${Poster}">`
  })
}

function getAnswer() {
  toggleGuess()
  toggleResult()
  document.getElementById("answer").innerHTML = title
  let more = document.querySelector("#result a")
  
  fetch(`https://api.kinocheck.de/movies?imdb_id=${imdb}&language=en`)
  .then(response => response.json())
  .then(data => {
    more.setAttribute("href", data.url)
  })
}

function toggleSelect(){
  let div = document.getElementById("select")
  let status = div.hasAttribute("style")

  if(status) {
    div.removeAttribute("style")
    return
  }
  div.setAttribute("style", "display: none;")
  return
}

function toggleResult() {
  let div = document.getElementById("result")
  let status = div.hasAttribute("style")

  if(status) {
    div.removeAttribute("style")
    return
  }
  div.setAttribute("style", "display: none;")
  return
}

function toggleGuess(){
  let div = document.getElementById("guess")
  let status = div.hasAttribute("style")

  if(status) {
    div.removeAttribute("style")
    return
  }
  div.setAttribute("style", "display: none;")
  return
}

function toggleWin() {
  toggleResult()
  let div = document.getElementById("win")
  let status = div.hasAttribute("style")

  if(status) {
    div.removeAttribute("style")
    return
  }
  div.setAttribute("style", "display: none;")
  return
}

function toggleLose() {
  toggleResult() 
  let div = document.getElementById("lose")
  let status = div.hasAttribute("style")

  if(status) {
    div.removeAttribute("style")
    return
  }
  div.setAttribute("style", "display: none;")
  return
}