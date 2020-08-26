import React from 'react';
import Layout from '../components/Layout';

import Loadable from '@loadable/component';
const Auth = Loadable(() => import('../components/Authentication/auth'));

const Login = () => {
  return (
    <Layout title="Login">
      <Auth />
    </Layout>
  );
};

export default Login;
