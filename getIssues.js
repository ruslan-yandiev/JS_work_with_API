'use strict'

async function getIssues(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) throw new Error(error);
        let data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Не удалось получить данные');
    }
}
