import React from 'react';
import { Link } from 'gatsby';
import Layout from '../layout';

export default () => (
  <Layout>
    <h1>About me!</h1>
    <p>This is my personal website.</p>
    <Link to="/">&larr; back to home</Link>
  </Layout>
);
