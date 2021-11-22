import React, {useState} from 'react';
import "./Navbar.css";

function Navbar() {
    const [menuOpened, setMenuOpened] = useState(1);

    const handleOpening = () => {
        if(menuOpened){
            setMenuOpened(0);
        } else{
            setMenuOpened(1);
        }
    }
    return(
        <div className={menuOpened? "sidemenu-container opened" : "sidemenu-container closed"}>
            <ul>
                <li>Dupa</li>
                <li>upa</li>
                <li>trzy</li>
                <li>odbyty</li>
                <li>dada</li>
            </ul>
            <button className="toogle-sidemenu" onClick={handleOpening}>{menuOpened? '<': '>'}</button>
        </div>
    );
}

export default Navbar;