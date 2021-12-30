import {changeSearchResult} from './changeSearchResult.js';
import {showPagination} from './showPagination.js';

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
    }
    //-----------------------------------------------------------------------

    changeSearchResult(0, massive);
    showPagination(numberOfPage);

            
    document.querySelector(".pagination").addEventListener('click', ()=> {
        let target = event.target;
        document.querySelector('.searchResult').innerHTML = '';
        
        // Для удаления класса у неактивных ссылок
        let r = document.querySelectorAll('a');
        r.forEach(element => {
            element.classList.remove('active');
        })
        //--------------------------------------------
        changeSearchResult(target.className, massive); 
        target.classList.add('active');
    }) 
}

export {showSearchResult};


