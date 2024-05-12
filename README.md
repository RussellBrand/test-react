#
## doc
https://github.com/jestjs/jest/blob/main/docs/TutorialReact.md
## issues

### [x] jsx

`package.json`

```
{   "babel": {
    "presets": [
      "@babel/preset-react"
    ]
  },
}
```

### [x] module import statements

`package.json`

```
{    "type": "module",}
```

### [2] yarn finds **test** at top level, npm does not



npm test does not find

./__tests__/

yarn just is able to

testMatch: ["src/__tests__/*.test.js", "__tests__/*.test.js"],

### [x] typescript

`npm install --save-dev ts-jest typescript`

### [x] `~/xall/programming/test-react/node_modules/.bin/` is not in the path
