import React, { Component } from 'react';

class ImageDisplay extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const { width, height, imageName } = this.props;
    const imageUrl = `${process.env.PUBLIC_URL}/assets/img/${imageName}`;

    return (
      <div>
        {imageName ? (
          <img src={imageUrl} alt="Loaded from JSON" width={width} height={height} />
        ) : (
          <p>Loading image...</p>
        )}
      </div>
    );
  }
}

export default ImageDisplay;