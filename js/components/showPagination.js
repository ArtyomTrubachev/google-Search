
function showPagination(page) {
    for (let i = 0; i < page; i++) {
        document.querySelector('.pagination').innerHTML += `
        <a href="#" class="${i}">${i+1}</a>  `
    }
}

export {showPagination};