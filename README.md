# UFAL 60 anos

This project will follows this planned [prototype](https://drive.google.com/drive/folders/1jVTV7TA680KU66xiYnqbh3vvNJ7lIjT0?usp=sharing).

## Documentação

In this project you'll find:

### `Conventions`

1. Naming:

- JS, JSX and CSS **files** names and directory **folders** are named with _kebab-case_ as `src/my-component/index.js`
- **Components** are named with _PascalCase_ as:

  ```javascript
  // example for index.js at /component/ folder
  import MyComponent from "./my-component";
  import AnotherComponent from "./my-component";

  export { MyComponent, AnotherComponent };
  ```

- **Instances** from components or **modules** are named with camelCase, following the [Airbnb Style Guide](https://github.com/airbnb/javascript/tree/master/react#naming), as:

  ```javascript
  // example for modules.js
  export function someModule({ prop = "" } = {}) {}

  // example for instancing a component
  import MyComponent from "./my-component";

  const myComponent = <MyComponent>;
  ```

  In case importing css modules, should always be imported as _cssModules_:

  ```javascript
  // example for instancing styles from css modules
  import cssModules from "./index.module.css";

  const rootStyle = cssModules[root];
  ```

- **Classes** on cascade stylesheet **modules** are named with just a word, because _Create React App_ will generate a unique name on render, as:

  ```css
  /* example for a index.module.css from MyComponent */
  .class {
    prop: "value";
  }
  ```

2. Project Tree:

- Components: are set right directly on `/src/` directory, following the naming convention;
- Modules: on `modules.js` file at `/src/` directory;
- Constants: on `constants.js` file at `/src/` directory;
- Used APIs: are found in each source component that uses it;

3. Documentation:

- Params description:

```javascript
/**
 * Returns x raised to the n-th power.
 *
 * @param {number} x The number to raise.
 * @param {number} n The power, must be a natural number.
 * @return {number} x raised to the n-th power.
 */

function pow({ x = 0, n = 0 } = {}) {
  return x ** n;
}
```

- JSX component usages:

```javascript
<Component prop={value1|value2|etc...} />
```

- Component or module props:

  - Functional:

  ```javascript
  function Component({
    iAmString = "",
    iAmBool = false,
    iAmFunc = () => {},
    iAmNumber = 0,
  } = {}) {
    return <div />;
  }
  ```

  - Class:

  ```javascript
  const defaultProps = {
    iAmString = "",
    iAmBool = false,
    iAmFunc = () => {},
    iAmNumber = 0,
  }

  export default class MyComponent extends React.Component {}

  MyComponent.defaultProps = defaultProps;
  ```

### `Components`

Nothing yet.

### `Modules`

Nothing yet.

### `Constants`

Nothing yet.

### `Used APIs`

Nothing yet.
