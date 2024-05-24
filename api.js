const response = await fetch("https://rickandmortyapi.com/api/character")

// console.log(response)

const data = await response.json()
const characters = data.results

const container = document.querySelector('.container')
characters.forEach(c => {
    const imgNode = document.createElement('img')
    const nameNode = document.createElement('h2')
    const originNode = document.createElement('h3')
    const articleNode = document.createElement('article')
    const headerNode = document.createElement('header')
    const mainNode = document.createElement('main')
    // const episodeNode = document.createElement('a')
    // const brNode = document.createElement('br')

    imgNode.src = c.image;
    imgNode.loading = 'lazy';
    nameNode.textContent = c.name;
    originNode.textContent = c.origin.name;
    // episodeNode.href = c.episode[0];
    // episodeNode.textContent = `First episode`;

    headerNode.appendChild(nameNode)
    headerNode.appendChild(originNode)
    mainNode.appendChild(imgNode)
    articleNode.appendChild(headerNode)
    articleNode.appendChild(mainNode)

    container.appendChild(articleNode)
    // container.appendChild(episodeNode)
    // container.appendChild(brNode)
    // container.appendChild(brNode)





    
});


