import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component{
  render(){
    return (
      <div className='wrapper'>
        <div className='title-bar'>
          <h1>{this.props.title}</h1>
        </div>
      </div>
    );
  }
};

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  moderator: PropTypes.string,
};
