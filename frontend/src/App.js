import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import AppHeader from "./components/AppHeader";
import MainPage from "./pages/MainPage";
import ScrollToTop from "./components/ScrollToTop";
import DetailsPage from "./pages/DetailsPage";
import styled from 'styled-components/macro'
import CustomerList from "./pages/CustomerList";
import WelcomePage from "./pages/WelcomePage";


function App() {


    return (
        <PageLayout>
            <Router>
                <ScrollToTop/>
                <Switch>
                    <Route exact path="/">
                        <WelcomePage/>
                    </Route>
                    <Route exact path="/products">
                        <MainPage/>
                    </Route>
                    <Route path="/products/details/:id">
                        <AppHeader/>
                        <DetailsPage/>
                    </Route>
                    <Route path="/products/customer">
                        <CustomerList/>
                    </Route>
                </Switch>
            </Router>
        </PageLayout>
    )
}

export default App;


const PageLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  background: #FFFAF0;
  height: auto;
`