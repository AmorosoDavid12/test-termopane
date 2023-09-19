


import classes from './Footer.module.css'

export default function Footer() {

    return (
    <footer className={classes.footer}>
        <div className={classes["footer-bottom-nav"]}>
            <div className={classes.container}>
                <div className={classes["Footer_links_subsection"]}>
                    <div className={classes["footer-links__title"]}>Ideal House</div>
                    <ul className={classes["footer-links__wrapper-links"]}>
                        <li><a href="/it/chi-siamo/">Chi siamo</a></li>
                        <li><a href="/it/bricoman-diventa-tecnomat/">Bricoman diventa Tecnomat</a></li>
                        <li><a href="https://lavoro.tecnomat.it/" target="_blank">Lavora con noi</a></li>
                        <li><a href="/it/partner-posatori-infissi/" target="_blank">Diventa nostro partner posatore</a>
                        </li>
                        <li><a href="https://lavoro.tecnomat.it/pages/sviluppo-sostenibile/" target="_blank">I nostri
                                prodotti</a></li>
                        <li><a href="/it/sitemap/"> Vuole una oferta specializata? </a></li>
                    </ul>
                </div>
                <div className={classes["Footer_links_subsection"]}>
                <div className={classes["footer-links__title"]}>Servizi</div>
                    <ul className={classes["footer-links__wrapper-links"]}>
                        <li><a href="/it/reso-e-rimborso/">Reso e rimborso</a></li>
                        <li><a href="/it/recesso/">Diritto di recesso</a></li>
                        <li><a href="/it/ritiro-in-negozio/">Ritiro in negozio</a></li>
                        <li><a href="/it/spedizioni-e-consegne/">Spedizioni e consegne</a></li>
                        <li><a href="/it/agevolazioni-e-detrazioni/">Agevolazioni e detrazioni</a></li>
                    </ul>
                </div>
                <div className={classes["Footer_links_subsection"]}>
                    <div className={classes["footer-links__title"]}>Contatti e Area legale</div>
                    <ul className={classes["footer-links__wrapper-links"]}>
                        <li><a href="https://bricoman.service-now.com/dvt_csp?id=dvt_create_case" target="_blank">Contatti</a></li>
                        <li><a href="/it/faq/page/">Domande frequenti</a></li>
                        <li><a href="/it/segnalazione-richiamo-prodotti/">Richiamo prodotti</a></li>
                        <li><a href="/it/aggiornamento-ordini-negozio/">Aggiornamento ordini in negozio</a></li>
                        <li><a href="/it/privacy/">Privacy</a></li>
                       
                    </ul>
                </div>
            </div>
        </div>
        <div className={classes["copyright-text"]}>
            2023 © Ideal House Buisness s.r.l.
        </div>
    </footer>
    )
}