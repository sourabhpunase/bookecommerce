import styles from './order.module.css'
import { useUserContext } from '../../userContext';
import { Navigate } from 'react-router-dom';

const Order = () => {
    const { userOrder, authenticate } = useUserContext();

 
    return (
        <div className={styles.container}>
            <h1>My Orders</h1>
            {userOrder.map((order, index) => (
                <div key={index} className={styles.orderDetails}>
                    <h2>Order on: {order.date}</h2>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {order.items && Array.isArray(order.items) && order.items.map((item, itemIndex) => (
                                <tr key={itemIndex}>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>{item.count}</td>
                                    <td>{item.price * item.count}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th colSpan={2}></th>
                                <th></th>
                                <th>Total:-</th>
                                <th>&#x20B9; {order.total}</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            ))}
        </div>
    );
};

export default Order;
