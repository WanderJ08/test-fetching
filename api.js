const response = await fetch("https://rickandmortyapi.com/api/character")

// console.log(response)

const data = await response.json()
const characters = data.results

const container = document.querySelector('.container')
characters.forEach(c => {
    const imgNode = document.createElement('img')
    const nameNode = document.createElement('h2')
    const originNode = document.createElement('h3')
    const episodeNode = document.createElement('a')
    const brNode = document.createElement('br')

    imgNode.src = c.image;
    nameNode.textContent = c.name;
    originNode.textContent = c.origin.name;
    episodeNode.href = c.episode[0];
    episodeNode.textContent = `First episode`;



    container.appendChild(imgNode)
    container.appendChild(nameNode)
    container.appendChild(originNode)
    container.appendChild(episodeNode)
    container.appendChild(brNode)
    container.appendChild(brNode)





    
});


