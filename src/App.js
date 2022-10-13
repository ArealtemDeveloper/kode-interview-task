import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Header } from "./components/Header";
import { UsersContainer } from "./components/UsersContainer";
import { fetchUsers } from "./store/userSlice";


function App() {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div className="App">
            <Header/>
            <UsersContainer/>
        </div>
    )
}

export default App;
