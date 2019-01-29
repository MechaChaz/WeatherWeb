import React, { Component, Fragment } from 'react';

class Text extends Component {
  constructor(props) {
    super(props);

    this.textareaRef = React.createRef();
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <Fragment>
        <form onSubmit={event => handleSubmit(event, this.textareaRef.current.value)}>
          <textarea ref={this.textareaRef} />
          <button type="submit">Get Weather</button>
        </form>
        <label>{this.props.value}</label>
      </Fragment>
    );
  }
}

export default Text;
