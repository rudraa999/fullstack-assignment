import React from 'react';
import ProfileCard from './ProfileCard';

function ProfileCardDemo() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Assignment 4: React Profile Card using Props</h2>
      <p style={{ color: '#666', marginBottom: '25px', fontSize: '0.9rem' }}>
        Passes name, image URL, and description as props to a child component.
      </p>

      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <ProfileCard
          name="Alice Smith"
          imageUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
          description="Frontend developer who loves building responsive web apps with React."
        />
        <ProfileCard
          name="Bob Johnson"
          imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
          description="Full Stack engineer interested in Node.js, Express, and cloud databases."
        />
      </div>
    </div>
  );
}

export default ProfileCardDemo;
