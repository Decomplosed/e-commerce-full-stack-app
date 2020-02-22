import React from 'react'
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview'
import CategoryPage from '../category/Category'
import { Route } from 'react-router-dom'

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
  </div>
)

export default ShopPage
