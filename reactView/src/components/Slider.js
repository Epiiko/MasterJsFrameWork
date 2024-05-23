import React from "react";

class Slider extends React.Component {
  render() {
    return (
      <div id="slider" class="slider-big">
        <h1>{this.props.titulo}</h1>
        <a href="blog.html" class="btn-white">
          {this.props.btn}
        </a>
      </div>
    );
  }
}

export default Slider;
