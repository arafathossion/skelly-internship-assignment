import './App.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import MyCart from './Component/MyCart';
import NavBar from './Component/NavBar';
import PaymentMethod from './Component/PaymentMethod';
import ShoppingForm from './Component/ShoppingForm';


function App() {
  return (
    <div className='px-8'>
      <NavBar />
      <Header/>
      <div className='grid grid-cols-3 gap-10'>
        <ShoppingForm />
        <PaymentMethod/>
        <MyCart/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
