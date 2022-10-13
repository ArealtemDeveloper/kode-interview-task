import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { MainPage } from "./pages/MainPage";
import { UserPage } from "./pages/UserPage";
import { fetchUsers } from "./store/userSlice";


function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/:id" element={<UserPage/>} />
            </Routes>
        </div>
    )
}

export default App;
