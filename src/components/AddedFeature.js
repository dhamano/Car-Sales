import React from 'react';
import { useDispatch } from 'react-redux';

import { REMOVE_FEATURE } from '../store/reducers';

const AddedFeature = props => {
  const dispatch = useDispatch();

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => dispatch({ type: REMOVE_FEATURE, payload: props.feature })}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;