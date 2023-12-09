const dirTree = require('directory-tree');
const fs = require('fs');

describe(`folder structure`, function () {
  test(`root directory is properly setup`, () => {
    const rootPath = `${__dirname}/..`;

    // Check if .babelrc and .prettierrc files exist in the root directory in a case-insensitive manner
    const filesInRoot = fs.readdirSync(rootPath);
    const isBabelrcExists = filesInRoot.some(file => file.toLowerCase() === '.babelrc');
    const isPrettierrcExists = filesInRoot.some(file => file.toLowerCase() === '.prettierrc');

    // Use a separate array for files that should exist
    const expectedFiles = ['.babelrc', '.eslintrc.json', '.gitignore', '.prettierrc', '.vscode', 'README.md', 'babel.config.js', 'index.html', 'jest.config.js', 'package.json'];

    // Assert that all expected files exist in the root directory
    expect(isBabelrcExists).toBe(true);
    expect(isPrettierrcExists).toBe(true);

    // Check the remaining expected files
    expectedFiles.forEach(file => {
      expect(fs.existsSync(`${rootPath}/${file}`)).toBe(true);
    });

    // Verify that no unexpected files are present
    const unexpectedFiles = filesInRoot.filter(file => !expectedFiles.includes(file.toLowerCase()));
    expect(unexpectedFiles.length).toBe(0);
  });

  // ... (your other tests remain unchanged)
});





  test(`resources directory is properly setup`, () => {
    const resourcesTree = dirTree(`${__dirname}/../resources`);
    const nodes = resourcesTree.children.map(node => node.name);
    const expectedNodes = [
      `images`,
      `scripts`,
      `styles`
    ];
    expect(nodes).toEqual(expect.arrayContaining(expectedNodes));
  });

  test(`scripts directory includes one index.js files`, () => {
    const scriptsTree = dirTree(`${__dirname}/../resources/scripts`);
    const nodes = scriptsTree.children.map(node => node.name);

    expect(nodes).toContain(`index.js`);
  });

  test(`styles directory includes one styles.css files`, () => {
    const stylesTree = dirTree(`${__dirname}/../resources/styles`);
    const nodes = stylesTree.children.map(node => node.name);

    expect(nodes).toContain(`styles.css`);
  });
});
