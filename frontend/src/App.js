
import {useEffect, useState} from "react";
import {getProducts} from "./service/ApiService";
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import ProductList from "./components/ProductList";
import AppHeader from "./components/AppHeader";


function App() {
  const [products, setProducts] = useState([]);


  useEffect(() => {
        getProducts()
            .then(setProducts)
            .catch((error) => console.error(error))
      },
      [])

  return (
      <Router>
          <AppHeader />
          <Switch>
              <Route exact path="/">
              </Route>
              <Route path="/products">
                  <ProductList products={products}/>
              </Route>
          </Switch>
      </Router>
  )
}

export default App;
