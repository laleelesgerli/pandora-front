import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NecklacesContent.module.scss';
import axios from 'axios';

const NecklacesContent = () => {
    const [charms, setCharms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sortType, setSortType] = useState('');
    const [visibleItems, setVisibleItems] = useState(10); // başlangıçta 10 ürün göster
    const [animationTrigger, setAnimationTrigger] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/notes');
                const filteredNotes = res.data.allNotes.filter(note => note.category === 'Necklaces');
                setCharms(filteredNotes);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchNotes();
    }, []);

    useEffect(() => {
        if (sortType) {
            setCharms(prevData => [...prevData].sort((a, b) => {
                if (sortType === 'asc') {
                    return a.title.localeCompare(b.title);
                } else if (sortType === 'desc') {
                    return b.title.localeCompare(a.title);
                } else if (sortType === 'priceAsc') {
                    return a.price - b.price;
                } else if (sortType === 'priceDesc') {
                    return b.price - a.price;
                }
                return 0;
            }));
        }
    }, [sortType]);

    const handleSort = (type) => {
        setSortType(type);
    };

    const loadMore = () => {
        setVisibleItems(prevVisibleItems => prevVisibleItems + 10);
        setAnimationTrigger(true);
        setTimeout(() => setAnimationTrigger(false), 500);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filtered charms based on search term
    const filteredCharms = charms.filter(charm =>
        charm.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Veri yüklenirken
    if (loading) {
        return <div>Yükleniyor...</div>;
    }

    // Hata oluştuğunda
    if (error) {
        return <div>Hata: {error}</div>;
    }

    // "Necklaces" kategorisindeki ürünlerin listesini ekranda gösterin
    return (
        <div className={styles.necklacesContent}>
            <div className={styles.necklacesHeading}>
                <h1>NECKLACES</h1>
                <p>Layered one day, a singular statement the next, necklaces make the ultimate jewelry box staple. Whether you love a simple chain or a bold pendant, find your dream piece in our necklaces for women collection. Choose from hand-finished sterling silver, 14k rose gold-plated and 14k gold necklaces.</p>
            </div>
            <div className={styles.sales}>
                <h4>SALE | UP TO 50% OFF SELECT STYLES</h4>
                <p>While supplies last. Prices as marked.</p>
            </div>
            <div className={styles.formik}>
                <div className={styles.search}>
                    <input
                        type="text"
                        placeholder="Search by product name"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>
                <div className={styles.sort}>
                    <div className={styles.sortByLetter}>
                        <button onClick={() => handleSort('asc')}>A-Z</button>
                        <button onClick={() => handleSort('desc')}>Z-A</button>
                    </div>
                    <div className={styles.sortByPrice}>
                        <button onClick={() => handleSort('priceAsc')}>Low Price to High</button>
                        <button onClick={() => handleSort('priceDesc')}>High Price to Low</button>
                    </div>
                </div>

            </div>
            <div className={styles.cards}>
                {filteredCharms.length > 0 ? (
                    <ul className={styles.products}>
                        {filteredCharms.slice(0, visibleItems).map((note, index) => (
                            <li key={note._id} className={`${styles.card} ${animationTrigger && index >= visibleItems - 10 ? styles.newItems : ''}`}>
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
                    <div className={styles.loading}>No matching products found.</div>
                )}
                {visibleItems < charms.length && (
                    <button onClick={loadMore} className={styles.loadMore}>Load More</button>
                )}
            </div>
        </div>
    );
};

export default NecklacesContent;

