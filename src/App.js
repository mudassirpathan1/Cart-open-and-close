
import { Fragment, useState} from 'react';
import Cart from './component/Cart/Cart';
import Header from "./component/Layout/Header";
function App() {

  const [cartIsShown,setCartIsShown]=useState(false);
  const showCartHandler= () =>{
    setCartIsShown(true);
  };

  
  const hideCartHandler= () =>{
    setCartIsShown(false);
  };

  return (
   < Fragment>
  {cartIsShown && <Cart  onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} > </Header>

    </Fragment>
  );
}

export default App;