import {
    useState,
    useContext,
    createContext,
    useEffect
} from 'react';

import { db } from "./firebaseinit";
import {
    addDoc,
    collection,
    getDocs,
    updateDoc,
    doc
} from 'firebase/firestore';
import { toast } from 'react-toastify';

const userContext = createContext();

export const useUserContext = () => {
    const value = useContext(userContext);
    return value;
}
function getDefaultCart() {
    let cart = {};
    for (let index = 0; index < 10; index++) {
        cart[index] = 0;
    }
    return cart;
}
export const UserContextProvider = ({ children }) => {
    const [authenticate, setAuthenticate] = useState(false);
    const [userOrder, setUserOrder] = useState([]);
    const [userId, setUserId] = useState("");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const date = currentDate.getDate();

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const response = await fetch('https://d1krvzwx5oquy1.cloudfront.net/books.json');
            const data = await response.json();
            setBooks(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching books:', error);
            setLoading(false);
            toast.error("Error fetching books. Please try again later.");
        }
    };

    const authenticateUser = async (email, password) => {
        let isFound = false;
        const users = collection(db, "users");
        const querySnapshot = await getDocs(users);
        console.log("Query Snapshot:", querySnapshot);
        querySnapshot.forEach((doc) => {
            console.log("User Document:", doc.data());
            if (doc.data().email === email && doc.data().password === password) {
                console.log("User found:", doc.id);
                setUserId(doc.id);
                setUserOrder(doc.data().orders);
                setCartItems(doc.data().cart);
                isFound = true;
                setAuthenticate(true);
                console.log("Authenticated:", isFound);
            }
        });
        console.log("Is Found:", isFound);
        return isFound;
    };

    const newUser = (name, email, password) => {
        const user = {
            name: name,
            email: email,
            password: password,
            cart: [],
            orders: []
        };
        console.log("New User Data:", user);
        const useRef = collection(db, "users");
        console.log("User Collection Reference:", useRef);
        const docRef = addDoc(useRef, user).then((ref) => {
            console.log("New User Document ID:", ref.id);
        });
        setAuthenticate(true);
        toast.success("New User Created Successfully");
    
    };

    const logout = async () => {
        console.log("User ID:", userId);
        const useRef = doc(db, "users", userId);
        console.log("User Document Reference:", useRef);
        await updateDoc(useRef, {
            orders: userOrder,
            cart: cartItems
        });
        setAuthenticate(false);
        console.log("Logged out Successfully");
        toast.success("Logged out Successfully");
    };

    const addToCart = (itemId) => {
        setCartItems(prev => ({
            ...prev,
            [itemId]: prev[itemId] + 1
        }));
        console.log(cartItems);
        notifyItemAdded(); // Call the notification function here
    };

    const notifyItemAdded = () => {
        toast.success("Item added to cart successfully!");
    };

    const checkOut = () => {
        let orderDate = date.toString() + '-' + month.toString() + '-' + year.toString();
        let newOrder = { date: orderDate, order: cartItems };
        setUserOrder([newOrder, ...userOrder]);
        setCartItems(getDefaultCart());
        toast.success("Items Purchased Successfully");
    };

    const removeCart = (itemId) => {
        if (cartItems[itemId] > 0) {
            setCartItems(prev => ({
                ...prev,
                [itemId]: prev[itemId] - 1
            }));
        }
    };

    const gettotalAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = books.find((product) => product?.id === Number(item));
                totalAmount += itemInfo?.saleInfo.retailPrice?.amount ||499* cartItems[item];
            }
        }
        return totalAmount;
    };

    const getTotalitem = () => {
        let totalitem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalitem += cartItems[item];
            }
        }
        return totalitem;
    };

    return (
        <userContext.Provider value={{
            authenticate,
            authenticateUser,
            newUser,
            logout,
            removeCart,
            gettotalAmount,
            getTotalitem,
            checkOut,
            addToCart,
            cartItems,
            userOrder,
            loading,
            books
        }}>
            {children}
        </userContext.Provider>
    );
};
