import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [view, setView] = useState('book');

  const renderComponent = () => {
    switch (view) {
      case 'book': return <BookDetails />;
      case 'blog': return <BlogDetails />;
      case 'course': return <CourseDetails />;
      default: return <div>Please select a view</div>;
    }
  };

  return (
    <div>
      <h1>Welcome to BloggerApp</h1>

      <button onClick={() => setView('book')}>Show Book</button>
      <button onClick={() => setView('blog')}>Show Blog</button>
      <button onClick={() => setView('course')}>Show Course</button>

      <hr />

      {renderComponent()}

    </div>
  );
}

export default App;
