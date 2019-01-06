import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actionMessage from '../actions/message-actions';

const propTypes = {
  elements: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  message: PropTypes.string.isRequired,
  updateMessage: PropTypes.func.isRequired,
};

// The component receives "elements" from Props
const App = ({ elements, message, updateMessage }) => (
  <div>
    <h1
      onClick={() => updateMessage()}
      role="presentation"
      onKeyDown={() => {}}
    >
      { message }
    </h1>
    <ul>
      {elements.map(element => (
        <li key={element.id}>
          {element.name}
        </li>
      ))}
    </ul>
  </div>
);

// State -> Props
const mapStateToProps = state => (
  {
    elements: state.elements,
    message: state.message,
  }
);

// Functions -> Props
const mapDispatchToProps = dispatch => (
  {
    updateMessage() {
      dispatch(actionMessage());
    },
  }
);

App.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(App);
