# Testing React
## Introduction
I want to use deno rather than nodejs for a REACT programming class.

I am not yet seeing how to make TTD for REACT work with deno.

These example works with `node test` using `jest`

To run
```
npm -i
npm test
```

By default test only test files that have changed since git checkout are run.

npm test -- --changedSince d824cf5
CI=true react-scripts test",
make dirty; npm test

## internal notes
### deno
~/src/github.com/testing-library/user-event/tests/pointer/click.ts

https://github.com/testing-library

https://deno.land/x/fresh_testing_library@0.13.0
https://deno.land/x/fresh_testing_library@0.13.0/components.ts?s=fireEvent

https://deno.land/x/create_react_app@v0.1.2
https://deno.land/x/react_native_switch_toggle@v2.2.1
https://deno.land/x/react_dev_server@0.0.3
https://deno.land/x/deno_react_minimal_fullstack@v1.2.0
https://deno.land/x/deno_react_minimal_frontend@v1.4.0
https://deno.land/x/basic_jsx@v3.1.2
https://deno.land/x/blocks@1.66.3
https://deno.land/x/reflex@v0.16.1
https://deno.land/x/auto_refactor@v1.0.0



### doc
https://github.com/jestjs/jest/blob/main/docs/TutorialReact.md
https://create-react-app.dev/docs/running-tests/#docsNav
https://jestjs.io/docs/troubleshooting
https://jestjs.io/docs/getting-started
https://jestjs.io/docs/setup-teardown
https://babeljs.io/docs/configuration


https://react.dev/warnings/react-dom-test-utils




### issues

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

