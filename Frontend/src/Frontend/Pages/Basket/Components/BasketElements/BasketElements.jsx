import React, { useEffect, useState } from "react";
import styles from './BasketElements.module.scss';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BasketElements = () => {
  const [basketItems, setBasketItems] = useState([]);
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    const storedBasketList = localStorage.getItem('basketList');
    if (storedBasketList) {
      const parsedBasketList = JSON.parse(storedBasketList);
      setBasketItems(parsedBasketList);
      console.log("Initial basket items:", parsedBasketList);
    }
  }, []);

  const handleIncreaseQuantity = (itemId) => {
    const updatedBasketItems = basketItems.map(item => {
      if (item.id === itemId) {
        const updatedItem = {
          ...item,
          count: item.count + 1
        };
        console.log("Increasing quantity", updatedItem);
        return updatedItem;
      }
      return item;
    });
    localStorage.setItem('basketList', JSON.stringify(updatedBasketItems));
    setBasketItems(updatedBasketItems);
  };

  const handleDecreaseQuantity = (itemId) => {
    const updatedBasketItems = basketItems.map(item => {
      if (item.id === itemId && item.count > 1) {
        return {
          ...item,
          count: item.count - 1
        };
      }
      return item;
    }).filter(item => item.count > 0);
    localStorage.setItem('basketList', JSON.stringify(updatedBasketItems));
    setBasketItems(updatedBasketItems);
  };

  const handleRemoveItem = (itemId) => {
    const updatedBasketItems = basketItems.filter(item => item.id !== itemId);
    localStorage.setItem('basketList', JSON.stringify(updatedBasketItems));
    setBasketItems(updatedBasketItems);
    toast.success('Item removed from basket!');
  };

  const handlePayment = (itemPrice) => {
    navigate('/basket/payment', { state: { itemPrice } });
  };

  const filteredBasketItems = userInfo ? basketItems.filter(item => item._id === userInfo._id) : [];

  const handleBasketView = () => {
    if (!userInfo) {
      toast.warn('You must register to view your basket.');
      setTimeout(() => {
        navigate('/register', { state: { from: window.location.pathname } });
      }, 1000);
    }
  };

  useEffect(() => {
    handleBasketView();
  }, [userInfo]);

  return (
    <div className={styles.basketList}>
      <h2>Your Basket</h2>
      <ul>
        {filteredBasketItems.map((item, index) => (
          <li key={index}>
            <img src={item.thumbnail} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>Price: {item.price}$</p>
              <p>Total: {item.count}</p>
              <div className={styles.buttonContainer}>
                <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                {item.count === 1 ? (
                  <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                ) : (
                  <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                )}
                <button onClick={() => handlePayment(item.price)}>Pay</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <ToastContainer />
    </div>
  );
};

export default BasketElements;
