# Simple React JS Project (Dockerized)

## What is the use of this Repo

This project is a fork of the Simple ReactJS Project <https://github.com/aditya-sridhar/simple-reactjs-app>.
The live application can be found at <https://aditya-sridhar.github.io/simple-reactjs-app>.
Its goal is to provide a working simple React app to learn the basics of the technology.

## Prerequisites

1. Install Docker and Docker Compose

## Installation

1. Clone the repository
2. In the terminal, run the command:

```sh
docker-compose up -d --build
```

3. In the browser, visit the URL <http://localhost>
   1. The application runs on **localhost:3000**

You should see :
![screenshot 1](ressources/screenshot-1.png)

## Concepts to learn per branch

1. Creating a Component in React
2. Props and State
   1. Props
   2. State
      1. Local state
         1. Global state
3. Hooks
4. JSX
5. Flux (Lifecycle)
6. Router
7. Forms
   1. Form validation
   2. Library
8. Making HTTP calls
9. Communicating between parent and child components
10. Using Bootstrap along with React
11. Using Basic Routing in React
12. Performance and Optimization
13. Tests
    1. Unit tests
    2. End-to-end tests
14. Tools and development environment
    1. Webpack
    2. Babel
    3. ESLint
    4. Prettier
15. Best Practices
    1. Architecture
    2. Naming conventions
    3. Documentation

## Creating a Component in React

Goal : create a component to show an image related to a customer.

1. Add some fixtures in the json data
   1. Create a folder to store images : assets/img
   2. Add one jpg file per customer in the folder
   3. Add reference to each image in the json

ex : customer1.json

```json
   "picture": "customer1.jpg"
```

2. Create a new class in charge of displaying the image when loading the customer details
  ie: ImageDisplay.js
1. Important : here we use props to be able to inject variables in the constructor.

```js
const { width, height, imageName } = this.props;
```

1. Import the ImageDisplay to be able to use it.
   1. the import is done in the CustomerDetails.js file
2. Use the new component to load and display the image

```js
<Image width='200' height='200' imageName={customerDetails.picture}></Image>
```

## Props

- props means 'properties'
- props are a type of object
- props are immutable
- props can be passed between components as arguments are passed to function
- To access props in a component , we use this.props
- props are used both in functional and class components
- Props are passed top to bottom

In the branch

- Create a new component Product.js
- the product should show a name , a decription and a price
- name, description and price must be passed as props

```js
 <Products
    name="temitope"
    description="the product has fantastic features"
    price={1000}
  />
```

### DefaultProps

The defaultProps is a React component property that allows us to set default values for the props argument. It usually comes in handy when we don’t have any props data passed in.

## State

- State is a javascript object
- State aren't immutable
- State change asynchronously
- They hold information about the components
- They cannot be accessed by a child component
- State is used for rendering dynamic changes
- States can’t make components reusable

```js
const [count, setCount] = useState(0);
```

How to use it in a component

```js
import React, { useState } from 'react';

 function Counter() {
   const [count, setCount] = useState(0);

   const incrementCounter = () => {
     setCount(count + 1);
   };

   return (
     <div>
       <p>Count: {count}</p>
       <button onClick={incrementCounter}>Increment</button>
     </div>
   );
 }

 export default Counter;
```

## Hook

## Live Application URL

This URL has the application deployed:

The application runs on **localhost:3000**

## Application design

#### Components

1. **Customers** Component: This component displays a list of customers. It gets the data from a JSON file in the assets folder.

2. **CustomerDetails** Component: This component displays the details of the selected customer. It also gets its data from a JSON file in the assets folder. This component is the child component of the **Customers** component.

#### HTTP client

The **axios** library is used to make HTTP calls.

#### URL

The application has just one URL, `/customerlist`, which ties to the **Customers** component.

#### Libraries

- axios <https://www.npmjs.com/package/axios>
- react <https://fr.react.dev/>
- react-bootstrap <https://react-bootstrap.netlify.app/>
- react-dom <https://legacy.reactjs.org/docs/react-dom.html>
- react-router-dom <https://reactrouter.com/en/main>
- react-scripts <https://www.npmjs.com/package/react-scripts>
- web-vitals <https://www.npmjs.com/package/web-vitals>

## Resources

**Fork**: <https://github.com/aditya-sridhar/simple-reactjs-app>
**create-react-app**: The following link has all the commands that can be used with create-react-app <https://github.com/facebook/create-react-app>
**ReactJS**: Refer to <https://reactjs.org/> to understand the concepts of ReactJS
**React Bootstrap**: Refer to <https://react-bootstrap.github.io/getting-started/introduction/> to understand how to use React Bootstrap
**Props**: Refer to <https://www.freecodecamp.org/news/beginners-guide-to-props-in-react/>
