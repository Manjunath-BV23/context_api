import { useContext, useState } from "react";
// import { CartContext } from "../../contexts/CartContext";
import { Login } from "../Login";
import { Logout } from "../Logout";

export const Navbar = () => {
    // const { cart } = useContext(CartContext);
    const [add, setAdd] = useState(true);
    return <nav>
        <div className="App">

    <button className="toggeleForm" onClick={() => {
        setAdd(add ? false:true)
    }}>
        {add ? "Login": "Logout"}
    </button>
      {add ? <Login/>:<Logout/>}
    <br />

    </div>
</nav>
}