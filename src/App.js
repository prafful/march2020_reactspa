import React from 'react';
import Menu from './spa/menu/menu';
import Content from './spa/content/content';


class App extends React.Component {
  state = {  }
  render() { 
    return (
      <div>
        <h3>SPA in React</h3>
        <div>
          <Menu></Menu>
        </div>
        <div>
          <Content></Content>
        </div>
      </div>
      );
  }
}
 
export default App;
