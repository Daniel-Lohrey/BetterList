import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import AppHeader from "./components/AppHeader";
import MainPage from "./pages/MainPage";




function App() {


  return (
      <Router>
          <AppHeader />
          <Switch>
              <Route exact path="/">
                  <MainPage />
              </Route>
              <Route path="/productDetails">
              </Route>
          </Switch>
      </Router>

  )

}

export default App;
