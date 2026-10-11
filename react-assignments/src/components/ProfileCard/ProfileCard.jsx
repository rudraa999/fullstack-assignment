import React from 'react';
import './ProfileCard.css';

// Assignment 4: Component displaying user's profile card using props
function ProfileCard({ name, imageUrl, description }) {
  return (
    <div className="profile-card">
      <img src={imageUrl} alt={name} className="profile-img" />
      <h3 className="profile-name">{name}</h3>
      <p className="profile-desc">{description}</p>
    </div>
  );
}

export default ProfileCard;
