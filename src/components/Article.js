/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

const Article = (props) => {
  const color = props.color
  console.log(color)
  return (
    <div class="card" style={{backgroundColor: color.code}}>
        <div class="card-header">
            {color.title}
        </div>
        <div class="card-body">
            <h5 class="card-title">{color.name}</h5>
            <p class="card-text">{color.text}</p>
        </div>
        <div class="card-footer">
            <a href="#" class="btn btn-outline-primary">Read More</a>
        </div>
    </div>
  );
};

export default Article;
