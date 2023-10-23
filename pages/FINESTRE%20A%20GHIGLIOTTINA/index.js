import {useRouter} from 'next/router'
import Head from "next/head";
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import Footer from '../../components/footer/Footer'
import HeroImage from '../../components/main/Product-HeroImage'
import classes from './index.module.css'
import InfoTel from '../../components/InfoTel/InfoTel';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';
import { useEffect } from 'react';

function Prod5 (){
   const [ref, inView] = useInView({
      triggerOnce: false, // Change this to false if you want the button to reappear when the section is out of view
   });
        return(<>
        <Head>
           <title>Ideal House : Infissi PVC</title>
           <meta name="description" content="Brows a huge lis of highly active react meetup"></meta>
           <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>
         <HeroImage 
        img={'Prod5/unnamed-16.jpg'}
        title={'Finestre a ghiglotina'}
        category={'Finestre e porte'}
        /> 
      <Link
         to="form"
         spy={true}
         smooth={true}
         duration={500}
         className={`${classes.hoverButton} ${inView ? classes.active : ''}`}
      ></Link>
        <section className={classes.section}>
        <h1>Finestre a ghigliottina automatizzate</h1>
         <div className={classes.wrapper}>
         <div className={classes.row2}>
            <div>
            <p>Offrono una chiusura con un'ottima integrazione, migliorando notevolmente l'aspetto estetico e visivo del tuo balcone o terrazza.</p>
         <p>Il principale obiettivo di una chiusura per balconi o terrazze con il sistema di finestre a ghigliottina è quello di proteggere lo spazio dalle condizioni atmosferiche e mantenerlo in ottime condizioni il più a lungo possibile.</p>
         <p style={{fontWeight:'550'}}>Questo sistema si adatta bene a una terrazza o a un ristorante all'aperto ed è estremamente utile quando il tempo diventa imprevedibile.</p>
         <p>Con un semplice tocco di un pulsante, queste finestre si chiudono in pochi secondi; sono molto silenziose e affidabili, consentendo a te o ai clienti del tuo locale di ammirare la pioggia o il vento dall'esterno nello stesso ambiente tranquillo e protetto di prima.</p>
         </div>
         <img src='Prod5/ferestre-ghilotina-2__490x382.jpg' 
         alt='sistema a ghiglotina'/>
         </div>
         </div>
        </section>
        
        <section className={classes.section2}>
        <div className={classes.wrapper}>
        <div className={classes.row}>
         <h2>Specifiche</h2>
         <p>Il sistema di finestre a bilico per la chiusura di terrazze non ha una rottura termica, quindi si utilizzano lastre di vetro temperato da 8 o 10 mm, anche se è possibile montare un vetro termopan. Il vetro è disponibile in diverse colorazioni per un aspetto piacevole in una veranda. Tutti gli elementi di ferramenta (maniglie, cerniere, ecc.) sono in acciaio inox. I profili possono essere verniciati con vernice elettrostatica in qualsiasi colore disponibile nella tavolozza dei 
         <a href="https://www.gealan.de/it/sistemi/s-9000/#" target="_blank"> colori</a>.</p>
         </div>
         <div className={classes.row}>
         <h2>Dimensioni e prezzi</h2>
         <p>La larghezza massima dell'apertura è di 4000 mm, mentre l'altezza è di 3600 mm, e la larghezza minima dell'apertura è di 2000 mm, mentre l'altezza è di 2000 mm. I prezzi partono da 560 euro al metro quadrato + IVA e variano in base alle dimensioni; più piccola è la finestra, maggiore è il costo al metro quadrato.</p>
         </div>
        </div>
         <div className={classes.row2}>
         <img src='Prod5/finestra-Ghilotina.jpg' alt='ilustrazione'></img>
         </div>
        </section>
        
        <div id="form" ref={ref}>
        <NewMeetupForm product={'Finestre a ghiglotina'}/>  
        <InfoTel/>
        <Footer/>
        </div>
        </>)
    }
    
    export default Prod5