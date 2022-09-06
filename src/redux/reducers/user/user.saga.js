import { takeLatest, all, call, put } from 'redux-saga/effects'

import { USER_ACTION_TYPES } from './user.types'

import { createDocumentUserFromAuth, getCurrentUser } from '../../../utils/firebase/firebase'

import { signInError, signInSuccess } from './user.action'

export function* getSnapshotFromUserAuth(userAuth, additionalOptions) {
    try {
        const userSnapshot = yield call(createDocumentUserFromAuth, userAuth, additionalOptions)
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    } catch (error) {
        yield put(signInError(error))
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser)
        if (!userAuth) return;
        yield call(getSnapshotFromUserAuth, userAuth)
    } catch(error) {
        yield put(signInError(error))
    }
}

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* userSagas() {
    yield all([call(onCheckUserSession)])
}