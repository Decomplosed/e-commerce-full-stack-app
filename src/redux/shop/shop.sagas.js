import { takeEvery, call, put } from 'redux-saga/effects'

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

  try {
    const collectionRef = firestore.collection('collections')
    const snapshot = yield collectionRef.get()
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
  } catch(err) {
    
  }


  // collectionRef
  //   .get()
  //   .then(snapshot => {
  //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
  //     dispatch(fetchCollectionsSuccess(collectionsMap))
  //   })
  //   .catch(error => dispatch(fetchCollectionsFailure(error.message)))
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  )
}
