import React from 'react';
import PropTypes from 'prop-types';

export default function Translate(props) {
  try {
    return (
      <div>
          <span>{props.translatedMessages}</span>
      </div>
    );
  } catch (ex) {
    console.log(ex);
    return <div>{ex.message}</div>;
  }
}

Translate.propTypes = {
    translatedMessages: PropTypes.string.isRequired, // eslint-disable-line
};
