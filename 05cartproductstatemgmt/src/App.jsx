import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import Shop from "./components/Shop";
import CartContextProvider from "./store/shoppingCartStore";
import "react-toastify/dist/ReactToastify.css";

function App() {


  return (
    <CartContextProvider>
       <ToastContainer autoClose = {2000} theme="dark"/>
      <Header />
      <Shop />
    </CartContextProvider>
  );
}

export default App;
