import {useRouter} from 'next/router'
import Head from "next/head";
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import Footer from '../../components/footer/Footer'
import HeroImage from '../../components/main/Product-HeroImage'
import classes from './index.module.css'
import InfoTel from '../../components/InfoTel/InfoTel';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';

function Prod2 (){
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
        img={'Prod2/ferestre-pivotante2.jpg'}
        title={'Finestre Pivotanti'}
        category={'Finestre'}
        /> 
      <Link
         to="form"
         spy={true}
         smooth={true}
         duration={500}
         className={`${classes.hoverButton} ${inView ? classes.active : ''}`}
      ></Link>
        <section className={classes.section}>
         <div className={classes.wrapper}>
         <div className={classes.row}>
         <img src='Prod2/euro-wood-feronerie-pentru-ferestre-pivotante-agb.jpg' 
         alt='Finestra Pivotanti'/>
         </div>
         <div className={classes.row2}>
         <p>L’apertura a bilico è solitamente utilizzata nelle 
            finestre installate nelle istituzioni pubbliche. 
            È un sistema raramente utilizzato anche a causa dei costi elevati. Ha 
            l’utilità che la finestra si ribalta completamente dall’interno verso 
            l’esterno, garantendo un grande flusso di ventilazione,
             maggiore di quella oscillo-battente.</p>
            <p>Ha il vantaggio di poter essere completamente ribaltata in modo che 
               la parte esterna sia per un periodo all’interno, dove facilita la 
               manutenzione o la pulizia del vetro, dandogli la possibilità di essere 
               utilizzata con successo anche ai piani superiori senza la necessità 
               dell’intervento degli alpinisti utilizzatori per la pulizia.</p>
         </div>
         </div>
        </section>
        <section className={classes.section2}>
        <div className={classes.wrapper}>
        <div className={classes.row}>
         <h1>Dimensioni minime e massime</h1>
         <p> La larghezza minima dell’apertura è di 800mm e l’altezza è di 1000mm. La larghezza massima dell’apertura è di 2000mm, come eccezione può arrivare fino a 2400mm e l’altezza è di 2400mm (non si utilizzeranno mai le dimensioni massime insieme).</p>
         </div>
         <div className={classes.row2}>
         <h1>Compatibilità di combinazion</h1>
         <p>con altre finestre Telaio profondo in base al sistema (S8000/S9000), compatibile per essere combinato con altre finestre del sistema utilizzato. Soglia: Il sistema avrà sempre un telaio chiuso. Configurazioni possibili: sempre una singola apertura.</p>
         </div>
        </div>
        </section>


        <section className={classes.section3}>
         <div className={classes.wrapper}>
         <div className={classes.row}>
         <img src='Prod2/s8000-h400.jpg' 
         alt='s8000'/>
         <a href="https://www.gealan.de/it/sistemi/s-8000/">GEALAN S8000</a>
            <p>Nello sviluppo del sistema di profili in PVC S 8000 è 
               stata riposta grande attenzione alla stabilità dei profili. 
               Le dimensioni della camera principale, destinata ad accogliere i rinforzi in acciaio, sono quindi generose.
               Il risultato è una resistenza alla flessione molto alta dei rinforzi 
               standard, a tutto vantaggio della stabilità del profilo. Ciò 
               consente di realizzare elementi di dimensioni considerevoli e permette 
               al serramentista di soddisfare le richieste di finestre di grande formato</p>
         </div>
         <div className={classes.row}>
         <img src='Prod2/s9000-h400.jpg' 
         alt='s9000'/>
         <a href="https://www.gealan.de/it/sistemi/s-9000/">GEALAN S9000</a>
            <p>S 9000 plus è il nuovo sistema a tre guarnizioni con pinna centrale rigida di GEALAN. La pinna centrale del telaio protegge efficacemente le parti meccaniche dagli influssi esterni. I sistemi con guarnizione centrale sono prodotti di punta grazie alle loro migliori caratteristiche in termini di isolamento termico.</p>
         </div>
         </div>
        </section>
        
        <div id="form" ref={ref}>
        <NewMeetupForm product={'Finestre Pivotanti'}/>  
        <InfoTel/>
        <Footer/>
        </div>
        </>)
    }
    
    export default Prod2