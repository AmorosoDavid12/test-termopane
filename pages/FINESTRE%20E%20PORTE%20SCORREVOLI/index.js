import {useRouter} from 'next/router'
import Head from "next/head";
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import Footer from '../../components/footer/Footer'
import HeroImage from '../../components/main/Product-HeroImage'
import classes from './index.module.css'
import InfoTel from '../../components/InfoTel/InfoTel';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';

function Prod4 (){
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
        img={'Prod3/izopremidoor88-slide-nice.jpg'}
        title={'Finestre e porte scorrevoli'}
        category={'Finestre e Porte'}
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
         <div className={classes.row1}>
         <p>Le finestre o le porte scorrevoli sono sempre più comuni nelle abitazioni moderne.</p>
         <p>Il sistema di apertura scorrevole è dedicato agli spazi in cui non è necessaria una tenuta molto stretta, poiché la chiusura avviene tramite spazzole e non guarnizioni, come negli altri tipi di apertura. Per questo sistema è necessario utilizzare un profilo specifico scorrevole con due o più vie di scorrimento</p>
         <p>Questo tipo di finestre consente di manovrare le finestre e di ventilare l'abitazione senza ingombrare lo spazio interno o esterno, poiché si aprono scorrendo verticalmente o orizzontalmente, senza sporgere in alcun modo verso l'interno o l'esterno. È importante notare che all'interno di questo sistema tutte le ante sono mobili e scorrono una accanto all'altra; se si desidera che una di esse sia fissa, questa viene bloccata con un sistema di chiusura o con viti.</p>
         </div>
         <div className={classes.row2}>
            <div>
         <h2>Dimensioni minime e massime</h2>
         <p>La larghezza minima dell'apertura è di 700 mm, mentre l'altezza è di 1000 mm. La larghezza massima dell'apertura è di 2000 mm, mentre l'altezza è di 2400 mm. Il sistema consente l'uso di 2 o addirittura 3 binari se necessario. Il profilo utilizzato ha la stessa profondità costruttiva del S8000, quindi è possibile creare connessioni scorrevoli con finestre standard.</p>
         <p>Le finestre scorrevoli sono la scelta ideale per coloro che desiderano finestre dal soffitto al pavimento, consentendo un facile accesso a balconi, terrazze o giardini. Oltre a ottimizzare lo spazio, queste finestre offrono anche un aspetto moderno e minimalista, adatto a un'abitazione contemporanea.</p>
         </div>
         <img src='Prod3/sistema-scorrevole__400x580.jpg' 
         alt='sistema scorrevoli'/>
         </div>
         </div>
        </section>
        
        <section className={classes.section2}>
        <div className={classes.wrapper}>
        <div className={classes.row}>
         <h2>Dimensioni minime e massime</h2>
         <p>La larghezza minima dell'apertura è di 700 mm, mentre l'altezza è di 1000 mm. La larghezza massima dell'apertura è di 1500 mm, mentre l'altezza è di 2400 mm.</p>
         </div>
         <div className={classes.row}>
         <h2>Compatibilità con altre finestre</h2>
         <p>Il telaio profondo di 74 mm, specifico del sistema Gealan S8000, lo rende compatibile con altre finestre o porte della serie S8000.</p>
         </div>
         <div className={classes.row}>
         <h2>Soglia</h2>
         <p>Il sistema scorrevole ha sempre un telaio chiuso nella parte inferiore della finestra. Il punto più alto del telaio è di 62 mm, ma può essere incastrato di 35 mm, lasciando fuori un profilo alto 15 mm (il minimo necessario per far scorrere il telaio sulla guida).</p>
         </div>
        </div>
        </section>
        
        <div id="form" ref={ref}>
        <NewMeetupForm product={'Finestre e porte scorrevoli'}/>  
        <InfoTel/>
        <Footer/>
        </div>
        </>)
    }
    
    export default Prod4