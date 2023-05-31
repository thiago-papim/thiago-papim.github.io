import React from 'react';
import propTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <button
        className="btnHeader"
      >
        {name}
      </button>
    );
  }
}

Button.propTypes = {
  name: propTypes.string.isRequired,
};

export default Button;
