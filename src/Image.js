import React, { Component, createRef } from 'react';

export default class Image extends Component {
  constructor(props) {
    super(props);
    this.image = createRef();
    this.state = {
      exceedsMinWidth: true
    }
  }

  componentDidMount(){
    const { naturalWidth } = this.image.current;
    const { minWidth } = this.props;
    const exceedsMinWidth = naturalWidth >= minWidth;
    this.setState({exceedsMinWidth});
  }

  render() {
    if(this.state.exceedsMinWidth){
      return (<img alt="" ref={this.image} src={this.props.src}/>);
    }else{
      return null;
    }
  }
}
