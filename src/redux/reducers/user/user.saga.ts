import { takeLatest, all, call, put } from 'typed-redux-saga/macro'
import { User } from 'firebase/auth'

import { USER_ACTION_TYPES } from './user.types'

import { createDocumentUserFromAuth, getCurrentUser, signInAuthWithEmailAndPassword, signInWithGooglePopup, signOutUser, userAuthCreatedWithEmailAndPassword } from '../../../utils/firebase/firebase'

import { signInError, signInSuccess, signOutError, signOutSuccess, signUpError, signUpSuccess, EmailSignInStart, SignUpStart, SignUpSuccess } from './user.action'

import { AdditionalInformation } from '../../../types'

export function* getSnapshotFromUserAuth(userAuth: User, additionalOptions?: AdditionalInformation) {
    try {
        const userSnapshot = yield* call(createDocumentUserFromAuth, userAuth, additionalOptions)
        if (userSnapshot) {
            yield* put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
        }
    } catch (error) {
        yield* put(signInError(error as Error))
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield* call(signInWithGooglePopup)
        yield* call(getSnapshotFromUserAuth, user)
    } catch(error) {
        yield* put(signInError(error as Error))
    }
}

export function* signInWithEmail({payload}: EmailSignInStart) {
    try {
        const userCredentials = yield* call(signInAuthWithEmailAndPassword, payload.email, payload.password)
        if (userCredentials) {
            const { user } = userCredentials
            yield* call(getSnapshotFromUserAuth, user)
        }
    } catch (error) {
        yield* put(signInError(error as Error))
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield* call(getCurrentUser)
        if (!userAuth) return;
        yield* call(getSnapshotFromUserAuth, userAuth)
    } catch(error) {
        yield* put(signInError(error as Error))
    }
}

export function* signUp({ payload: { email, password, displayName } }: SignUpStart) {
    try {
        const userCredentials = yield* call(userAuthCreatedWithEmailAndPassword, email, password)
        
        if (userCredentials) {
            const { user } = userCredentials
            yield* put(signUpSuccess(user, { displayName }))
        }
    } catch(error) {
        yield* put(signUpError(error as Error))
    }
}

export function* signOut() {
    try {
        yield* call(signOutUser)
        yield* put(signOutSuccess())
    } catch (error) {
        yield* put(signOutError(error as Error))
    }
}

export function* signInAfterSignUp({ payload: {user, additionalDetails} }: SignUpSuccess) {
    yield* call(getSnapshotFromUserAuth, user, additionalDetails)
}

export function* onEmailSignInStart() {
    yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onGoogleSignInStart() {
    yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onCheckUserSession() {
    yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignUpStart() {
    yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp)
}

export function* onSignUpSuccess() {
    yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onSignOutStart() {
    yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut)
}

export function* userSagas() {
    yield* all([
        call(onCheckUserSession), 
        call(onGoogleSignInStart), 
        call(onEmailSignInStart),
        call(onSignUpSuccess),
        call(onSignUpStart),
        call(onSignOutStart),
    ])
}