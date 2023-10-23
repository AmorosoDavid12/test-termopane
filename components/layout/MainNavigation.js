import { useState, useRef,useEffect } from 'react'; // Import React useState
import classes from './MainNavigation.module.css';
import Link from 'next/link';

function MainNavigation() {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const dropdownRef = useRef(null); // Create a ref for the dropdown

    // Function to toggle the dropdown visibility
    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };
    //////// hovering over other links
    const UnToggleDropdown = () => {
        setIsDropdownVisible(false);
    };
    // Effect to add event listener on mount and remove on unmount
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownVisible(false); // Set visibility to false when click is outside dropdown
            }
        };

        // Add the event listener
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            // Remove the event listener on cleanup
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

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
                            <li onMouseEnter={UnToggleDropdown}><Link href="">Le nostre offerte</Link></li>
                            <li><Link href="/">Contatti</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
         
            {isDropdownVisible && (
                // Render the dropdown when isDropdownVisible is true
                <div className={classes.dropdown}
                    onMouseLeave={toggleDropdown} ref={dropdownRef}> 
                        <div className={classes.dropdownContainer}>
                    <div className={classes.col1}>
                        <ul className={classes['prod-group']}>
                            <li ><a className={classes.nolink}>Finestre</a>
                                <ul className={classes['dropdown-items']}>
                                    <li className={classes['menu-item']}><a href="/FINESTRE%20STANDARD%20E%20PORTE%20BALCONE">Finestre standard e Porte Balcone</a></li>
                                    <li className={classes['menu-item']}><a href="/FINESTRE%20PIVOTANTI">Finestre pivotanti</a></li>
                                </ul>
                            </li>
                            <li><a className={classes.nolink}>Finestre e Porte</a>
                                <ul className={classes['dropdown-items']}>
                                    <li className={classes['menu-item']}><a href="/FINESTRE%20E%20PORTE%20SCORREVOLI">Finestre e porte scorrevoli</a></li>
                                    <li className={classes['menu-item']}><a href="/FINESTRE%20E%20PORTE%20SMART-SLIDE">Finestre e porte Smart Slide</a></li>
                                    <li className={classes['menu-item']}><a href="/PORTE%20ALZANTE%20SCORREVOLI%20(HST)">Porte alzante scorrevoli (HST)</a></li>
                                    <li className={classes['menu-item']}><a href="/">Ferestre și Uși Armonice</a></li>
                                    <li className={classes['menu-item']}><a href="/PORTE%20FINESTRE%20ARMONICHE">Ferestre TIP GHILOTINA Automat</a></li>
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

