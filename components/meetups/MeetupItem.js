import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import { useRouter } from 'next/router';
import { motion } from "framer-motion";
import { useState } from 'react';

function MeetupItem(props) {
  const[isExpanded, setIsExpanded]=useState(false)
   const router = useRouter();
   function showDetails(){
  console.log('/'+ props.id);
     router.push('/'+ props.id)
     setIsExpanded(!isExpanded)
  }
  return (
    <li className={classes.item} onClick={showDetails}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
        <h3 className={`${props.title.length < 32 ? classes.title : ''}`}>{props.title}</h3>
        </div>
        <div className={classes.price}>
        {/* <h1>{props.price}</h1> */}
        </div>
        <div className={classes.actions}>
          <button onClick={showDetails}>
            Vedi dettagli 
            </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
