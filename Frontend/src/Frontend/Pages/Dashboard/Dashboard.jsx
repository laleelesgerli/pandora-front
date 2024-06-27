import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './Dashboard.module.css';
import { removeTodo, setTodos } from '../../../redux/slices/todoSlice';
import { useGetTodosQuery, useDeleteTodoMutation } from '../../../redux/slices/todoApiSlice';

const Dashboard = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, error, isLoading } = useGetTodosQuery();
  const [deleteTodo] = useDeleteTodoMutation();

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }
    if (data) {
      setTimeout(() => {
        dispatch(setTodos(data));
      }, 2000);
    }
  }, [navigate, userInfo, data, dispatch]);

  const handleDelete = async (id) => {
    try {
      await deleteTodo(id).unwrap();
      setTimeout(() => {
        dispatch(removeTodo(id))
      }, 1500);

    } catch (err) {
      console.error('Failed to delete the todo:', err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button onClick={() => navigate('/profile')} className={styles.profileButton}>Go to Profile</button>
        <button onClick={() => navigate('/add-new-todo')} className={styles.addButton}>Add new Product</button>
      </div>
      <div className={styles.todoList}>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error loading todos</p>}
        {data && data.map(item => (
          <div key={item._id} className={styles.todoItem}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <button onClick={() => handleDelete(item._id)} className={styles.deleteButton}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;