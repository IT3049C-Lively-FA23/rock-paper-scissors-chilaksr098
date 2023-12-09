const dirTree = require(`directory-tree`);
const _ = require(`lodash`);

describe(`folder structure`, function () {
  test(`root directory is properly setup`, () => {
  const rootTree = dirTree(`${__dirname}/..`);
  const nodes = rootTree.children.map(node => node.name);

  const expectedNodes = [
    ".babelrc", ".eslintrc.json", ".git", ".github", ".gitignore",
    ".prettierrc", ".vscode", "README.md", "babel.config.js", "index.html",
    "jest.config.js", "package.json", "resources", "tests"
  ];

  // Sort both arrays before comparison
  nodes.sort();
  expectedNodes.sort();

  console.log("Received nodes:", nodes);
  console.log("Expected nodes:", expectedNodes);

  expect(nodes).toEqual(expectedNodes);
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
