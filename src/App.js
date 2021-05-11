import './App.css';
import {Switch , Route, } from 'react-router-dom'
import Header from './Redux/AllComponent/Header';
import Product from './Redux/AllComponent/Product';
import ProductComponent from './Redux/AllComponent/ProductComponent';
import ProductDetails from './Redux/AllComponent/ProductDetails';
import ProductListing from './Redux/AllComponent/ProductListing';
import ErrorPg from './Redux/AllComponent/ErrorPg'

function App() {
  return (
    <div className="App">
      <Header/>
      
      <Switch>
        <Route exact path="/" from component={Header}/>
        <Route exact path="/productListing" from component={ProductListing}/>
        <Route exact path="/product/:productId" from component={ProductDetails}/>
        <Route exact path="/productComponent" from component={ProductComponent}/>
        <Route exact path='*' component={ErrorPg} />
     </Switch>
     
      
    </div>
  );
}

export default App;
