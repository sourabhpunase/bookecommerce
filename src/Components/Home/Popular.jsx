import React, { useState } from 'react';
import './Popular.css';
import { useUserContext } from '../../userContext';
import { TitleTypeOne } from '../../pages/UI/TitleTypeOne';

export const Popular = () => {
    const { books } = useUserContext();
    const [active, setActive] = useState('all');
    const [filteredBooks, setFilteredBooks] = useState([]);

    // Filter books based on the selected category
    const filterBooks = (category) => {
        if (category === 'all') {
            setFilteredBooks(books);
        } else {
            setFilteredBooks(books.filter(book => book.volumeInfo.categories.includes(category)));
        }
        setActive(category);
    };

    return (
        <section className='popular-books'>
            
            <div className='container popularbooks-container'>
                <TitleTypeOne
                    Title={'Popular Books'}
                    TitleTop={'Some quality items'}
                    className={'popularbooks-title'}
                />
                <button className={active === 'all' ? 'active' : ''} onClick={() => filterBooks('all')}>
                    All
                </button>
                <button className={active === 'Computers' ? 'active' : ''} onClick={() => filterBooks('Computers')}>
                    Computers
                </button>
                {/* Add more buttons for other categories as needed */}

                <div className="gallery">
                    {filteredBooks.map(book => (
                        <div className="gallery-item" key={book.id}>
                            <div className="popularbook-image">
                                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                            </div>
                            <div className="popularbook-info">
                                <h4>{book.volumeInfo.title}</h4>
                                <div>
                                    <small>{book.volumeInfo.authors.join(', ')}</small>
                                </div>
                                <h5><span>{book.saleInfo.retailPrice.amount}</span></h5>
                                <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">Preview</a>
                                <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">More Info</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
