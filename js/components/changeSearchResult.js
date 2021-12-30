// Изменения блока div c выводом на экран результатов

function changeSearchResult(index, massive) {
    
    let array = massive[index];
    array.forEach(element => {
        document.querySelector('.searchResult').innerHTML += `
        <div class="searchResultBlock">
        <cite class="cite">${element.link}</cite>
        <h3 class="wordsUnderCite">${element.title}</h3>
        <p class="searchInfo">${element.description}</p> 
        </div> `
    });
}

export {changeSearchResult};