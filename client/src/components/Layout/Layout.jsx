/* eslint-disable react/prop-types */
import React from 'react';

import Header from '../Header/Header';

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="container">
        {children}
      </main>
    </>
  );
}

export default MainLayout;
