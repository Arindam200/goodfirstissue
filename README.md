# @arindam1729/goodfirstissue

This is a simple npm package that fetches open, public issues labeled as "good first issue" from GitHub. It's a great tool for beginners looking for their first contributions or for anyone looking to contribute to open source projects.

## Installation

```bash
npm install @arindam1729/goodfirstissue
```

## Usage

```javascript
const getIssues = require('@arindam1729/goodfirstissue');

// Fetch 10 issues from any language
getIssues().then(issues => console.log(issues));

// Fetch 5 JavaScript issues
getIssues('JavaScript', 5).then(issues => console.log(issues));
```

## API

### getIssues(language, numIssues)

Fetches open, public issues from GitHub.

#### Parameters

- `language` (string, optional): The programming language of the issues. If not provided, issues from any language will be fetched.
- `numIssues` (number, optional): The number of issues to fetch. Default is 10.

#### Returns

A Promise that resolves to an array of issue objects.

## Error Handling

If there's a problem with the fetch operation, the error message will be logged to the console.

## License

MIT