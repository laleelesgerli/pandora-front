import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './ProductCard.module.scss';
import { useNavigate } from 'react-router-dom';

const ProductCard = () => {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(null);

  const navigate = useNavigate()

    

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/notes');
        console.log('API response:', response.data);
        setNotes(response.data.allNotes.slice(0, 8)); 
      } catch (error) {
        setError(error.message);
      }
    };

    fetchNotes();
  }, []);

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  

  return (
    <div className={styles.cards}>
      {notes.length > 0 ? (
        <ul className={styles.products}>
          {notes.map((note) => (
            <li key={note._id} className={styles.card}>
              {note.thumbnail && (
                <img
                  src={note.thumbnail}
                  alt="Thumbnail"
                  style={{ maxWidth: '100px', maxHeight: '100px' }}
                />
              )}
              <h3>{note.title}</h3>
              <p>{note.price}$</p>
              <div className={styles.button}>
              <button onClick={() => navigate(`/product/${note._id}`)}>Details</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.loading}>Loading...</div>
      )}
    </div>
  );
};

export default ProductCard;

