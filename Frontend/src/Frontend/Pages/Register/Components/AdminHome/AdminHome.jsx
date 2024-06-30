
import React, { useEffect, useState } from "react";
import { FaSearch } from 'react-icons/fa'; 
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import styles from '../AdminHome/AdminHome.module.css';
import { useAddTodoMutation, useUpdateTodoMutation } from '../../../../../redux/slices/todoApiSlice';

const AdminHome = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeUsers, setActiveUsers] = useState([]);
  const [basketItems, setBasketItems] = useState([]);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const navigate = useNavigate();
  const { userInfo } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [photo, setPhoto] = useState(null);
  const [categoryName, setCategoryName] = useState(''); // State for category name
  const [addTodo, { isError: addError }] = useAddTodoMutation();
  const [updateTodo, { isError: updateError, isLoading: isUpdating }] = useUpdateTodoMutation();

  useEffect(() => {
    fetchAllUsers();
    fetchActiveUsers();
    fetchBasketItems();
  }, [searchQuery]);

  const fetchAllUsers = () => {
    fetch(`http://localhost:8000/api/users/?search=${encodeURIComponent(searchQuery)}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.allUsers);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        toast.error('Error fetching users');
      });
  };

  const fetchActiveUsers = () => {
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      const userInfo = JSON.parse(storedUserInfo);
      setActiveUsers([userInfo]);
    }
  };

  const fetchBasketItems = () => {
    const storedBasketList = localStorage.getItem('basketList');
    if (storedBasketList) {
      const basketList = JSON.parse(storedBasketList).map(item => ({
        ...item,
        userEmail: item.email
      }));
      setBasketItems(basketList);
    }
  };

  const logOut = () => {
    setIsLoggingOut(true);
    window.localStorage.clear();
    setTimeout(() => {
      navigate('/');
      window.location.reload();
    }, 3000);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('price', price);
      if (photo) {
        formData.append('photo', photo);
      }

      if (id) {
        const updatedTodo = await updateTodo({ id, formData }).unwrap();
        dispatch({ type: 'todo/updateTodo', payload: updatedTodo });
      } else {
        const newTodo = await addTodo(formData).unwrap();
        dispatch({ type: 'todo/addTodo', payload: newTodo });
      }
      
      navigate('/dashboard');
    } catch (err) {
      console.error('Failed to add/update the todo:', err);
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  const handleCategorySubmit = async (e) => {
    e.preventDefault();
    try {
      // Handle category submission logic here (e.g., API call)
      toast.success(`Category ${categoryName} added successfully.`);
      setCategoryName(''); // Clear input after submission
    } catch (err) {
      console.error('Failed to add category:', err);
      toast.error(`Error adding category: ${err.message}`);
    }
  };

  if (isLoggingOut) {
    return (
      <div className={styles.flexCenter}>
        <p className={styles.loggingOut}>Logging Out...</p>
      </div>
    );
  }

  return (
    <div className={styles.adminHome}>
      <div className={`${styles.adminPanel} ${userInfo.userType === 'Admin' ? styles.block : styles.hidden}`}>
        <div className={styles.header}>
          <h3 className={styles.welcome}>Welcome Admin</h3>
          <button
            onClick={logOut}
            className={styles.logoutButton}
          >
            Log Out
          </button>
        </div>
        <div className={styles.searchBox}>
          <FaSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search..."
            onChange={handleSearch}
            className={styles.searchInput}
          />
          <span className={styles.recordCount}>
            {searchQuery.length > 0
              ? `Records Found ${data.length}`
              : `Total Records ${data.length}`}
          </span>
        </div>
        <div className={styles.tableContainer}>
          <table className={styles.userTable}>
            <thead>
              <tr className={styles.tableHeader}>
                <th className={styles.tableCell}>Name</th>
                <th className={styles.tableCell}>Email</th>
                <th className={styles.tableCell}>User Type</th>
                <th className={styles.tableCell}>Actions</th>
              </tr>
            </thead>
            <tbody className={styles.tableBody}>
              {data
                .filter((user) =>
                  user.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((user) => (
                  <tr key={user._id} className={styles.tableRow}>
                    <td className={styles.tableCell}>{user.name}</td>
                    <td className={styles.tableCell}>{user.email}</td>
                    <td className={styles.tableCell}>{user.userType}</td>
                    <td className={styles.tableCell}>
                      <div className={styles.actionButtons}>
                        <button
                          className={`${styles.statusButton} ${activeUsers.find(activeUser => activeUser._id === user._id) ? styles.active : styles.inactive}`}
                        >
                          {activeUsers.find(activeUser => activeUser._id === user._id) ? 'Active' : 'Inactive'}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className={styles.tableContainer}>
          <h3 className={styles.basketTitle}>Basket Items</h3>
          <table className={styles.basketTable}>
            <thead>
              <tr className={styles.tableHeader}>
                <th className={styles.tableCell}>User Email</th>
                <th className={styles.tableCell}>Product ID</th>
                <th className={styles.tableCell}>Title</th>
                <th className={styles.tableCell}>Price</th>
                <th className={styles.tableCell}>Date Added</th>
              </tr>
            </thead>
            <tbody className={styles.tableBody}>
              {basketItems.map((item) => (
                <tr key={item.id} className={styles.tableRow}>
                  <td className={styles.tableCell}>{item.userEmail}</td>
                  <td className={styles.tableCell}>{item.id}</td>
                  <td className={styles.tableCell}>{item.title}</td>
                  <td className={styles.tableCell}>{item.price}</td>
                  <td className={styles.tableCell}>{new Date(item.dateAdded).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className={`${userInfo.userType === 'Admin' ? styles.hidden : styles.unauthorized}`}>
        <p className={styles.unauthorizedText}>You are not authorized to view this page.</p>
      </div>
      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>{id ? 'Update Product' : 'Add New Product'}</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="title" className={styles.formLabel}>Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={styles.formInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="price" className={styles.formLabel}>Price:</label>
            <input
              type="text"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className={styles.formInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="description" className={styles.formLabel}>Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={styles.formTextarea}
            ></textarea>
          </div>
          <form onSubmit={handleCategorySubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="categoryName" className={styles.formLabel}>Category Name:</label>
            <input
              type="text"
              id="categoryName"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className={styles.formInput}
            />
          </div>
        </form>
          <div className={styles.formGroup}>
            <label htmlFor="photo" className={styles.formLabel}>Photo:</label>
            <input
              type="file"
              id="photo"
              accept="image/*"
              onChange={handlePhotoChange}
              className={styles.formInput}
            />
          </div>
          <div className={styles.formButtons}>
            <button
              type="submit"
              className={styles.submitButton}
            >
              {id ? 'Update TODO' : 'Add Product'}
            </button>
            <button
              type="button"
              onClick={() => navigate('/dashboard')}
              className={styles.cancelButton}
            >
              Cancel
            </button>
          </div>
        </form>
        {addError && <p className={styles.errorMessage}>Error adding todo: {addError.message}</p>}
        {updateError && <p className={styles.errorMessage}>Error updating todo: {updateError.message}</p>}
        {id && (
          <button
            type="button"
            className={`${styles.updateButton} ${isUpdating ? styles.disabled : ''}`}
            onClick={handleSubmit}
            disabled={isUpdating}
          >
            {isUpdating ? 'Updating...' : 'Update'}
          </button>
        )}

        {/* Category Form */}
        
      </div>
    </div>
  );
}

export default AdminHome;
