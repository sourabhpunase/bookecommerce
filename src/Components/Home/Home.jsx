import React, { useState } from "react";
import { toast } from 'react-toastify';
import Loader from "../Loader/Loader";
import styles from "./Home.module.css";

import { useUserContext } from "../../userContext";
import Search from "./Search";
import CategoryFilter from "./Filter";
import FilteredProducts from "./FilteredProduct";

const Home = () => {
    const { cartItems, addToCart, books, loading } = useUserContext();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleCategoryFilter = (e) => {
        const category = e.target.value;
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((c) => c !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const handleSearchQuery = (e) => {
        setSearchQuery(e.target.value);
    };

    if (loading) {
        return <Loader />;
    }

    const filteredBooks = books?.filter((book) =>{
        const title=  book.volumeInfo.title.toLowerCase().includes(searchQuery.toLowerCase())

        const authorMatch = book.volumeInfo.authors?.some(author =>
            author.toLowerCase().includes(searchQuery.toLowerCase())
        );

        const category = book.volumeInfo.categories?.some(author =>
            author.toLowerCase().includes(searchQuery.toLowerCase())
        );

        const matchCategory = selectedCategories.length === 0 || selectedCategories.some((category) =>
            book.volumeInfo.categories?.some(bookCategory =>
                bookCategory.toLowerCase() === category.toLowerCase()
            )
        );

        const search = title || authorMatch || category;
        return matchCategory && search;
    });

    const isCategorySelected = (category) => {
        return selectedCategories.includes(category);
    };

    return (
        <div className={styles.container}>
                       <Search handleSearchQuery={handleSearchQuery} />
            <CategoryFilter
                selectedCategories={selectedCategories}
                handleCategoryFilter={handleCategoryFilter}
                isCategorySelected={isCategorySelected}
            />
 
            <FilteredProducts 
                filteredBooks={filteredBooks} 
                addToCart={addToCart} 
            />
        </div>
    );
}

export default Home;
