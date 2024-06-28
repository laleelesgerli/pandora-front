import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAddTodoMutation } from '../../../redux/slices/todoApiSlice';
import styles from './AddToDo.module.scss';

const AddToDo = () => {
  const [title, setTitle] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [addTodo] = useAddTodoMutation();
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail]= useState('');
  const [category, setCategory] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newTodo = await addTodo({
        title,
        description,
        price,
        category,
        thumbnail,
      }).unwrap();
      setTimeout(() => {
        dispatch({ type: 'todo/addTodo', payload: newTodo });
      }, 1000);
      navigate('/dashboard');
    } catch (err) {
      console.error('Failed to add the todo:', err);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="thumbnail">Thumbnail link:</label>
          <input
            type="text"
            id="thumbnail"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.buttons}>
          <button type="submit" className={styles.submitButton}>Add Product</button>
          <button type="button" onClick={() => navigate('/dashboard')} className={styles.cancelButton}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddToDo;