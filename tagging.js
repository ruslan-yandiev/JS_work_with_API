'use strict'

function tagging(data, progress, i) {
    document.querySelector('span').textContent = `${progress}%`;
    const tr = document.createElement('tr');
    tr.innerHTML = `<th scope="row">${i + 1}</th><td>${data[i].number}</td><td>${new Date(`${data[i].created_at}`)}</td><td>${data[i].title}</td><td>${data[i].comments}</td>`;
    document.querySelector('tbody').appendChild(tr);
};
