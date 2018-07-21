import React, { Component } from 'react';
import data from './data.json';
import Image from './Image';
class App extends Component {
  render() {
    return (
      <div className="App">
        {data.images.map(img=><Image key={img.id} minWidth="200" src={img.url}/>)}
      </div>
    );
  }
}

export default App;
