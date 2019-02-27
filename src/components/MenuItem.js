import React from 'react';
import { PropTypes } from 'prop-types';

export default function MenuItem(props) {
  return (
    <li>
      {props.index} - {props.title}
    </li>
  );
}

MenuItem.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
}