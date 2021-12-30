import {getApi} from '../services/getApi.js';
import {showSearchResult} from './showSearchResult.js';
import {clearInput} from './clearInput.js';

function showSearch() {
    document.querySelector('.imgSearch').addEventListener('click', ()=> {
        let valueInput = document.querySelector('.inputSearch').value;

        document.querySelector('.pagination').innerHTML ='';
        document.querySelector('.searchResult').innerHTML ='';

        getApi(`https://google-search3.p.rapidapi.com/api/v1/search/q=${valueInput}&num=100`)
        .then(data => showSearchResult(data.results));
    })

    document.querySelector('.clear').addEventListener('click', ()=> {
        clearInput();
    })
}
export {showSearch};
