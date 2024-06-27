import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';
import styles from './Payment.module.scss'; 
const Payment = () => {
    const location = useLocation();
    const [itemPrice, setItemPrice] = useState(location.state && location.state.itemPrice);
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    const handleCardNumberChange = (e) => {
        let formattedCardNumber = e.target.value.replace(/\s/g, '');
        if (formattedCardNumber.length > 0) {
            formattedCardNumber = formattedCardNumber.match(new RegExp('.{1,4}', 'g')).join(' ');
        }
        setCardNumber(formattedCardNumber);
    };

    const handleExpiryDateChange = (e) => {
        let value = e.target.value;
        if (value.length === 2 && expiryDate.length === 1 && !value.includes('/')) {
            value += '/';
        }
        setExpiryDate(value);
    };

    const handleCvvChange = (e) => {
        setCvv(e.target.value);
    };

    const handleShowCvv = () => {
        toast.info(`CVV: ${cvv}`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!itemPrice || parseFloat(itemPrice) <= 0) {
            toast.error('The product price is invalid.');
            return;
        }

        if (cardNumber.replace(/\s/g, '').length !== 16) {
            toast.error('Please enter a valid card number.');
            return;
        }

        if (!expiryDate.match(/^\d{2}\/\d{2}$/)) {
            toast.error('Please enter a valid expiration date (in MM/YY format).');
            return;
        }

        const [month, year] = expiryDate.split('/');
        const today = new Date();
        const expiry = new Date(`20${year}`, month - 1);
        if (expiry < today) {
            toast.error('Your card has expired.');
            return;
        }

        if (cvv.length !== 3) {
            toast.error('CVV code must consist of 3 digits.');
            return;
        }

        simulatePayment();
    };

    const simulatePayment = () => {
        // Simulate payment success
        setTimeout(() => {
            toast.success('The payment was made successfully.');
            setCardNumber('');
            setExpiryDate('');
            setCvv('');
            // Update itemPrice to 0 after successful payment
            setItemPrice(0);
        }, 2000);
    };

    return (
        <div className={styles.paymentContainer}>
            <div className={styles.paymentForm}>
                <h2>Payment Form</h2>
                <p>Price: {itemPrice}$</p>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label>Card number</label>
                        <input
                            type="text"
                            value={cardNumber}
                            onChange={handleCardNumberChange}
                            placeholder="XXXX XXXX XXXX XXXX"
                            maxLength="19"
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Expiration date</label>
                        <input
                            type="text"
                            value={expiryDate}
                            onChange={handleExpiryDateChange}
                            placeholder="MM/YY"
                            maxLength="5"
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label>CVV</label>
                        <div className={styles.cvvInput}>
                            <input
                                type="password"
                                value={cvv}
                                onChange={handleCvvChange}
                                placeholder="***"
                                maxLength="3"
                                required
                            />
                            <button type="button" onClick={handleShowCvv}>
                                Show
                            </button>
                        </div>
                    </div>
                    <button type="submit" className={styles.submitButton}>
                        Pay
                    </button>
                </form>
            </div>
            <ToastContainer position="bottom-center" />
        </div>
    );
};

export default Payment;
