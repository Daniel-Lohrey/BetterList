import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import AppHeader from "./components/AppHeader";
import SearchProducts from "./components/SearchProducts";
import {useEffect, useState} from "react";
import {getUserProductsList} from "./service/ApiService";
import ProductList from "./components/ProductList";




function App() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getUserProductsList()
            .then(setProducts)
            .catch((error) => console.error(error))
    }, [])



  return (
      <Router>
          <AppHeader />
          <Switch>
              <Route exact path="/">
                  <SearchProducts setProducts={setProducts} products={products}/>
                  <ProductList products={products}/>
              </Route>
              <Route path="/productDetails">
              </Route>
          </Switch>
      </Router>

  )

}

export default App;
