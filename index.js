/**
 * Asynchronous function to get issues from GitHub.
 *
 * @async
 * @function getIssues
 * @param {string} language - The programming language of the issues. Default is an empty string.
 * @param {number} numIssues - The number of issues to fetch. Default is 10.
 * @returns {Promise<object>} A promise that resolves to the JSON response from the GitHub API.
 * @throws {Error} Will throw an error if the fetch operation fails.
 */
async function getIssues(language = "", numIssues = 10) {
    let url = language
        ? `https://api.github.com/search/issues?q=is:issue+is:open+is:public+label:%22good%20first%20issue%22+language:${language}&per_page=${numIssues}`
        : `https://api.github.com/search/issues?q=is:issue+is:open+is:public+label:%22good%20first%20issue%22&per_page=${numIssues}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            const issueData = await response.json();
            return issueData;
        }
    } catch (error) {
        console.log('There was a problem with the fetch operation: ' + error.message);
    }
}
