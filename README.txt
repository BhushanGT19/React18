To create react project by cmd promt:
=====================================

Use cmd: ' npx create-react-app react-shopping '

After that to start the project: ' npm start '

Adding bootstrap libararies to react

1. npm install bootstrap --save
2. npm install bootstrap-icons --save

In index.js

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

ChatGPT said:
✅ Difference Between Class Component and Functional Component in React
Here’s a clear and simple comparison:

Feature	            Class Component	                                                                        Functional Component
Syntax	            Uses class keyword and extends Component	                                            Uses simple JavaScript function or arrow function
State	            Uses this.state and this.setState()	                                                    Uses useState() hook
Lifecycle Methods	Has built-in lifecycle methods like componentDidMount, shouldComponentUpdate, etc.	    Uses useEffect() for side effects / lifecycle
this keyword	    Required to access props, state, methods (this.props, this.state)	                    No this keyword needed
Boilerplate	        More verbose / more code	Less code / cleaner syntax
Performance	        Slightly heavier due to lifecycle and this binding	                                    Lighter, preferred for simplicity and speed
Hooks	            Cannot use hooks	                                                                    Can use hooks like useState, useEffect

🔧 Example of Each
🔷 Class Component Example
javascript
Copy
Edit
import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
🔷 Functional Component Example (With Hooks)
javascript
Copy
Edit
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}