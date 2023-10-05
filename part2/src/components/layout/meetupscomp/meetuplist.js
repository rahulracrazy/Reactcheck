import MeetupItem from "./meetupitem";
import csprop from './meetuplist.module.css'

function MeetupList(props) {
  return (
    <ul className={csprop.list}>
      {props.object.map((s) => <MeetupItem
        key={s.id}
        id={s.id}
        title={s.title}
        image={s.image}
        desc={s.description}
        address={s.address}
        />
      )}
    </ul>
)}

export default MeetupList;
