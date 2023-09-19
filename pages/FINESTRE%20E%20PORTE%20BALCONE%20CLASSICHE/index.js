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
        img={'Prod1/ferestre-bg__1250x720.jpg'}
        title={'Finestre e Porte Balcone Clasiche'}
        category={'Finestre'}
        /> 

        <section className={classes.section}>
         <div className={classes.wrapper}>
         <div className={classes.row}>
         <h2>Resistenza</h2>
         <p>Le finestre con profili in PVC GEALAN sono facili da pulire. 
            La loro alta resistenza alle influenze 
            ambientali e atmosferiche garantisce una lunga durata.</p>
         </div>
         <div className={classes.row}>
         <h2>Efficienza</h2>
         <p>Le finestre con profili GEALAN con più camere 
            assicurano il mantenimento del calore all’interno e impediscono 
            l’ingresso del rumore. Queste offrono sicurezza, 
            protezione e creano un’atmosfera inconfondibile.</p>
         </div>
         <div className={classes.row}>
         <h2>Personalizzate</h2>
         <p>La scelta della geometria dei profili, del tipo di apertura e 
            della divisione delle finestre influisce sul carattere individuale.
             Attraverso i profili GEALAN, 
            è possibile realizzare anche forme di finestre meno comuni.</p>
         </div>
         </div>
        </section>


        <section className={classes.section2}>
         <div className={classes.wrapper2}>
         <div className={classes.row}>
         <h1>Finestre Fisse</h1>
         <img src="Prod1/ferestre-fixe.jpg" alt="finestre_fisse" />
         </div>

         <div className={classes.row}>
         <h2>Dimensioni minime e massime</h2>
         <p>La larghezza/altezza minima di una finestra fissa è di 200mm. 
            La larghezza/altezza massima di una finestra fissa è di 4000mm, 
            come eccezione può arrivare fino a 6000mm,
             la lunghezza massima di un profilo in pvc.
         </p>
         <h2>Vantaggi e svantaggi</h2>
         <p>I vantaggi delle finestre fisse sono legati, in primo luogo, ai costi.
             Essendo montate con l’unico scopo di permettere alla luce di penetrare all’interno 
             della stanza e considerando che in molti casi sono posizionate in zone difficilmente 
             accessibili, non si aprono. Questo comporta meno accessori e quindi costi più bassi. 
             Possono essere illuminate aree che non permettono l’installazione di altri tipi di 
             finestre. Svantaggi: Difficoltà nella pulizia del vetro;
             Non permettono la ventilazione della stanza.</p>
         </div>
         </div>
        </section>



        <NewMeetupForm/>
        <Footer/>
        </>)
    }
    
    export default Prod1