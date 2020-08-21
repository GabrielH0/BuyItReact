import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Products from './components/products/Products'
import Header from './components/header/Header'
import ProductDetails from './components/products/ProductDetails'
import DashboardSales from './components/sales/DashboardSales'
import signIn from './components/login/signIn'
import VerticalMenu from './components/navegation/VerticalMenu'
import Categories from './components/navegation/categories/Categories'

class App extends React.Component{
  
  
  render(){
  return (
        <BrowserRouter>
        <Header/>
        <VerticalMenu/>
          <Switch>
            <Route exact path="/signin" component={signIn}/>
            <Route exact path="/" component={Products}/>
            <Route path="/categories" component={Categories}/>
            <Route exact path="/product/details/:id" component={ProductDetails}/>
            <Route exact path="/vendas" component={DashboardSales}/>
          </Switch>
        </BrowserRouter>
   );
  }
}

export default App;
