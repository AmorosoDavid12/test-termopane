import MeetupList from "../components/meetups/MeetupList"
import Head from "next/head";
import Footer from "../components/footer/Footer";
import HeroImage from "../components/main/HeroImage";
import InfoTel from "../components/InfoTel/InfoTel";


function HomePage(props) {

    return (<>
        <Head>
           <title>Ideal House : Infissi PVC</title>
           <meta name="description" content="Brows a huge lis of highly active react meetup"></meta>
           <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>
        <HeroImage/>
        <MeetupList products={props.products} />
        <InfoTel/>
        <Footer/>
        </>
    )
}
//////////////Not visable on the front-end, fetching the meetups
/* export async function getStaticProps() {
    const client = await MongoClient.connect("mongodb+srv://Francesco1277:Francesco1277@cluster0.ubxnzm9.mongodb.net/meetups?retryWrites=true&w=majority");
    const db = client.db();
    const MeetupCollections = db.collection('meetups');
    const meetups = await MeetupCollections.find().toArray();
    client.close()
    return {
        props: {
            meetups: meetups.map(meetup => ({
                title:meetup.title,
                image:meetup.image,
                address:meetup.address,
                description:meetup.description,
                id:meetup._id.toString()
            })),
        },
        revalidate: 1
    };
}
 */

export async function getStaticProps() {
    return {props: {
        products: [
            {title:'FINESTRE STANDARD E PORTE BALCONE',
            image:'Prod1/ferestre-clasice__500x422.png',
            price:'200 Eur/pz',
            id:'Prod1'},
    
            {title:'FINESTRE PIVOTANTI',
            image:'Prod2/FINESTRE PIVOTANTI.png',
            price:'200 Eur/pz',
            id:'Prod2'},
    
            {title:'FINESTRE E PORTE SCORREVOLI',
            image:'Prod3/FINESTRE E PORTE SCORREVOLI.png',
            price:'200 Eur/pz',
            id:'Prod3'},
    
            {title:'FINESTRE E PORTE SMART-SLIDE',
            image:'Prod4/FINESTRE E PORTE SMART-SLIDE.png',
            price:'200 Eur/pz',
            id:'Prod4'},
            
            {title:'FINESTRE A GHIGLIOTTINA',
            image:'Prod5/FINESTRE A GHIGLIOTTINA.png',
            price:'200 Eur/pz',
            id:'Prod5'},

            {title:'PORTE ALZANTE SCORREVOLI (HST)',
            image:'Prod6/PORTE ALZANTE SCORREVOLI (HST).png',
            price:'200 Eur/pz',
            id:'Prod6'},
    
            {title:'PORTE FINESTRE ARMONICHE',
            image:'Prod7/armonica__500x422.png',
            price:'200 Eur/pz',
            id:'Prod7'},
    
        ]
       
    }
}
}


export default HomePage