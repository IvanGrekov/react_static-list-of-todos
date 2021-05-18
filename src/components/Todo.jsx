import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';

export const Todo = ({
  title,
  completed,
  user,
}) => (
  <>
    <h2>{title}</h2>
    <p>{`Status: ${completed ? 'completed' : 'not completed'}`}</p>
    <User {...user} />
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

Todo.defaultProps = {
  completed: false,
};