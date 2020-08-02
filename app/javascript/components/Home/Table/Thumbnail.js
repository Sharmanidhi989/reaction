import React, { Component } from 'react';

const Thumbnail = (props) => {
  return (
    <div className="pt-4 pb-4">
      <iframe width="100%" height="100%" src={props.url}></iframe>
    </div>
  )
}

export default Thumbnail