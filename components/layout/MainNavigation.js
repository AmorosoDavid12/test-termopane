import { useState } from 'react'; // Import React useState
import classes from './MainNavigation.module.css';
import Link from 'next/link';

function MainNavigation() {
    // Create state to manage the dropdown visibility
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    // Function to toggle the dropdown visibility
    const toggleDropdown = () => {

        setIsDropdownVisible(!isDropdownVisible); 
       
    };

    return (
        <>
       
            <header className={classes.header}>
                <div className={classes.container}>
                    <Link href="/">
                        <section className={classes.logo}>
                            <strong>Ideal </strong>
                            <span className={classes["blue-dot"]}></span> House
                        </section>
                    </Link>
                    <nav>
                        <ul>
                            <li onClick={toggleDropdown}onMouseEnter={toggleDropdown}>
                               <a style={{color:`${isDropdownVisible?'#3e50e5':'#ddd'}`}}>
                                Prodotti</a> 
                            </li>
                            <li><Link href="">Le nostre offerte</Link></li>
                            <li><Link href="/">Contatti</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
         
            {isDropdownVisible && (
                // Render the dropdown when isDropdownVisible is true
                <div className={classes.dropdown}
                    onMouseLeave={toggleDropdown}>
                        <div className={classes.dropdownContainer}>
                    <div className={classes.col1}>
                        <ul className={classes['prod-group']}>
                            <li ><a className={classes.nolink}>Ferestre</a>
                                <ul className={classes['dropdown-items']}>
                                    <li className={classes['menu-item']}><a href="/Prod1">Ferestre Standard și Uși de Balcon</a></li>
                                    <li className={classes['menu-item']}><a href="/Prod2">Ferestre Pivotante</a></li>
                                </ul>
                            </li>
                            <li><a className={classes.nolink}>Ferestre și uși</a>
                                <ul className={classes['dropdown-items']}>
                                    <li className={classes['menu-item']}><a href="/">Ferestre și Uși glisante</a></li>
                                    <li className={classes['menu-item']}><a href="/">Ferestre și Uși Smart Slide</a></li>
                                    <li className={classes['menu-item']}><a href="/">Ferestre și Uși oscilo-culisante</a></li>
                                    <li className={classes['menu-item']}><a href="/">Ferestre și Uși Armonice</a></li>
                                    <li className={classes['menu-item']}><a href="/">Ferestre TIP GHILOTINA Automat</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className={classes.col2}>
                        <ul className={classes['prod-group']}>
                            <li><a className={classes.nolink}>Accesorii</a>
                                <ul className={classes['dropdown-items']}>

                                    <li className={classes['menu-item']}><a href="/">Plase de insecte</a></li>
                                    <li className={classes['menu-item']}><a href="/">Rulouri</a></li>
                                    <li className={classes['menu-item']}><a href="/">Glafuri</a></li>
                                    <li className={classes['menu-item']}><a href="/">Sisteme de aerisire</a></li>
                                    <li className={classes['menu-item']}><a href="/">Rolete interioare</a></li>
                                    <li className={classes['menu-item']}><a href="/">Jaluzele exterioare</a></li>
                                </ul>
                            </li>
                            <li className={classes['item-header']}><a href="/">Produse speciale</a></li>
                            <li className={classes['item-header']}><a href="/">Reparații termopane</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default MainNavigation;

