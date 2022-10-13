import { createSelector } from "reselect";

import { UserState } from "../../../types";

const selectUserReducer = (state): UserState => state.user;

export const selectCurrentUser = createSelector(
    [selectUserReducer], (userSlice) => userSlice.currentUser
)