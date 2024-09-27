import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // เพิ่มการนำเข้า useNavigate
import Navbar from '../Navbar';
import Footer from '../Footer';

function Cart() {
  const navigate = useNavigate(); // สร้าง instance ของ useNavigate

  // State สำหรับจัดการรายการสินค้าในตะกร้า
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 100, quantity: 1 },
    { id: 2, name: 'Product 2', price: 200, quantity: 1 },
  ]);

  // ฟังก์ชันเพิ่มจำนวนสินค้า
  const increaseQuantity = (id) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  // ฟังก์ชันลดจำนวนสินค้า
  const decreaseQuantity = (id) => {
    setCartItems(cartItems.map(item => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
  };

  // ฟังก์ชันลบสินค้าออกจากตะกร้า
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // คำนวณราคารวม
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // ฟังก์ชันจัดการการ Checkout
  const handleCheckout = () => {
    navigate('/checkout'); // เปลี่ยนเส้นทางไปยัง '/checkout' เมื่อผู้ใช้กดปุ่ม Checkout
  };

  return (
    <div className='bg-gradient-to-b from-yellow-200 to-white '>
      <Navbar />

      <div className='p-6 max-w-screen-xl mx-auto'>
        <h1 className='text-center text-2xl font-bold mb-6'>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <p className='text-center'>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map(item => (
              <div key={item.id} className='flex justify-between items-center mb-4'>
                <div className='bg-white p-4'>
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  <div className='flex items-center'>
                    <button className='px-2' onClick={() => decreaseQuantity(item.id)}>-</button>
                    <p className='mx-2'>{item.quantity}</p>
                    <button className='px-2' onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                </div>
                <button className='bg-red-500 text-white px-4 py-2' onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            ))}
            <div className='text-right font-bold'>
              <p>Total: ${totalPrice}</p>
              <button className='bg-blue-500 text-white px-6 py-2 mt-4' onClick={handleCheckout}>Checkout</button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Cart;