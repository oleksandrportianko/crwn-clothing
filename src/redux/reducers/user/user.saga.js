import { takeLatest, all, call, put } from 'redux-saga/effects'

import { USER_ACTION_TYPES } from './user.types'

import { createDocumentUserFromAuth, getCurrentUser, signInAuthWithEmailAndPassword, signInWithGooglePopup } from '../../../utils/firebase/firebase'

import { signInError, signInSuccess } from './user.action'

export function* getSnapshotFromUserAuth(userAuth, additionalOptions) {
    try {
        const userSnapshot = yield call(createDocumentUserFromAuth, userAuth, additionalOptions)
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    } catch (error) {
        yield put(signInError(error))
    }
}

export function* signInWithEmail({payload}) {
    try {
        const { user } = yield call(signInAuthWithEmailAndPassword, payload.email, payload.password)
        yield call(getSnapshotFromUserAuth, user)
    } catch (error) {
        yield put(signInError(error))
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield call(signInWithGooglePopup)
        yield call(getSnapshotFromUserAuth, user)
    } catch(error) {
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

export function* onEmailSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onGoogleSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* userSagas() {
    yield all([call(onCheckUserSession), call(onGoogleSignInStart), call(onEmailSignInStart)])
}