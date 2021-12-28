document.querySelector('.clear').addEventListener('click', ()=> {
    clearInput();
})

document.querySelector('.imgSearch').addEventListener('click', ()=> {
    let valueInput = document.querySelector('.inputSearch').value;

    url = `https://google-search3.p.rapidapi.com/api/v1/search/q=${valueInput}&num=100`;
    const getData = async (url) => {
        const result = await fetch(url, {
            method: "GET",
            headers: {
                'x-user-agent': 'desktop',
                'x-proxy-location': 'US',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': "87be083d19msh70dbd96fd2e8374p169566jsnb6aa20f742f5"
            }
        });
        return result.json();
    }
    getData(url)
    .then(data => showSearchResult(data.results))
    //.then(data => console.log(data));
})

    function showSearchResult(apidata) {

        let massive = [];
        let numberOfPage = Math.ceil(apidata.length / 10);
        let numResultinPage = 10;   
        let numResultinLastPage = apidata.length - (numberOfPage-1) * numResultinPage;           
        let index = 0;

        // Разбивка результата запроса (массива) на подмассивы

        for (let i = 0; i < numberOfPage; i++) {
            if (i == numberOfPage) 
                massive[`${i}`] = apidata.slice(index, i * 10 + numResultinLastPage);
            else 
                massive[`${i}`] = apidata.slice(index, numResultinPage);
            index = numResultinPage;
            numResultinPage += 10;
            //console.log(massive[i], index, numResultinPage);
            }
        //-----------------------------------------------------------------------

/*         console.log(massive[3][1].link);
        console.log(massive[3][1].title);
        console.log(massive[3][1].description); */

        showPagination(numberOfPage);
        changeSearchResult(0, massive);
        
        
       /*  for (let i = 0; i < numResultinPage; i++) {   
            document.querySelector('.searchResult').innerHTML += `
            <div class="searchResultBlock">
            <cite class="cite">${apidata[i].link}</cite>
            <h3 class="wordsUnderCite">${apidata[i].title}</h3>
            <p class="searchInfo">${apidata[i].description}</p> 
            </div>
            `   
        }   */
        
        document.querySelector(".pagination").addEventListener('click', ()=> {
            let target = event.target;
            document.querySelector('.searchResult').innerHTML = '';
            
            changeSearchResult(target.className, massive); 

/*             for (let i = 0; i < numResultinPage; i++) {   
                document.querySelector('.searchResult').innerHTML += `
                <div class="searchResultBlock">
                <cite class="cite">${massive[target.className][i].link}</cite>
                <h3 class="wordsUnderCite">${massive[target.className][i].title}</h3>
                <p class="searchInfo">${massive[target.className][i].description}</p> 
                </div> `   
            }   */
        }) 
    }

// Показать пагинацию

function showPagination(page) {
    for (let i = 0; i < page; i++) {
        document.querySelector('.pagination').innerHTML += `
        <a href="#" class="${i}">${i}</a>  `
    }
}
//-----------------------------------------------------------------------------------

// Очистить инпут ввода поиска

function clearInput() {
    let divInput = document.querySelector('.inputSearch');

    divInput.value = '';
}
//-----------------------------------------------------------------------------------

// Изменения блока div c выводом на экран результатов

function changeSearchResult(index, massive) {

/*     for (let i = 0; i < numResultinPage; i++) {   
        document.querySelector('.searchResult').innerHTML += `
        <div class="searchResultBlock">
        <cite class="cite">${massive[index][i].link}</cite>
        <h3 class="wordsUnderCite">${massive[index][i].title}</h3>
        <p class="searchInfo">${massive[index][i].description}</p> 
        </div> `    
    } */
    array = massive[index];
    array.forEach(element => {
        document.querySelector('.searchResult').innerHTML += `
        <div class="searchResultBlock">
        <cite class="cite">${element.link}</cite>
        <h3 class="wordsUnderCite">${element.title}</h3>
        <p class="searchInfo">${element.description}</p> 
        </div> `
    });
    console.log(array);
}
//-----------------------------------------------------------------------------------