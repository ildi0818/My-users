let inputElement = document.createElement('input')
inputElement.setAttribute('placeholder', "Search")
document.getElementById('searchinput').append(inputElement)

let container = document.createElement('div')
container.id = "container"
document.getElementById('users').append(container)

let button = document.getElementById('show').addEventListener('click', )

// let images = document.createElement('img')
// images.id = "picture"
// images.setAttribute('src', "https://avatars.githubusercontent.com/u/1?v=4")
// document.getElementById('userbox').append(picture)

//  let userName = document.createElement('p')
//  userName.id = "username"
//  document.getElementById('users').append(userName)

//  let button = document.createElement('button')
//  button.id = "showmore"

//  document.getElementById('users').append(button)


window.onload = async () => {
    const response = await fetch('https://api.github.com/users%27');
    const data = await response.json()
    console.log(response)};

    

    