import {useRouter} from 'next/router'
import Head from "next/head";
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import Footer from '../../components/footer/Footer'
import HeroImage from '../../components/main/Product-HeroImage'
import classes from './index.module.css'
import InfoTel from '../../components/InfoTel/InfoTel';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';

function Prod3 (){
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
        img={'Prod6/scorrevole-alzante-scorrevole-o-traslante-complanare-fb.jpg'}
        title={'Porte alzante scorrevoli (HST)'}
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
         <h2>Le porte scorrevoli sollevabili sono comunemente chiamate anche Hebeschiebe o porte HST (HebeSchiebeTür).</h2>
         <p><span style={{fontWeight:'550'}}> Le porte scorrevoli sollevabili fanno parte di un sistema distinto</span>, molto diverso dagli altri sistemi di profili utilizzati per realizzare finestre standard e porte per balconi, sia per forma che per utilizzo; al contrario, il sistema Hebeschiebe è molto simile per forma e funzionamento al sistema di <a href="/FINESTRE%20E%20PORTE%20SMART-SLIDE" target="_blank">porte Smart Slide (Smoovio).</a></p>
         <p>Come suggerisce il nome, le porte scorrevoli sollevabili sono scorrevoli con un'ottima tenuta, e la loro caratteristica distintiva è che la tenuta avviene sulla guarnizione quando la parte mobile scende sul pianale, a differenza della tenuta con spazzola delle porte scorrevoli o della tenuta tramite avvicinamento della finestra al telaio come nel caso di porte Smart Slide (Smoovio), o della tenuta attraverso il ritorno della finestra nel telaio come nel caso delle porte oscillo-scivolo.</p>
         <p style={{fontWeight:'550'}}>Le porte scorrevoli sollevabili sono particolarmente utili quando è necessaria una buona tenuta in uno spazio relativamente ampio, ad esempio per le porte della terrazza di dimensioni più grandi rispetto a quelle che possono essere coperte dalle porte scorrevoli Smart Slide o oscillo-scivolo, sistemi con un'ottima tenuta sulla guarnizione ma limitati nelle dimensioni massime realizzabili.</p>
         </div>         
        </section>
        
        <section className={classes.section2}>
        <div className={classes.wrapper}>
        <div className={classes.row}>
         <h2>Dimensioni minime e massime</h2>
         <p>La larghezza minima dell'apertura è di 1000 mm, mentre l'altezza è di 1700 mm.
La larghezza massima dell'apertura è di 3000 mm (incontrato raramente in altri sistemi) mentre l'altezza è di 2600 mm.</p>
         </div>
         <div className={classes.row}>
         <h2>Compatibilità di giunzione con altre finestre</h2>
         <p>Il telaio profondo di 190 mm, specifico solo per il sistema delle porte scorrevoli sollevabili (simile a quello di Smoovio), lo rende compatibile solo con altre porte scorrevoli sollevabili o con due file di finestre della serie S8000 o S9000.</p>
         </div>
        </div>
        </section>

        <section className={classes.section3}>
        <div className={classes.wrapper}>
        <div className={classes.row1}>
         <h2>Configurazioni possibili con Smoovio</h2>
         <p>Il sistema Smoovio consente solo una parte fissa e un'apertura o combinazioni tra di esse. La finestra si sposta solo da sinistra a destra (senza la possibilità di oscillazione). È importante notare che una finestra mobile Smoovio ha bisogno di spazio aggiuntivo per la parte fissa su cui aprirsi.</p>
         </div>
         <div className={classes.row2}>
        <div><img src='Prod4/scheme-posibile-smart-slide-si-hst__1024x576.jpg' 
         alt='Configurazioni'/></div>
        <div><img src='Prod4/smoovio3__1024x576.jpg' 
         alt='smoovio3'/></div>
         </div>
        </div>
        </section>

        <div id="form" ref={ref} >
        <NewMeetupForm product={'Finestre e porte Smart Slide'}/>  
        <InfoTel/>
        <Footer/>
        </div>
        </>)
    }
    
    export default Prod3