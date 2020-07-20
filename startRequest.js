'use strict'

async function startRequest(owner, repository) {
    try {
        let data = await getIssues(`https://api.github.com/repos/${owner}/${repository}/issues`);

        let progress = 0;

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
        console.log(error);
    }
};