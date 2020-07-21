'use strict'

async function startRequest(owner, repository) {
    const apiUrl = 'https://api.github.com/repos';
    const issues = 'issues';
    let progress = 0;

    try {
        let data = await getIssues(`${apiUrl}/${owner}/${repository}/${issues}`);

        tagging.creatingTableHeaders();

        for (let i = 0; i < data.length; ++i) {
            if (i + 1 == data.length) {
                progress = 100
            } else {
                progress = ((i / data.length) * 100).toFixed(2);
            }
            tagging.fillingTable(data, progress, i);
        }
    } catch (error) {
        tagging.showError(error);
        console.log(error);
    }
};