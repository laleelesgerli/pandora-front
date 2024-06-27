import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './DetailContent.module.scss'; // Ensure this path is correct
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductCard from '../../../Home/Components/TrendingNow/ProductCard';
import { useSelector } from 'react-redux';
import BasketElements from '../../../Basket/Components/BasketElements/BasketElements';

const DetailContent = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { note_id } = useParams();
    const { userInfo } = useSelector(state => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                console.log(`Fetching product with ID: ${note_id}`);
                const response = await axios.get(`http://localhost:8000/api/notes/${note_id}`);
                console.log('API response:', response.data);
                const data = response.data;
                if (data && data.getById) {
                    setProduct(data.getById);
                } else {
                    setError('Product not found.');
                }
            } catch (error) {
                console.error('Error fetching product:', error);
                setError('An error occurred while fetching the product details.');
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [note_id]);

     const handleAddToBag = () => {
        if (!userInfo) {
            toast.warn('You must register to add to cart.');
            setTimeout(() => {
                navigate('/register', { state: { from: window.location.pathname } });
            }, 3000); // 3 saniye sonra yönlendirme
            return;
        }

        const storedUserInfo = localStorage.getItem('userInfo');
        let basketList = [];

        if (storedUserInfo) {
            const userInfoObject = JSON.parse(storedUserInfo);

            const productToAdd = {
                _id: userInfo._id,
                id: note_id,
                title: product.title,
                price: product.price,
                thumbnail: product.thumbnail
            };

            if (localStorage.getItem('basketList')) {
                basketList = JSON.parse(localStorage.getItem('basketList'));
                const existingProduct = basketList.find(item => item.id === note_id);
                if (!existingProduct) {
                    basketList.push(productToAdd);
                    toast.success(`${product.title} added to Bag!`);
                } else {
                    toast.info(`${product.title} is already in Bag.`);
                }
            } else {
                basketList.push(productToAdd);
                toast.success(`${product.title} added to Bag!`);
            }

            localStorage.setItem('basketList', JSON.stringify(basketList));
        } else {
            console.log('You need to Login or Register');
        }
    };

    const handleAddToWishlist = () => {
        if (!userInfo) {
            toast.warn('You must register to add to wishlist.');
            setTimeout(() => {
                navigate('/register', { state: { from: window.location.pathname } });
            }, 3000); // 3 saniye sonra yönlendirme
            return;
        }
    
        const storedUserInfo = localStorage.getItem('userInfo');
        let wishlist = [];
    
        if (storedUserInfo) {
            const userInfoObject = JSON.parse(storedUserInfo);
    
            const productToAdd = {
                _id: userInfo._id,
                id: note_id,
                title: product.title,
                price: product.price,
                thumbnail: product.thumbnail
            };
    
            if (localStorage.getItem('wishlistList')) {
                wishlist = JSON.parse(localStorage.getItem('wishlistList'));
                const existingProduct = wishlist.find(item => item.id === note_id);
                if (!existingProduct) {
                    wishlist.push(productToAdd);
                    toast.success(`${product.title} added to Wishlist!`);
                } else {
                    toast.info(`${product.title} is already in Wishlist.`);
                }
            } else {
                wishlist.push(productToAdd);
                toast.success(`${product.title} added to Wishlist!`);
            }
    
            localStorage.setItem('wishlistList', JSON.stringify(wishlist));
        } else {
            console.log('You need to Login or Register');
        }
    };

    if (loading) {
        return <div className={styles.loading}>Loading...</div>;
    }

    if (error) {
        return <div className={styles.error}>{error}</div>;
    }

    if (!product) {
        return <div className={styles.error}>Product not found.</div>;
    }

    return (
        <div className={styles.detailContent}>
            <div className={styles.productDetails}>
                <img src={product.thumbnail} alt={product.title} className={styles.image} />
                <div className={styles.info}>
                    <h1 className={styles.title}>{product.title}</h1>
                    <p className={styles.price}>Price: {product.price}$</p>
                    <p className={styles.description}>{product.description}</p>
                    <p className={styles.category}>Category: {product.category}</p>
                    <div className={styles.ratings}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStarHalfStroke />
                    </div>
                    <div className={styles.btns}>
                        <button onClick={handleAddToBag}>Add to Bag</button>
                        <button onClick={handleAddToWishlist}>Add to Wishlist</button>
                    </div>

                </div>

            </div>
            <div className={styles.otherProducts}>
                <h1>VIEW OUR OTHER PRODUCTS</h1>
                <div className={styles.cards}>
                    <ProductCard/>
                </div>
            </div>
            {/* {userInfo && <BasketElements userId={userInfo._id} />}
            <ToastContainer /> */}
        </div>
    );
};

export default DetailContent;
