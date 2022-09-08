import { USER_ACTION_TYPES } from './user.types'

export const setCurrentUser = (data) => ({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: data })

export const chechUserSession = () => ({ type: USER_ACTION_TYPES.CHECK_USER_SESSION })

export const googleSignInStart = () => ({ type: USER_ACTION_TYPES.GOOGLE_SIGN_IN_START })

export const emailSignInStart = (credentials) => ({ type: USER_ACTION_TYPES.EMAIL_SIGN_IN_START, payload: credentials })

export const signInSuccess = (user) => ({ type: USER_ACTION_TYPES.SIGN_IN_SUCCESS, payload: user })

export const signInError = (error) => ({ type: USER_ACTION_TYPES.SIGN_IN_ERROR, paylaod: error })

export const signUpStart = (email, password, displayName) => ({ type: USER_ACTION_TYPES.SIGN_UP_START, payload: { email, password, displayName } })

export const signUpSuccess = (user, additionalDetails) => ({ type: USER_ACTION_TYPES.SIGN_UP_SUCCESS, payload: { user, additionalDetails } })

export const signUpError = (error) => ({ type: USER_ACTION_TYPES.SIGN_UP_ERROR, payload: error })

export const signOutStart = () => ({ type: USER_ACTION_TYPES.SIGN_OUT_START })

export const signOutSuccess = () => ({ type: USER_ACTION_TYPES.SIGN_OUT_SUCCESS })

export const signOutError = (error) => ({ type: USER_ACTION_TYPES.SIGN_OUT_ERROR, payload: error })