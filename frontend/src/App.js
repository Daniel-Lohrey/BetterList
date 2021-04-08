import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import AppHeader from "./components/AppHeader";
import MainPage from "./pages/MainPage";
import ScrollToTop from "./components/ScrollToTop";
import DetailsPage from "./pages/DetailsPage";
import styled from 'styled-components/macro'


function App() {


  return (
      <PageLayout>
          <Router>
              <AppHeader />
              <ScrollToTop />
              <Switch>
                  <Route exact path="/">
                      <MainPage />
                  </Route>
                  <Route path ="/products/details/:id"  >
                      <DetailsPage />
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