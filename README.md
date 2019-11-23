  # Intro
  Hooks are the newest addition to react v16.8. Uisng hooks it's possible to organize logical components much easily, while making the components much smaller, easier to understand and easier to test. With this we can manage a small to medium projects state easily, keep the components small and concise, and more.

  Here's a direct quote from Dan "Hooks apply the React philosophy (explicit data flow and composition) inside a component, rather than just between the components. That’s why I feel that Hooks are a natural fit for the React component model.

  Unlike patterns like render props or higher-order components, Hooks don’t introduce unnecessary nesting into your component tree. They also don’t suffer from the drawbacks of mixins." - taken from [here](https://css-tricks.com/intro-to-react-hooks/).

  Also, you can read the official post.
  [Introducing Hooks](https://reactjs.org/docs/hooks-intro.html)

  # Why functional components are better

  Easy to understand

  Easy to test

  Has better performance than Class components

  101 more reasons about why functional comonents are better than class components can be read [here](https://hackernoon.com/why-react-hooks-a-developers-perspective-2aedb8511f38) and [here](https://programmingwithmosh.com/react/react-functional-components/)


  ## useState()
  is a special function that lets you add the react state into functional components, which wasn't possible before. Previously if we wanted to use state in a component, we had to make sure it was a class component, functional components weren't able to use this feature. Now with `useState()` method, we're able to use the application state inside our functional component. Here you can see the difference,

  ```js
  class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  }
  ```

  we can do the same thing now with

  ```js
  import React, { useState } from 'react';

  function Example() {
    const [count, setCount] = useState(0);
  }
  ```

  When we call the `useState()` method, it declares a state variable (here we are using count, but it can be of any name). Also, calling the method returns a couple of values: the current state (`count`), and the function that updates it (`setCount`).

  This does the job of `this.state.count` and `this.setState` like we used in class components before.

  So, to read the state we can use
  ```js
  <p>You clicked {count} times</p>
  ```

  instead of,
  ```js
  <p>You clicked {this.state.count} times</p>
  ```

  And update using

  ```js
  <button onClick={() => setCount(count + 1)}>
    Click me
  </button>
  ```

  instead of the previous

  ```js
  <button onClick={() => this.setState({ count: this.state.count + 1 })}>
    Click me
  </button>
  ```

  For more detailed explanation, read [Using the State Hook](https://reactjs.org/docs/hooks-state.html)

  ## useEffect()
  The Effect hook lets us use side effects from a functional component. It's purpose is similar to the lifecycle methods (`componentDidMount`, `componentDidUpdate`, `componentWillMount`) in class components.

  ```js
  useEffect(didUpdate);
  ```

  we can also decide when to re-render a component using `useEffect`

  ```js
  useEffect(() => {
    document.title = `Clicked ${count}`;
  }, [count]);
  ```
  this will only re-run when the count value is updated.

  Often, effects generate resources that needs to be purged before the component gets unmounted. Example: Subscription or timer id. For this, the function paseed in `useEffect` can run the cleanup function, example:

  ```js
  useEffect(() => {
    const subscription = props.source.subscribe();
    return () => {
      // Clean up the subscription
      subscription.unsubscribe();
    };
  });
  ```

  more detailed explanation [here](https://reactjs.org/docs/hooks-reference.html#useeffect)


  ## useContext()

  Since the birth of react, one thing developers complained consistantly was passing data throgh many level of components. Before we could only do this by passing props to all the nested child components. Or, we had to use another library like redux to handle this for us, which tbh, is too much work and boilerplate for small apps. That's why with the latest version of react we can use the context api to handle this situation.
  Here's an example

  ```js
  // App.js
  import React from 'react'

  const CurrentRoute = React.createContext({ path: '/welcome' })

  export default function App() {
    return (
      <CurrentRoute.Consumer>
        {currentRoute =>
          currentRoute.path === '/welcome' &&
          "Welcome!"
        }
      </CurrentRoute.Consumer>
    )
  }
  ```

  ```js
  // index.js
  import React from 'react'
  import ReactDOM from 'react-dom'
  import App from './App'

  ReactDOM.render(<App />, document.getElementById('root'))
  ```

  which, if we had to use props drilling, had to be done like this mess

  ```js
  // App.js
  import React from 'react'

  const CurrentRoute = React.createContext({ path: '/welcome' })
  const CurrentUser = React.createContext(undefined)
  const IsStatic = React.createContext(false)

  export default function App() {
    return (
      <CurrentRoute.Consumer>
        {currentRoute =>
          <CurrentUser.Consumer>
            {currentUser =>
              <IsStatic.Consumer>
                {isStatic =>
                  !isStatic &&
                  currentRoute.path === '/welcome' &&
                  (currentUser
                    ? `Welcome back, ${currentUser.name}!`
                    : 'Welcome!'
                  )
                }
              </IsStatic.Consumer>
            }
          </CurrentUser.Consumer>
        }
      </CurrentRoute.Consumer>
    )
  }
  ```

  ```js
  // index.js
  import React from 'react'
  import ReactDOM from 'react-dom'
  import App from './App'

  ReactDOM.render(<App />, document.getElementById('root'))
  ```

  (example taken from [here](https://frontarm.com/james-k-nelson/usecontext-react-hook/))


  # Creating a demo using useReducer

  Here's a git repo of the finished project

  ## How it can be improved
  If you read the source code, I have just used `useReducer()` to access state data in functional components. You can use the `useReducer()` and `useContext()` hooks to pass props to children without props drilling, thus making the code more lighter.

  # Learning material

  [Awesome React Hooks](https://github.com/rehooks/awesome-react-hooks) : Hundreds of community submitted custom hooks.

  [Making API call using hooks](https://blog.bitsrc.io/making-api-calls-with-react-hooks-748ebfc7de8c?gi=acccb2ecbdf1)

  [useHooks()](https://usehooks.com/) : More custom hooks, useAuth, useWhyDidYouUpdate

  [Example apps using hooks](https://codesandbox.io/react-hooks)

  # Fountain Hook