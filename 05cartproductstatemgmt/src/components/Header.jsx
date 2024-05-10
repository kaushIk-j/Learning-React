import { useContext, useRef } from "react";
import CartModal from "./CartModal";
import { CartContext } from "../store/shoppingCartStore";


const Header = () => {
    const modal = useRef();
    
    const {items} = useContext(CartContext);
    
    const cartQuantity = items.reduce( (acc,item) => acc + item.quantity,0);

    function handleOpenCartClick() {
        modal.current.open();
    }

    let modalActions = <button>Close</button>;

    if (cartQuantity > 0) {
        modalActions = (
            <>
                <button>Close</button>
                <button>Checkout</button>
            </>
        );
    }


    return (
        <>
            <CartModal
                ref={modal}
                title="Your Cart"
                actions={modalActions}
            />
            <header id="main-header">
                <div id="main-title">
                    <img src="logo.png" alt="Elegant Model" />
                    <h1> Elegant Context </h1>
                </div>
                <p>
                    <button onClick={handleOpenCartClick}> Cart ({ cartQuantity })</button>
                </p>
            </header>
        </>
    );

}

export default Header;