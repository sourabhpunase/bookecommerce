import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './header.css'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import { Navigation, Pagination } from 'swiper/modules';
import headerShape from '../Navbar/icons/cart.png';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../userContext';

export const Header = () => {
  const { books } = useUserContext();

  const truncateTitle = (title, maxLines) => {
    const maxHeight = maxLines * 2.2; 
    return {
      maxHeight: `${maxHeight}em`,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: maxLines,
    };
  };

  const truncateDescription = (description, maxLines) => {
    const maxHeight = maxLines * 5.8; 
    return {
      maxHeight: `${maxHeight}em`,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: maxLines,
    };
  };

  return (
    <header>
      <div className='header-container'>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          modules={[Navigation]}
        
          navigation={{
            prevEl: '.button-prev-slide',
            nextEl: '.button-next-slide'
          }}
        >
          {books.slice(0, 8).map((book, index) => (
            <SwiperSlide key={index}>
              <div className='header-wrapper container'>
                <div className="header-left">
                  <h1 style={truncateTitle(book.volumeInfo.title, 2)}>{book.volumeInfo.title}</h1>
                  <p style={truncateDescription(book.volumeInfo.description, 5)}>{book.volumeInfo.description}</p>
                  <Link className='btn btn-border' to={book.saleInfo.buyLink}>Buy Now</Link>
                </div>
                <div className='header-right'>
                  <img src={book?.volumeInfo?.imageLinks?.thumbnail} alt='Book Thumbnail' />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="slider-button">
          <div className="button-prev-slide slidebutton">
            <GoArrowLeft />
          </div>
          <div className="button-next-slide slidebutton">
            <GoArrowRight />
          </div>
        </div>
      
      </div>
    </header>
  );
};
