import React from 'react'
import MenuItem from '../MenuItem/MenuItem'
import { createStructuredSelector } from 'reselect'

import { connect } from 'react-redux'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'

import './Directory.styles.scss'

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {sections.map(({ id, ...sectionProps }) => (
      <MenuItem key={id} {...sectionProps} />
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default Directory
