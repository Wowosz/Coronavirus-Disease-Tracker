import React, {useState} from 'react';
import { useEffect } from 'react/cjs/react.development';
import "./Navbar.css";

function Navbar(props) {
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
            <ul className="countryList">
                {
                    props.countries.map(countr => {
                        return(
                            <li key={countr["country"]}><a onClick={() => props.handleChangeCountry(countr)}>{countr["country"]}</a></li>
                        )
                    })
                }
            </ul>
            <button className="toogle-sidemenu" onClick={handleOpening}>{menuOpened? '<': '>'}</button>
        </div>
    );
}

export default Navbar;