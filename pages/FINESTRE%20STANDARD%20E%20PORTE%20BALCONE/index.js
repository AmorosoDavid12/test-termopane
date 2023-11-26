import { useRouter } from 'next/router'
import Head from "next/head";
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import Footer from '../../components/footer/Footer'
import HeroImage from '../../components/main/Product-HeroImage'
import classes from './index.module.css'
import InfoTel from '../../components/InfoTel/InfoTel';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';
function Prod1() {
   const [ref, inView] = useInView({
      triggerOnce: false, // Change this to false if you want the button to reappear when the section is out of view
   });

   return (<>
      <Head>
         <title>Ideal House : Infissi PVC</title>
         <meta name="description" content="Brows a huge lis of highly active react meetup"></meta>
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <HeroImage
         img={'Prod1/American-Style-Double-Hung-Sash-Aluminum-Window-Vertical-up-Down-Sliding-Windows.jpg'}
         title={'Finestre standard e Porte Balcone'}
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
               <h2 className={classes.title}>Finestre Fisse</h2>
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
                  Non permettono la ventilazione della stanza.
               </p>
            </div>
         </div>
      </section>

      <section className={classes.section3}>
         <div className={classes.wrapper3}>
            <div className={classes.row1}>
               <div>
                  <h2>Finestre con apertura semplice, o doppia (apertura ad anta e ribalta) o a vasistas</h2>
                  <p>Sono specifiche per tutte le finestre attraverso le quali vogliamo ventilare: ad esempio,
                     la finestra del bagno, della cucina, nelle stanze di una casa e anche le porte del balcone.
                     La differenza tra l’apertura apertura ad anta e ribalta e quella semplice è data dall’utilità di
                     quella finestra, quella apertura ad anta e ribalta è la categoria molto più desiderabile quando si
                     desidera ventilare la stanza senza preoccuparsi della finestra aperta.
                  </p>
                  <p>
                     La finestra
                     apertura ad anta e ribalta fornisce un flusso d’aria fresco abbastanza grande nella stanza e allo stesso
                     tempo la sicurezza che nessuno potrà entrare forzatamente all’interno.</p>
               </div>
               <img src="Prod1/aperture_finestre.jpg" alt="aperture_finestre" />

            </div>

            <div className={classes.row2}>
               <div className={classes.para1}>
                  <h2>Dimensioni minime e massime</h2>
                  <p>La larghezza minima dell’apertura è di 700mm e l’altezza di 1000mm.
                     La larghezza massima dell’apertura è di 1600mm,
                     eccezionalmente può arrivare fino a 2000mm e l’altezza di 2400, come per la scorrevole.
                  </p>
               </div>
               <div>
                  <h2>Vantaggi e svantaggi</h2>
                  <p>Telaio profondo in base al sistema (S8000/S9000), compatibile per essere combinato
                     con altre finestre del sistema utilizzato. Si può utilizzare un telaio chiuso,
                     una soglia in alluminio di 20mm o senza soglia con spazzola,
                     o senza soglia ma anche con soglia automatica autoattivante.</p>
               </div>
            </div>
         </div>
      </section>

      <section className={classes.section4}>
         <div className={classes.wrapper4}>
            <div className={classes.row1}>
               <div style={{paddingTop:'20px',paddingBottom:'20px'}}>
               <h2>Finestre rotonde, semicircolari (ad arco)</h2>
               <p>Le finestre sono uno degli elementi cruciali nella
                   progettazione di una casa, se si desidera attirare l'attenzione
                    di tutti e allo stesso tempo conferire un fascino unico alla casa, 
                  diventando una parte importante dell'arredamento interno.
               </p>
               <p>Le finestre ad arco nell'interior design offrono molte opportunità 
               per soluzioni originali. Grazie alla forma e alla cornice correttamente 
               scelta, la stanza avrà un aspetto completamente nuovo.
               </p>
               </div>
               <img src="Prod1\semicerc.jpg" alt="semicerco" />
            </div>    
         </div>
      </section>
      <section className={classes.section5}>
         <div className={classes.wrapper5}>
         <div className={classes.row}>
         <img src='Prod1\a bilico.jpg' alt='bilico'/>

            <div>
            <h2>La finestra Apertura a bilico può essere aperta verso l'alto o verso il basso (apertura superiore o vasistas).</h2>

            <p>Di solito, le finestre a ribalta vengono realizzate con apertura 
               dall'alto verso il basso, mentre in casi eccezionali, almeno nel caso del PVC, 
               possono essere realizzate con apertura dal basso verso l'alto. Queste vengono 
               installate con apertura verso l'interno per evitare che la pioggia
                entri all'interno della casa quando la finestra è aperta.
               </p>
               <p>
               Le finestre a ribalta dal basso verso l'alto sono di solito
                utilizzate per l'apertura verso l'esterno. Qui è possibile optare per
                 l'installazione aggiuntiva di un meccanismo sequenziale che consente alla finestra di aprirsi a gradini e di rimanere
                in posizione semiaperta a diversi livelli di apertura.
                Inoltre, è possibile utilizzare un sistema di apertura a distanza, manuale o elettrico.   
               </p>
               </div>
         </div>
         </div>
        </section>

        <section className={classes.section6}>
         <div className={classes.wrapper6}>
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
         <div className={classes.row}>
         <img src='Prod2\cubus-h400__297x400.jpg' 
         alt='GEALAN-KUBUS'/>
         <a href="https://www.gealan.de/it/sistemi/s-9000/">GEALAN KUBUS</a>
            <p>Il sistema di finestre GEALAN-KUBUS® orientato al design offre agli architetti il massimo delle possibilità e quindi nuove prospettive. Sia che si tratti di una cornice visibile al 100%, di una semi nascosta o di una quasi invisibile, si creano proporzioni che lasciano il segno.</p>
         </div>
         </div>
        </section>

      <div id="form" ref={ref}>
         <NewMeetupForm product={'Finestre e Porte Balcone'} />
      
      <InfoTel/>
      <Footer />
      </div>
   </>)
}

export default Prod1