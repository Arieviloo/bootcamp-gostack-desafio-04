import React from 'react';
import './style.css';

const PostItem = ({ author, date }) => {
  return (
    <div className="postTop">
      <img className="avatar" src={author.avatar} />
      <div className="subtitle">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default PostItem;
