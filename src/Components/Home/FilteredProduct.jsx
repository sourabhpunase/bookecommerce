import React from 'react';
import { Link } from 'react-router-dom';
import './filterproduct.css';

const FilteredProducts = ({ filteredBooks, addToCart }) => {

    const truncateDescription = (description, maxLines) => {
        const maxHeight = maxLines * 1.8; // Assuming each line height is 1.2em
        return {
            maxHeight: `${maxHeight}em`,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: maxLines,
        };
    };

    const getDefaultPrice = () => {
        return 499; // Default price when price is not available
    };

    return (
        <div className='gallery'>
            {filteredBooks.map(book => (
                <div className="gallery-item" key={book.id}>
                    <div className="popularbook-image">
                        <Link to={`/product/${book.id}`}>
                            <img src={book.volumeInfo.imageLinks?.thumbnail || ''} alt={book.volumeInfo.title} />
                        </Link>
                    </div>
                    <div className="popularbook-info">
                        <div className="name">
                            <p style={truncateDescription(book.volumeInfo.title, 1)}>{book.volumeInfo.title}</p>
                        </div>
                        <div className="author">
                            <p>Author: {book.volumeInfo.authors[0]}</p>
                        </div>
                        <div className="price">
                            <p>Price: {book.saleInfo.retailPrice?.amount || getDefaultPrice()}</p>
                        </div>
                        <div className='end-btn'>
                            <button className="btn" onClick={() => addToCart(book.id)}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FilteredProducts;
