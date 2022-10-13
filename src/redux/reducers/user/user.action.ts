import { createAction } from '../../../utils/createAction/createAction'

import { withMatch, Action, ActionWithPayload, UserData, AdditionalInformation, Credentials } from '../../../types'

import { USER_ACTION_TYPES } from './user.types'

export type SetCurrentUser = ActionWithPayload<USER_ACTION_TYPES.SET_CURRENT_USER, UserData>

export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>

export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>

export type EmailSignInStart = ActionWithPayload<USER_ACTION_TYPES.EMAIL_SIGN_IN_START, Credentials>

export type SignInSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_SUCCESS, UserData>

export type SignInError = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_ERROR, string>

export type SignUpStart = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_START, { email: string, password: string, displayName: string }>

export type SignUpSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user: UserData, additionalDetails: AdditionalInformation }>

export type SignUpError =  ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_ERROR, string>

export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>

export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>

export type SignOutError = ActionWithPayload<USER_ACTION_TYPES.SIGN_OUT_ERROR, string>

export const setCurrentUser = withMatch((data: UserData): SetCurrentUser => createAction(USER_ACTION_TYPES.SET_CURRENT_USER, data))

export const chechUserSession = withMatch((): CheckUserSession => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION))

export const googleSignInStart = withMatch((): GoogleSignInStart => createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START))

export const emailSignInStart = withMatch((credentials: Credentials): EmailSignInStart => createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, credentials))

export const signInSuccess = withMatch((user: UserData): SignInSuccess => createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user))

export const signInError = withMatch((error: string): SignInError => createAction(USER_ACTION_TYPES.SIGN_IN_ERROR, error))

export const signUpStart = withMatch((email: string, password: string, displayName: string): SignUpStart => createAction(USER_ACTION_TYPES.SIGN_UP_START, { email, password, displayName }))

export const signUpSuccess = withMatch((user: UserData, additionalDetails: AdditionalInformation): SignUpSuccess => createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails }))

export const signUpError = withMatch((error: string): SignUpError => createAction(USER_ACTION_TYPES.SIGN_UP_ERROR, error ))

export const signOutStart = withMatch((): SignOutStart => createAction(USER_ACTION_TYPES.SIGN_OUT_START))

export const signOutSuccess = withMatch((): SignOutSuccess => createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS))

export const signOutError = withMatch((error: string): SignOutError => createAction(USER_ACTION_TYPES.SIGN_OUT_ERROR, error))