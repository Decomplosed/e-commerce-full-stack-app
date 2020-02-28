import { takeEvery, call } from 'redux-saga/effects'

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils'

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './shop.actions'

import ShopActionTypes from './shop.types'

export function* fetchCollectionsAsync() {
  yield console.log('Fired')

  const collectionRef = firestore.collection('collections')

  collectionRef
    .get()
    .then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      dispatch(fetchCollectionsSuccess(collectionsMap))
    })
    .catch(error => dispatch(fetchCollectionsFailure(error.message)))
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  )
}
