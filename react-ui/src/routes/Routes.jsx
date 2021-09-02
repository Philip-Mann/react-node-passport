import { Route } from "react-router-dom";
import Greeting from "../components/home/Greeting";
import Login from "../components/login/Login";
import Profile from "../components/profile/Profile";



const Routes = () => {

    return (
        <>
            <Route
                exact
                path="/"
                render={() => <Greeting />}
            />
            <Route
                exact
                path="/profile"
                render={() => <Profile />}
            />
            <Route
                exact
                path="/login"
                render={() => <Login />}
            />
        </>
    )
}

export default Routes;