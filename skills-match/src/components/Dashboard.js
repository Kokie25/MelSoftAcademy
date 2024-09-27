import React, { useState } from 'react';
import UserProfile from './UserProfile';
import PostForm from './PostForm';
import JobSearch from './JobSearch';

function Dashboard() {
  const [user, setUser] = useState({
    name: '',   // This will be replaced by the registered username
    contact: '',
    location: '', // New location field
  });

  const [posts, setPosts] = useState([]);

  const handlePost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  const handleSearch = (query) => {
    console.log('Searching for jobs related to:', query);
    // Implement your job search logic here
  };

  return (
    <div className="dashboard">
      <JobSearch onSearch={handleSearch} />
      <UserProfile user={user} /> {/* Pass location to UserProfile */}
      <PostForm onPost={handlePost} />
      <h2>Posts</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
