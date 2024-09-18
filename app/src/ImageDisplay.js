import React, { Component } from 'react';
import axios from 'axios';

class ImageDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageName: ''
    };
  }

  componentDidMount() {
    this.fetchImageName();
  }

  fetchImageName() {
    axios.get('assets/imageData.json')
      .then(response => {
        this.setState({ imageName: response.data.imageName });
      })
      .catch(error => {
        console.error('Error fetching the image name:', error);
      });
  }

  render() {
    const { width, height } = this.props;
    const { imageName } = this.state;
    const imageUrl = `${process.env.PUBLIC_URL}/assets/${imageName}`;

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