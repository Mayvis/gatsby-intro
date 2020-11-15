import React from 'react';
import { Link } from 'gatsby';
import Layout from '../layout';
import PostPreview from '../components/PostPreview';
import usePosts from '../hooks/use-posts';

export default () => {
  const posts = usePosts();

  return (
    <Layout>
      <h1>Home</h1>
      <p>Hello Minnesota!</p>
      <Link to="/about">Learn about me</Link>

      <h2>Read my blog</h2>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  );
};
