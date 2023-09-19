import {useRouter} from 'next/router'
import Head from "next/head";
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import Footer from '../../components/footer/Footer'
import HeroImage from '../../components/main/Product-HeroImage'
import classes from './index.module.css'

function Prod1 (){
    

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


        <NewMeetupForm/>
        <Footer/>
        </>)
    }
    
    export default Prod1