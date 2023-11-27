import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.products.map((meetup) => (
        <MeetupItem
          key={meetup.title}
          id={meetup.title}
          image={meetup.image}
          title={meetup.title}
          price={meetup.price}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
