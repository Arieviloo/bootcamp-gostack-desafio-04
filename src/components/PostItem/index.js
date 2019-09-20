import React from 'react';
import './style.css';

const PostItem = ({ author, date, content }) => {
  return (
    <div className="postTop">
      <img className="avatar" src={author.avatar} />
      <div className="subtitle">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
      <div className="firstCommit">
        <p>{content}</p>
      </div>
    </div>
  );
};

// function PostComments({ comments }) {
//   return (
//     <div className="post-comments">
//       <div className="divider" />
//       {comments.map(comment => (
//         <div key={comment.id} className="comment">
//           <img className="avatar" src={comment.author.avatar} />
//           <p>
//             <span>{comment.author.name}</span>
//             {comment.content}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }

function Post({ author, date, content }) {
  return (
    <div className="post">
      <PostItem author={author} date={date} content={content} />
    </div>
  );
}

export default Post;
