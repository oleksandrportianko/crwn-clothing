import { createSelector } from "reselect";

import { RootState } from "../../store";
import { UserState } from "../../../types";

const selectUserReducer = (state: RootState): UserState => state.user;

export const selectCurrentUser = createSelector(
    [selectUserReducer], (userSlice) => userSlice.currentUser
)