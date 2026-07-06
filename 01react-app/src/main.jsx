import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';


function MyApp() {
  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  );
}

const reactElement = React.createElement('h1', 
    null, 
    'Hello, React!');

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);