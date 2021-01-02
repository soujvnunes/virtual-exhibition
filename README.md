# UFAL 60 anos

This project will follows this planned [prototype](https://drive.google.com/drive/folders/1jVTV7TA680KU66xiYnqbh3vvNJ7lIjT0?usp=sharing).

## Documentação

In this project you'll find:

### `Conventions`

1. Naming:

- kebab-case: Classes from stylesheets, JSON object property and directory or files names;
  - i.e.: `.component-variation`
  - i.e.: `src/component-name/index-file.js`
- camelCase: Instances from componentes, following the [Airbnb Style Guide](https://github.com/airbnb/javascript/tree/master/react#naming);
  - i.e.: `const componentItem = <MyComponent />;`
- PascalCase: For components;
  - i.e.: `import MyComponent from './MyComponent';`

2. Project Tree:

- Components: are set according of its hierarchy, following the [Atomic Design Methodology](https://atomicdesign.bradfrost.com/chapter-2/):
  - `/src/atoms` as **typography**, **button-base**, **grid**, **grid-item** or **icon**;
  - `/src/molecules` as **button** or **input** both with icon support capability;
  - `/src/organisms` as **card**, **header** or **section**;
  - `/src/templates` as **page**;
  - `/src/pages` still be a template, but has context or some data exchange;
- Modules: on `modules.js` file at `/src/app` directory;
- Constants: on `constants.js` file at `/src/app` directory;
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
