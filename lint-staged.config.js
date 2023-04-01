module.exports = {
    // this will check Typescript files
    './src/**/*.(ts|tsx)': () => 'yarn tsc --noEmit',
  
    // This will lint and format TypeScript and
    '**/*.(ts|tsx|js)': (filenames) => [
      `npm run eslint --fix ${filenames.join(' ')}`,
      `npm run prettier --write ${filenames.join(' ')}`,
    ],
  
    // this will Format MarkDown and JSON
    '**/*.(md|json)': (filenames) =>
      `npm run prettier --write ${filenames.join(' ')}`,
  }
  