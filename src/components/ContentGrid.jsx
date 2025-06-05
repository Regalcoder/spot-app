// components/ContentGrid.jsx
import React from 'react';
import PostCard from './PostCard';

function ContentGrid({ posts, onEditPost }) {
  return (
    <div className="content-grid">
      <div className="sections-nav">
        <h2>Table of contents</h2>
        <div className="sections-list">
          {Array.from({ length: 100 }, (_, i) => (
            <div key={i} className="section-item">SECTION {i + 1}</div>
          ))}
        </div>
      </div>
      
      <div className="posts-container">
        {posts.map(post => (
          <PostCard 
            key={post.id} 
            post={post} 
            onEdit={() => onEditPost(post)}
          />
        ))}
      </div>
    </div>
  );
}

export default ContentGrid;