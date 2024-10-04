import React from 'react';
import BlogPost from './Blog2';
import '../Blog/Blog.css';

const Blog = () => {
  const posts = [
    {
      image: '/src/assets/Blog/896aad9fd5981c841633a846ddb6994b.png',
      category: 'Design',
      title: 'UX review presentations',
      description: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
      author: 'Olivia Rhye',
      authorImg: '/src/profile.png',
      date: '20 Jan 2024',
    },
    {
      image: '/src/assets/Blog/a3c522719b54dd45b1795921034a3f00.png',
      category: 'Product',
      title: 'Migrating to Linear 101',
      description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.',
      author: 'Phoenix Baker',
      authorImg: '/src/profile.png',
      date: '19 Jan 2024',
    },
    {
      image: '/src/assets/Blog/1dbd591c5182a37dfedc9ff110ae94d9.png',
      category: 'Software Engineering',
      title: 'Building your API stack',
      description: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
      author: 'Lana Steiner',
      authorImg: '/src/profile.png',
      date: '18 Jan 2024',
    },
  ];

  return (
    <div className="blog-container">
  <div className="blog-header">
    <div className="blog-text">
      <p className='our-blog'>Our Blog</p>
      <h2>Latest blog posts</h2>
      <p>Tools and strategies modern teams need to help their companies grow.</p>
    </div>
    <button className="view-all-btn">View all posts</button>
      </div>
      <div className="posts-grid">
        {posts.map((post, index) => (
          <BlogPost
            key={index}
            image={post.image}
            category={post.category}
            title={post.title}
            description={post.description}
            author={post.author}
            authorImg={post.authorImg}
            date={post.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
