  

  import { useEffect, useState } from 'react';
  import Link from 'next/link';
  // import fetch from 'isomorphic-unfetch';
  
  const YourOrders = () => {
    // const [orders, setOrders] = useState([]);
    const [range, setRange] = useState('all');
  
    // useEffect(() => {
    //   const fetchData = async () => {
    //     const res = await fetch('/api/orders');
    //     const data = await res.json();
    //     setOrders(data);
    //   };
    //   fetchData();
    // }, []);

    const orders = [
      {
        id: 1,
        orderNumber: '12345',
        orderDate: 'January 1, 2020',
        orderTotal: '$100.00',
        orderStatus: 'Completed',
        trackingNumber: '123456',
        productImageUrl: 'https://picsum.photos/200',
        productName: 'Product 1',
        productDescription: 'This is a description of Product 1'
      },
      {
        id: 2,
        orderNumber: '23456',
        orderDate: 'February 15, 2020',
        orderTotal: '$50.00',
        orderStatus: 'Cancelled',
        trackingNumber: '234567',
        productImageUrl: 'https://picsum.photos/200',
        productName: 'Product 2',
        productDescription: 'This is a description of Product 2'
      },
      {
        id: 3,
        orderNumber: '34567',
        orderDate: 'March 31, 2020',
        orderTotal: '$200.00',
        orderStatus: 'In Progress',
        productImageUrl: 'https://picsum.photos/200',
        productName: 'Product 3',
        productDescription: 'This is a description of Product 3'
      },
      {
        id: 4,
        orderNumber: '12345',
        orderDate: 'January 1, 2020',
        orderTotal: '$100.00',
        orderStatus: 'Completed',
        trackingNumber: '123456',
        productImageUrl: 'https://picsum.photos/200',
        productName: 'Product 1',
        productDescription: 'This is a description of Product 1'
      },
    ];
  
    const cancelOrder = (orderId) => {
      // code to cancel the order with the specified ID
    };
  
    const trackPackage = (orderId) => {
      // code to track the package for the order with the specified ID
    };
  
    const handleRangeChange = (e) => {
      setRange(e.target.value);
    };
  
    const filteredOrders = range === 'all'
      ? orders
      : orders.filter(order => order.orderStatus === range);
  
    return (
      <div className="container mt-24 max-w-7xl mx-auto font-Roboto">
        <h1 className="text-2xl font-bold mb-4">Your Orders</h1>
        <div className="mb-4">
          <label htmlFor="range" className="text-sm font-semibold text-dark">
            Show orders:
          </label>
          <select
            id="range"
            value={range}
            onChange={handleRangeChange}
            className="form-select py-1 px-2 text-sm font-semibold text-dark"
          >
            <option value="all">All</option>
            <option value="In Progress">In Progress</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
        <div className='flex'>
        {filteredOrders.length > 0 ? (
          <div className="flex flex-wrap justify-between items-center gap-y-4">
            {filteredOrders.map(order => (
              <div key={order.id} className="bg-white p-4 shadow-lg w-[400px]">
                <div className="mb-4">
                  <div className="text-sm font-semibold text-dark">
                    Order Number:{" "}
                    <Link href="/orders/[id]" as={`/orders/${order.id}`} >
                    <span className="text-orange-400 hover:text-orange-500 transition-colors duration-300 ease-in-out">{order.orderNumber}</span>
                  </Link>
                </div>
                <div className="text-sm font-semibold text-dark">
                  Order Date: {order.orderDate}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-sm font-semibold text-dark">
                  Order Total: {order.orderTotal}
                </div>
                <div className="text-sm font-semibold text-dark">
                  Order Status: {order.orderStatus}
                </div>
                {order.trackingNumber && (
                  <div className="text-sm font-semibold text-dark">
                    Tracking Number: {order.trackingNumber}
                  </div>
                )}
              </div>
              <div className="grid grid-cols-1 gap-4 mb-4">
                <div className="flex items-center">
                  <img
                    src={order.productImageUrl || ''}
                    alt={order.productName || ''}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div className="text-sm">
                    <p className="text-dark leading-none">{order.productName || ''}</p>
                    <p className="text-gray-600">{order.productDescription || ''}</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {order.orderStatus === 'In Progress' && (
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => cancelOrder(order.id)}
                  >
                    Cancel
                  </button>
                )}
                {order.trackingNumber && (
                  <button
                    className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded"
                    onClick={() => trackPackage(order.id)}
                  >
                    Track Package
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-dark">You have no orders.</p>
      )}
        </div>
    </div>
  );
};

export default YourOrders;

  
