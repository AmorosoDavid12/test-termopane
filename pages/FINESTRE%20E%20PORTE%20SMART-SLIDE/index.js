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
        img={'Prod4/gealan-smoovio-03.jpg'}
        title={'Finestre e porte Smart Slide'}
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
         <p>Il sistema di finestre Smart Slide (chiamato Smoovio) è un sistema dedicato Gealan, simile al sistema scorrevole e funziona allo stesso modo, ma la tenuta avviene tramite guarnizione avvicinando la finestra al telaio solo quando la finestra ha raggiunto la fine del percorso e sta per essere chiusa.</p>
         <p>A differenza del telaio scorrevole o oscillo-battente, il telaio di Smoovio ha una profondità di 150 mm ed è sempre lo stesso su tutti e 4 i lati della finestra, in modo da supportare sia la finestra che scorre da sinistra a destra, sia il telaio fisso.</p>
         </div>
         <iframe width="560" height="315" src="https://www.youtube.com/embed/TGAdInJa6Gw?si=3OB3It7Sh8GnTRTg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
         <p>Il telaio profondo di 150 mm, specifico solo del sistema Smoovio, lo rende compatibile solo con altre finestre Smoovio o con due file di finestre della serie S8000.</p>
         </div>
         <div className={classes.row}>
         <h2>Soglia</h2>
         <p>Smoovio è un sistema dedicato alle finestre, quindi nella parte inferiore della finestra ci sarà sempre un telaio chiuso, con il punto più alto di 74 mm, ma che può essere abbassato in modo sfalsato fino a 49 mm all'interno e fino a 40 mm all'esterno, lasciando fuori un profilo alto 25 mm all'interno e 30 mm all'esterno.</p>
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