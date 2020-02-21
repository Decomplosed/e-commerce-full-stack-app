import React from 'react'
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview'
import { Route } from 'react-router-dom'

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={} component={CollectionsOverview} />
  </div>
)

export default ShopPage
