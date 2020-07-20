'use strict'

function clickSubmit(event) {
    event.preventDefault();

    const owner = event.target[0].value;
    const repository = event.target[1].value;

    startRequest(owner, repository)
}
