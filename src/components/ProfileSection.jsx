// components/ProfileSection.jsx
import React from 'react';

function ProfileSection() {
  return (
    <section className="profile-section">
      <div className="profile-header">
        <h1>Alicune Damala Bouga</h1>
        <p>Time Bongo Puru Nacka</p>
        <p>Lu Lu Lu Badara Akon...</p>
        <p>
          Known mononymously as Akon (/eikon/) is a Senegalese-American singer, 
          record producer, and entrepreneur. An influential figure in modern world...
        </p>
        <button className="edit-profile-btn">✔ Edit Profile</button>
      </div>
    </section>
  );
}

export default ProfileSection;