
import classes from './Product-HeroImage.module.css'

export default function HeroImage(props) {

    return (<>
     <section style={{ backgroundImage: `linear-gradient(45deg, #51505082 36%, rgba(43, 13, 194, 0) 100%, rgba(43, 13, 194, 0) 100%), url(${props.img})` }} 
     className={classes.section}>
    <div className={`${classes.description} 
    ${props.title.length < 23 ? classes['short-text'] : null}`}>
                <div className={classes.title}>
                    <h1>{props ? props.title : 'TITLE'}</h1>
                </div>
                <div className={classes.category}>
                    <p>Prodotti </p> <p>/</p>  <p>{props ? props.category : 'Category'} </p>
                    <p>/</p> <p>{props ? props.title : 'TITLE'}</p>
                </div>
            </div>

        </section>

    </>)

}

