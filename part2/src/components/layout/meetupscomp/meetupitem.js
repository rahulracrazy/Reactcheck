import Card from '../../ui/card';
import csprop from './meetupitem.module.css'

function MeetupItem(props) {
  return (
    <Card>
    <li className={csprop.item}>
      <div className={csprop.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={csprop.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.desc}</p>
      </div>
      <div className={csprop.actions}>
        <button>
            To Favorites
        </button>
      </div>
    </li>
    </Card>
  );
}
export default MeetupItem;
