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
        status: null,
        error: null,
    },
    reducers: {
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
        },
        [fetchUsers.rejected]: setError,
    },
});

export const {} = userSlice.actions;

export default userSlice.reducer;