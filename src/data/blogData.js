
export const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React: A Beginner's Guide",
    date: "May 14, 2023",
    summary: "Learn the basics of React and how to create your first component.",
    content: `
      <p>React is a JavaScript library for building user interfaces, particularly single-page applications where you need a responsive experience that doesn't require page reloading.</p>
      
      <h2>Why React?</h2>
      <p>React allows developers to create large web applications that can change data, without reloading the page. Its main purpose is to be fast, scalable, and simple. It works only on user interfaces in the application. This corresponds to the view in the MVC template.</p>
      
      <h2>Setting Up Your First React App</h2>
      <p>The easiest way to start with React is to use Create React App. It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production.</p>
      
      <pre><code>npx create-react-app my-app
cd my-app
npm start</code></pre>
      
      <h2>Creating Your First Component</h2>
      <p>Components are the building blocks of React applications. A component is a JavaScript function or class that optionally accepts inputs (called "props") and returns a React element that describes how a section of the UI should appear.</p>
      
      <pre><code>// A simple functional component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Using the component
<Welcome name="React Developer" /></code></pre>
      
      <h2>Conclusion</h2>
      <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
    `
  },
  {
    id: 2,
    title: "Understanding React Hooks: useState and useEffect",
    date: "June 22, 2023",
    summary: "Dive deeper into React's hooks system and learn how to manage state and side effects.",
    content: `
      <p>Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. Hooks are functions that let you "hook into" React state and lifecycle features from function components.</p>
      
      <h2>The useState Hook</h2>
      <p>useState is a Hook that lets you add React state to function components. It returns a pair: the current state value and a function that lets you update it.</p>
      
      <pre><code>import React, { useState } from 'react';

function Counter() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}</code></pre>
      
      <h2>The useEffect Hook</h2>
      <p>The Effect Hook lets you perform side effects in function components. Data fetching, subscriptions, or manually changing the DOM from React components are all examples of side effects.</p>
      
      <pre><code>import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = \`You clicked \${count} times\`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}</code></pre>
      
      <h2>Rules of Hooks</h2>
      <p>Hooks are JavaScript functions, but they impose two additional rules:</p>
      <ul>
        <li>Only call Hooks at the top level. Don't call Hooks inside loops, conditions, or nested functions.</li>
        <li>Only call Hooks from React function components. Don't call Hooks from regular JavaScript functions.</li>
      </ul>
    `
  },
  {
    id: 3,
    title: "Building a RESTful API with Node.js and Express",
    date: "July 15, 2023",
    summary: "Learn how to create a backend API using Node.js and Express to complement your React frontend.",
    content: `
      <p>Node.js combined with Express provides a powerful platform for building RESTful APIs. In this guide, we'll cover the basics of creating a simple API to handle CRUD operations.</p>
      
      <h2>Setting Up Your Project</h2>
      <p>First, initialize a new Node.js project and install Express:</p>
      
      <pre><code>mkdir my-api
cd my-api
npm init -y
npm install express</code></pre>
      
      <h2>Creating a Basic Server</h2>
      <p>Let's create a simple Express server that responds to HTTP requests:</p>
      
      <pre><code>// server.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(\`API server running on port \${port}\`);
});</code></pre>
      
      <h2>Implementing CRUD Operations</h2>
      <p>Now let's implement basic CRUD operations for a resource, such as "users":</p>
      
      <pre><code>// In-memory data store
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// GET all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET a specific user
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');
  res.json(user);
});

// POST a new user
app.post('/api/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT (update) a user
app.put('/api/users/:id', (req, res) => {
  let user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');
  
  user.name = req.body.name;
  user.email = req.body.email;
  
  res.json(user);
});

// DELETE a user
app.delete('/api/users/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex === -1) return res.status(404).send('User not found');
  
  users.splice(userIndex, 1);
  res.status(204).send();
});</code></pre>
      
      <h2>Handling Errors</h2>
      <p>Adding error handling middleware helps manage exceptions gracefully:</p>
      
      <pre><code>app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});</code></pre>
      
      <h2>Conclusion</h2>
      <p>With these basic building blocks, you can create a robust API for your application. For production applications, consider adding features like authentication, input validation, and connecting to a database.</p>
    `
  }
];
