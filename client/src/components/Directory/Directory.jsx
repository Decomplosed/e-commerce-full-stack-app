import React from 'react'
import MenuItem from '../MenuItem/MenuItem'
import { createStructuredSelector } from 'reselect'

import { connect } from 'react-redux'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'

import { DirectoryMenuContainer } from './Directory.styles'

const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...sectionProps }) => (
      <MenuItem key={id} {...sectionProps} />
    ))}
  </DirectoryMenuContainer>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)
