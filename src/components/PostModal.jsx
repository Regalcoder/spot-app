// components/PostModal.jsx
import React, { useState, useEffect } from 'react';

function PostModal({ onClose, onSubmit, mode, post }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState('');

  useEffect(() => {
    if (mode === 'edit' && post) {
      setTitle(post.title);
      setDescription(post.description);
      setPreview(post.image);
    }
  }, [mode, post]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      id: mode === 'edit' ? post.id : Date.now(),
      title,
      description,
      image: image ? URL.createObjectURL(image) : preview
    };
    onSubmit(postData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>{mode === 'edit' ? 'Edit Post' : 'Create New Post'}</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required={mode !== 'edit'}
            />
          </div>
          
          {preview && (
            <div className="image-preview">
              <img src={preview} alt="Preview" />
            </div>
          )}
          
          <button type="submit" className="submit-btn">
            {mode === 'edit' ? 'Update Post' : 'Create Post'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostModal;