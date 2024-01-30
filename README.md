# `useQueryParamsState` Hook

The `useQueryParamsState` hook is designed to simplify the management of URL query parameters in a React application that uses React Router. It provides a convenient way to synchronize the state of a component with a specific query parameter in the URL.

## Installation

To use this hook, you need to have React and React Router installed in your project. You can install them using:

```bash
npm install react react-router-dom
```

## Usage

1. Import the `useQueryParamsState` hook into your component:

   ```jsx
   import { useQueryParamsState } from './path-to/useQueryParamsState';
   ```

2. Use the hook within your component:

   ```jsx
   const MyComponent: React.FC = () => {
     const [paramValue, setParamValue] = useQueryParamsState<string>('myQueryParam', 'default');

     // Use paramValue and setParamValue as needed in your component

     return (
       // Your component JSX
     );
   };
   ```

## Parameters

- `param` (string): The name of the query parameter you want to sync with the component state.

- `initialState` (T): The initial state for the component. This will be used when the query parameter is not present in the URL.

## Return Value

The hook returns a tuple containing the current value of the query parameter and a function to update that value.

```typescript
type UseQueryParamsStateReturnType<T> = [T, Dispatch<SetStateAction<T>>];
```

## Example

Consider a component that manages a search term based on a query parameter:

```jsx
import { useQueryParamsState } from './path-to/useQueryParamsState';

const SearchComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useQueryParamsState<string>('search', '');

  return (
    <div>
      <label>Search Term:</label>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <p>Search Term: {searchTerm}</p>
    </div>
  );
};
```

In this example, the `SearchComponent` automatically syncs its state with the 'search' query parameter in the URL, allowing users to bookmark or share specific search states.

## Explanation

The `useQueryParamsState` hook leverages React's state and effect hooks along with React Router's `useLocation` to manage the state of a specific query parameter. It handles parsing and updating the URL, providing a clean and reusable solution for components that need to interact with query parameters in a React Router environment. Developers can use this hook to create components that maintain their state based on URL query parameters without manually handling the complexities of URL manipulation.

## Demo

Explore the interactive demo on CodeSandbox to see the `useQueryParamsState` hook in action:

[![Open in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/react-ts-use-query-params-state-hook-forked-gfztc2)