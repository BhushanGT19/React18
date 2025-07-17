✅ 1️⃣ What is React?
React is a JavaScript library for building user interfaces (UI), especially for web applications.
It helps developers build dynamic, fast, and reusable UI components.

🔥 Key Features of React:
Component-based

Virtual DOM for faster performance

Unidirectional data flow

Created by Facebook

✅ 2️⃣ What is a CDN?
CDN (Content Delivery Network) is a network of servers that delivers content like images, CSS, JS files from the nearest server to the user.
It makes websites load faster and reduces server load.

🔧 Example of using React from a CDN:
html
Copy
Edit
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
✅ 3️⃣ What is NPM?
NPM (Node Package Manager) is a tool for installing JavaScript packages, including React.
It comes automatically with Node.js.

📦 What it does:
Installs libraries like React, Express, etc.

Manages dependencies in your project

Helps run scripts (build, start, test)

Example:

bash
Copy
Edit
npm install react react-dom
✅ 4️⃣ How to Add React to a Project via CDN:
🔧 Step-by-step:
Create a simple index.html file

Add these CDN links in the <head> section:

html
Copy
Edit
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
Write your React code in a <script type="text/babel"> block:

html
Copy
Edit
<div id="root"></div>

<script type="text/babel">
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<h1>Hello from React via CDN!</h1>);
</script>
📄 Full Example HTML (React + Babel via CDN):
html
Copy
Edit
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>React via CDN</title>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<h1>Hello from React via CDN!</h1>);
    </script>
</body>
</html>

------------------------

#Using offline library
    
    <script src="../node_modules/react/cjs/react.development.js"></script>
    <script src="../node_modules/react-dom/cjs/react-dom.development.js"></script>
    <script src="../node_modules/@babel/standalone/babel.js"></script>
    
--------------------------