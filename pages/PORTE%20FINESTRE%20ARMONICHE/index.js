import {useRouter} from 'next/router'
import Head from "next/head";
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import Footer from '../../components/footer/Footer'
import HeroImage from '../../components/main/Product-HeroImage'
import classes from './index.module.css'
import InfoTel from '../../components/InfoTel/InfoTel';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';

function Prod7 (){
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
        img={'Prod7/porta-finestra-pvc-pr1ma-scorrevole-a-libro.jpg'}
        title={'Porte finestre armoniche'}
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
         <div>
         <h2>Armoniche</h2>
         <p>Per una transizione più fluida tra l'interno e l'esterno rispetto alle finestre scorrevoli o a scomparsa, esiste l'opzione delle <span style={{fontWeight:'550'}}>finestre armoniche, che si piegano</span> per aprire completamente lo spazio. Questo tipo di finestre, sebbene abbastanza costoso, è molto desiderato da coloro che vivono in case e desiderano un accesso più facile allo spazio esterno.</p>
         <p>Le finestre armoniche possono essere installate anche in edifici residenziali al fine di agevolare l'accesso al balcone, alla terrazza o persino all'interno della casa. In questo modo si otterrà anche luce naturale e una migliore ventilazione all'interno, ma è necessario tenere presente che queste finestre sono costose e richiedono una maggiore manutenzione.</p>
         <p>L'apertura ad accordion o armonica è un sistema di solito utilizzato per separare ambienti di grandi dimensioni.</p>
         </div>
         <div>
         <img src='Prod7\70b2cb2a0af6cc127c7f5e9233be2759.webp' 
         alt='Porte armoniche'/>   
         </div>
         </div> 

         </div>       
        </section>
        
        <section className={classes.section2}>
        <div className={classes.wrapper}>
        <div className={classes.row}>
         <h2>Soglia Normale (telaio + aggiunta telaio) vs. Soglia Incorporata</h2>
         <p>Per far funzionare una finestra/porta armonica, i carrelli che scorrono le finestre hanno bisogno dell'intera altezza del telaio, oltre a un'aggiunta di almeno 20 mm (un sistema simile a quello delle finestre oscillo-scivolo). Se si utilizza questo sistema armonico a livello del suolo, allora il telaio NON può essere completamente incorporato, e l'altezza totale che sarà necessario superare sarà l'altezza del telaio che di solito è di almeno 64 mm, più i 20 mm di aggiunta del telaio.</p>
         <p>Invece, il sistema armonico ha la possibilità di utilizzare una <span style={{fontWeight:'550'}}>Soglia Incorporata. L'intero sistema di guida e movimento delle ante è nascosto al di sotto del livello del pavimento, richiedendo un'incorporazione di circa 70 mm, e il drenaggio dell'acqua da quello spazio viene gestito in modo specifico, mentre in superficie rimarrà solo la soglia in alluminio che garantirà la tenuta nella parte inferiore.</span></p>
         </div>
         <div className={classes.row2}>
         <div><img src='Prod7/252402c1a0bb39140cff5b04ea3fe639.webp' 
         alt='20mm'/></div>
        <div><img src='Prod7\d87e8ffa882df298d19793e5ff4de735.webp' 
         alt='50mm'/></div>
         <div><img src='Prod7\f96c5d4d748ce267fca1adcbe5dd916f.webp' 
         alt='soglia a filo'/></div>
         <div><img src='Prod7\f54a83a1f815cbc196c0b83333cc875f.webp' 
         alt='soglia a filo'/></div>
         </div>
        </div>
        </section>

        <section className={classes.section3}>
        <div className={classes.wrapper}>
        <div className={classes.row}>
         <h2>Dimensioni minime e massime</h2>
         <p>La larghezza minima dell'apertura è di 500 mm, mentre l'altezza è di 1000 mm. La larghezza massima dell'apertura è di 900 mm, con l'eccezione delle finestre che arrivano fino a 1100 mm, e l'altezza massima è di 2400 mm, come nel caso delle finestre scorrevoli.</p>
         </div>
         <div className={classes.row}>
         <h2>Compatibilità di giunzione con altre finestre</h2>
         <p>Il telaio ha una profondità variabile in base al sistema utilizzato (S8000/S9000) ed è compatibile per essere collegato ad altre finestre dello stesso sistema utilizzato.</p>
         </div>
        </div>
        </section>

        <section className={classes.section4}>
        <div className={classes.wrapper}>
        <div className={classes.row1}>
         <div>
         <h2>Configurazioni possibili - schemi di telai da 3 a 6 porte</h2>
         <p>Da tenere presente che il numero di telai armonici è quasi sempre dispari.</p>         
         <p><span style={{fontWeight:'550'}}>I telai possono essere aperti solo piegandoli, con l'eccezione del telaio principale, l'unico che può essere sia oscillante che scorrevole, e ciò solo nei casi delle configurazioni 321, 431, 541 o 651.</span></p>
         <p><span style={{fontWeight:'550'}}>In via eccezionale, è possibile configurare anche schemi con un numero pari di telai, ma in questo caso le porte si apriranno a due a due.</span></p>
         </div>
         <div><img src='Prod7\schema.webp' 
         alt='schema'/></div>
         </div>
         <div className={classes.row2}>
        <div>
        <img src='Prod7\Min-Max.jpg' 
         alt='schema'/></div>
         </div>
         <div className={classes.row3}>
         <h2>Galleria di immagini delle porte Hebeschiebe</h2>
         <div>
         <div><img src='Prod7\1.webp' 
         alt='photo camera 1'/></div>
        <div><img src='Prod7\2.webp' 
         alt='photo camera 2'/></div>
         <div><img src='Prod7\3.webp' 
         alt='photo camera 3'/></div>
         <div><img src='Prod7\4.webp' 
         alt='photo camera 4'/></div>
         </div>
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
    
    export default Prod7