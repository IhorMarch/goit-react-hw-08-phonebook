import React from 'react';
import PropTypes from 'prop-types';
import { SectionWrap, SectionTitle } from './Section.styled';


export const Section = ({ children }) => {
  return (
    <SectionWrap>
      <SectionTitle>Your Contacts</SectionTitle>
      {children}
    </SectionWrap>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};