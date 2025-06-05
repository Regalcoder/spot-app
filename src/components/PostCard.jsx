// components/PostCard.jsx
import React from 'react';

function PostCard({ post, onEdit }) {
  return (
    <div className="post-card">
      <div className="post-header">
        <h3>{post.title}</h3>
        <button onClick={onEdit} className="edit-btn">
          Edit
        </button>
      </div>
      <div className="post-image">
        <img src={post.image} alt={post.title} />
      </div>
      <p className="post-description">{post.description}</p>
    </div>
  );
}

export default PostCard;