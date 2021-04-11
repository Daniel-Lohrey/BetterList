import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import MainPage from "./pages/MainPage";
import styled from 'styled-components/macro'
import CustomerPage from "./pages/CustomerPage";
import WelcomePage from "./pages/WelcomePage";
import DetailsPage from "./pages/DetailsPage";
import Image from "./assets/Lebensmittel.jpg"


function App() {


    return (
        <PageLayout>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <WelcomePage/>
                    </Route>
                    <Route exact path="/products">
                        <MainPage/>
                    </Route>
                    <Route exact path="/products/details/:id">
                        <DetailsPage />
                    </Route>
                    <Route exact path="/products/customer">
                        <CustomerPage/>
                    </Route>
                </Switch>
            </Router>
        </PageLayout>
    )
}

export default App;

const PageLayout = styled.div`
  height: 120vh;
  background: url(${Image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`