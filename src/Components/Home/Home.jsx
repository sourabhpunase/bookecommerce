import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from 'react-toastify';
import styles from "./Home.module.css";
import Loader from '../Loader/Loader';
import { useUserContext } from "../../userContext";

const Home = () => {
    const {userCart, setUserCart, authenticate,books,loading}=useUserContext();

    const [searchQuery, setSearchQuery] = useState("");
     const [selectedCategories, setSelectedCategories] = useState([]);


    const handleCategoryFilter = (e) => {
        const category = e.target.value;
        if (selectedCategories.includes(category)) {
            // Deselect category if it's already selected
            setSelectedCategories(selectedCategories.filter((c) => c !== category));
        } else {
            // Select category if it's not already selected
            setSelectedCategories([...selectedCategories, category]);
        }
    };


    const handleSearchQuery = (e) => {
        setSearchQuery(e.target.value);
    };

    if (loading) {
        return <Loader />;
    }


    const filteredBooks = books.filter((book) =>{
      const title=  book.volumeInfo.title.toLowerCase().includes(searchQuery.toLowerCase())

      const authorMatch = book.volumeInfo.authors?.some(author =>
        author.toLowerCase().includes(searchQuery.toLowerCase())
    
    );
    const category = book.volumeInfo.categories?.some(author =>
        author.toLowerCase().includes(searchQuery.toLowerCase())
     
        
       )
       const matchCategory = selectedCategories.length === 0 || selectedCategories.some((category) =>
       book.volumeInfo.categories?.some(bookCategory =>
           bookCategory.toLowerCase() === category.toLowerCase()
       )
   );
       
          const search= title||authorMatch||category;
          return matchCategory&&search;
    }
    );
    //add to cart
    const addToCart = (id) => {
        let alreadyInCart = userCart.find((product) => product.id === id);
        let newCartProduct = books.find((product) => product.id === id);

        if (alreadyInCart) {
            setUserCart(
                userCart.map((item) =>
                    item.id === id ? { ...item, count: item.count + 1 } : item
                )
            )
            toast.success("Item Added to Cart");
        }
        else {
            newCartProduct.count = 1;
            setUserCart([...userCart, newCartProduct]);
            toast.success("Item Added to Cart");
        }
    }
     //set selected catagory
    const isCategorySelected = (category) => {
        return selectedCategories.includes(category);
      };
    return (
        <div className={styles.container}>
             <aside className={styles.filterContainer}>
                    <h2>Filter</h2>
                    <form>
                       
                        <h2>Category</h2>
                        <div className={styles.catagoryContainer}>
                            <div className={styles.catagory}>
                                <input 
                                type="checkbox"
                                id="fiction"
                                value="fiction"
                                onChange={handleCategoryFilter}
                                checked={isCategorySelected("fiction")}
                                />
                                <label htmlFor="fiction">Fiction</label>
                            </div>
                            <div className={styles.catagory}>
                                <input 
                                type="checkbox"
                                id="computers"
                                value="computers"
                                onChange={handleCategoryFilter}
                                checked={isCategorySelected("computers")}
                                />
                                <label htmlFor="computers">computers</label>
                            </div>
                            <div className={styles.catagory}>
                                <input type="checkbox"
                                id="Mathematics"
                                value="Mathematics"
                                onChange={handleCategoryFilter}
                                checked={isCategorySelected("Mathematics")}
                                />
                                <label htmlFor="Mathematics">Mathematics</label>
                            </div>
                            <div className={styles.catagory}>
                                <input type="checkbox"
                                id="law"
                                value="law"
                                onChange={handleCategoryFilter}
                                checked={isCategorySelected("law")}
                                />
                                <label htmlFor="law">law</label>
                            </div>
                            <div className={styles.catagory}>
                                <input type="checkbox"
                                id="Juvenile Nonfiction"
                                value="Juvenile Nonfiction"
                                onChange={handleCategoryFilter}
                                checked={isCategorySelected("Juvenile Nonfiction")}
                                />
                                <label htmlFor="Juvenile Nonfiction">Juvenile Nonfiction</label>
                            </div>
                            <div className={styles.catagory}>
                                <input type="checkbox"
                                id="COBOL (Computer program language)"
                                value="COBOL (Computer program language)"
                                onChange={handleCategoryFilter}
                                checked={isCategorySelected("COBOL (Computer program language)")}
                                />
                                <label htmlFor="COBOL (Computer program language)">COBOL (Computer program language)</label>
                            </div>
                            <div className={styles.catagory}>
                                <input type="checkbox"
                                id="Sports & Recreation"
                                value="Sports & Recreation"
                                onChange={handleCategoryFilter}
                                checked={isCategorySelected("Sports & Recreation")}
                                />
                                <label htmlFor="Sports & Recreation">Sports & Recreation</label>
                            </div>
                            <div className={styles.catagory}>
                                <input type="checkbox"
                                id="cricket"
                                value="cricket"
                                onChange={handleCategoryFilter}
                                checked={isCategorySelected("cricket")}
                                />
                                <label htmlFor="cricket">cricket</label>
                            </div>
                            <div className={styles.catagory}>
                                <input type="checkbox"
                                id="Literary Collections"
                                value="Literary Collections"
                                onChange={handleCategoryFilter}
                                checked={isCategorySelected("Literary Collections")}
                                />
                                <label htmlFor="Literary Collections">Literary Collections</label>
                            </div>
                            <div className={styles.catagory}>
                                <input 
                                type="checkbox"
                                id="Business"
                                value="Business"
                                onChange={handleCategoryFilter}
                                checked={isCategorySelected("Business & Economics")}
                                />
                                <label htmlFor="Business">Business</label>
                            </div>
                            <div className={styles.catagory}>
                                <input 
                                type="checkbox"
                                id="Data mining"
                                value="Data mining"
                                onChange={handleCategoryFilter}
                                checked={isCategorySelected("Data mining")}
                                />
                                <label htmlFor="Data mining">Data mining</label>
                            </div>
                            <div className={styles.catagory}>
                                <input 
                                type="checkbox"
                                id="Biography & Autobiography"
                                value="Biography & Autobiography"
                                onChange={handleCategoryFilter}
                                checked={isCategorySelected("Biography & Autobiography")}
                                />
                                <label htmlFor="Biography & Autobiography">Biography & Autobiography</label>
                            </div>
                            <div className={styles.catagory}>
                                <input type="checkbox"
                                id="Electrical engineers"
                                value="Electrical engineers"
                                onChange={handleCategoryFilter}
                                checked={isCategorySelected("Electrical engineers")}
                                />
                                <label htmlFor="Electrical engineers">Electrical engineers</label>
                            </div>
                            
                        </div>
                    </form>
                </aside>
            <form className={styles.searchContainer}>
                <input 
                    type="search"
                    placeholder="Search books..."
                    onChange={handleSearchQuery}
                />
            </form>
        
            <div className={styles.productContainerGrid}>
              
               
                {filteredBooks.map(book => (
                    <Link to={`/product/${book.id}`}>
                  
                    <div className={styles.productContainer} key={book.id}>
                        <div className={styles.productImageContainer}>
                            <img src={book.volumeInfo.imageLinks?.thumbnail || ''} alt={book.volumeInfo.title} />
                        </div>
                        <div className={styles.productDetailContainer}>
                            <div className={styles.name}>
                                <p>{book.volumeInfo.title}</p>
                            </div>
                            <div className={styles.author}>
                                <p>Author: {book.volumeInfo.authors.join(', ')}</p>
                            </div>
                            <div className={styles.price}>
                                <p>Price: {book.saleInfo.retailPrice?.amount}</p>
                            </div>
                            <NavLink to="/cart" className={styles.btn}>Add to Cart</NavLink>
                        </div>
                    </div>
                    </Link>
                ))}
             
            </div>
        </div>
    );
}

export default Home;
