'use strict'

let tagging = {
    creatingTableHeaders() {
        document.querySelector('tr').innerHTML = '<th scope="col">#</th><th scope="col">номер</th><th scope="col">дата создания</th><th scope="col">заголовок</th><th scope="col">комментарии</th>';
    },
    fillingTable(data, progress, i) {
        document.querySelector('span').textContent = `${progress}%`;
        const tr = document.createElement('tr');
        tr.innerHTML = `<th scope="row">${i + 1}</th><td>${data[i].number}</td><td>${new Date(`${data[i].created_at}`)}</td><td>${data[i].title}</td><td>${data[i].comments}</td>`;
        document.querySelector('tbody').appendChild(tr);
    },
    showError(error) {
        document.querySelector('.error').innerHTML = `${error}`;
    }
}
