import React from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Todos</h2>
        <ul>
          <li>Breakfast</li>
          <li>Coffee</li>
          <li>Read</li>
        </ul>
        <form>
          <input/>
          <button> Add</button>
        </form>
        
        <button>Clear</button>
      </div>
    );
  }
}

export default App;
