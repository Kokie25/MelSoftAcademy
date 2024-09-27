// src/components/PostForm.js
import React, { useState } from 'react';

function PostForm({ onPost }) {
  const [content, setContent] = useState('');

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content) {
      onPost(content);
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={handleChange}
        placeholder="Write your post..."
        required
      />
      <button type="submit">Post</button>
    </form>
  );
}

export default PostForm;
