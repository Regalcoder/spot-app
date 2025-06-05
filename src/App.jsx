// App.jsx
import { useState } from 'react';
import Header from './components/Header';
import ProfileSection from './components/ProfileSection';
import ContentGrid from './components/ContentGrid';
import PostModal from './components/PostModal'; // This was missing
import './App.css';

function App() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Beautiful Sunset',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      description: 'Amazing sunset at the beach'
    },
    {
      id: 2,
      title: 'Mountain View',
      image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606',
      description: 'View from the top of the mountain'
    }
  ]);

  const handleCreatePost = (newPost) => {
    setPosts([...posts, { ...newPost, id: Date.now() }]);
    setShowCreateModal(false);
  };

  const handleUpdatePost = (updatedPost) => {
    setPosts(posts.map(post => post.id === updatedPost.id ? updatedPost : post));
    setShowEditModal(false);
  };

  const handleEditPost = (post) => {
    setCurrentPost(post);
    setShowEditModal(true);
  };

  return (
    <div className="app">
      <Header 
        onCreateClick={() => setShowCreateModal(true)}
        onEditClick={() => setShowEditModal(true)}
      />
      
      <div className="main-content">
        <ProfileSection />
        <ContentGrid posts={posts} onEditPost={handleEditPost} />
      </div>

      {showCreateModal && (
        <PostModal 
          onClose={() => setShowCreateModal(false)}
          onSubmit={handleCreatePost}
          mode="create"
        />
      )}

      {showEditModal && (
        <PostModal 
          onClose={() => setShowEditModal(false)}
          onSubmit={handleUpdatePost}
          mode="edit"
          post={currentPost}
        />
      )}
    </div>
  );
}

export default App;