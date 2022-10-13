import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async function(_, {rejectWithValue}) {
        try {
            const { data } = await axios.get
            // eslint-disable-next-line max-len
            ('https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all');
            const { items } = data
            return items;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
}

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        usersContainer: [],
        status: null,
        error: null,
    },
    reducers: {
        filterUsers(state, action) {
            state.users = state.usersContainer.filter(user => user.id.includes(action.payload));
            state.users = state.usersContainer
        },
        searchUsersByName(state, action) {
            if(action.payload !== '') {
                state.users = state.users.filter
                (user => user.firstName.includes(action.payload))
                
            }else{
                state.users = state.usersContainer
            }
        },
    },
    extraReducers: 
    {
        [fetchUsers.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.users = action.payload;
            state.usersContainer = action.payload;
        },
        [fetchUsers.rejected]: setError,
    },
});

export const {filterUsers,searchUsersByName } = userSlice.actions;

export default userSlice.reducer;