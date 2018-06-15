import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header';
import Footer from '../footer';

const Page = ({ children }) => (
  <div className="page">
    <Header active={true} />
    {children}
    <Footer />
  </div>
);

Page.defaultProps = {
  hasHeader: true
};

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};

export default Page;
