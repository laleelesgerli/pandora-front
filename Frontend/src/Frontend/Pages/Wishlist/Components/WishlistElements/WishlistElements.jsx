import React, { useEffect, useState } from "react";
import styles from './WishlistElements.module.scss';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WishlistElements = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    const storedWishlist = localStorage.getItem('wishlistList');
    if (storedWishlist) {
      const parsedWishlist = JSON.parse(storedWishlist);
      setWishlistItems(parsedWishlist);
    }
  }, []);

  const handleRemoveItem = (itemId) => {
    const updatedWishlistItems = wishlistItems.filter(item => item.id !== itemId);
    localStorage.setItem('wishlistList', JSON.stringify(updatedWishlistItems));
    setWishlistItems(updatedWishlistItems);
    toast.success('Item removed from wishlist!');
  };

  const handleAddToBasket = (item) => {
    const basketList = JSON.parse(localStorage.getItem('basketList')) || [];
    basketList.push({ ...item, count: 1 });
    localStorage.setItem('basketList', JSON.stringify(basketList));
    toast.success('Item added to basket!');
  };

  const filteredWishlistItems = userInfo ? wishlistItems.filter(item => item._id === userInfo._id) : [];

  const handleWishlistView = () => {
    if (!userInfo) {
      toast.warn('You must register to view your wishlist.');
      setTimeout(() => {
        navigate('/register', { state: { from: window.location.pathname } });
      }, 1000);
    }
  };

  useEffect(() => {
    handleWishlistView();
  }, [userInfo]);

  return (
    <div className={styles.wishlistList}>
      <h2>Your Wishlist</h2>
      <ul>
        {filteredWishlistItems.map((item, index) => (
          <li key={index}>
            <img src={item.thumbnail} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>Price: {item.price}$</p>
              <div className={styles.buttonContainer}>
                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                <button onClick={() => handleAddToBasket(item)}>Add to Basket</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <ToastContainer />
    </div>
  );
};

export default WishlistElements;
