import classes from './Cart.module.css';
import Modal from '../UI/Modal';
const Cart=props=>{
  return (
    <div>
      const cartItems ={" "}
      <ul className={classes["cart-items"]}>
        {[{ id: "c1", name: "Biryani", amount: 2, price: 12.0 }].map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
      ;
      <Modal onClose={props.onClose}>
        <cartItems />

        <div className={classes.total}>
          <span>Total amount</span>
          <span>38.67</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
          <button className={classes.button}>Order</button>
        </div>
      </Modal>
    </div>
  );
}

export default Cart;

