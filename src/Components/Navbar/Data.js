import { FiUser } from 'react-icons/fi';
import { VscSearch } from 'react-icons/vsc';
import { BsBag } from 'react-icons/bs';
import Brand1 from '../assets/brand1.png'
import Brand2 from '../assets/brand2.png'
import Brand3 from '../assets/brand3.png'
import Brand4 from '../assets/brand4.png'
import Brand5 from '../assets/brand5.png'
export const navLinks =[
    {
        name:'Home',
        path:'/'
    },
    {
        name:'About',
        path:'/about'
    },
    {
        name:'Orders',
        path:'/orders'
    },
  
    {
        name:'Contact',
        path:'/contact'
    },
  ];

  export const navRight = {
    managements: [
      {
          id: 1,
          icon: FiUser,  
          link: '/login'
      },
      {
          id: 2,
          icon: BsBag,      
          link: '/cart'
      },
   
    ]
      
  };
  export const brandsData =[
    {
        id: 1,
        img: Brand1,        
    },
    {
        id: 2,
        img: Brand2,        
    },
    {
        id: 3,
        img: Brand3,        
    },
    {
        id: 4,
        img: Brand4,        
    },
    {
        id: 5,
        img: Brand5,        
    },
];