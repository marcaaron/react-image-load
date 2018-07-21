import React, { Component } from 'react';
import data from './data.json';
import Image from './Image';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Images</h1>
        <p>Prevent Images Under A Certain Size from Rendering</p>
        {
          data.images.map(img=>
            <Image
              key={img.id}
              // Image Sizes Range from 120px to 240px
              minWidth="120"
              src={img.url}
            />
          )
        }
      </div>
    );
  }
}

export default App;
