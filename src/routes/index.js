import Home from '../pages/Home';
import { Switch, Route } from "react-router-dom"

const AppRoutes = () => {
    return(
    <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
    </Switch>
    )
}

export default AppRoutes

