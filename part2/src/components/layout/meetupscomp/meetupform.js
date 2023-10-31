import Card from "../../ui/card";
import classes from './meetupform.module.css'
import {useRef} from 'react'

function MeetupForm(props) {
    const statetitle= useRef();
    const stateimage= useRef();
    const stateaddress= useRef();
    const statedescription= useRef();

    function submitHandler(event){
        event.preventDefault()

        const restitle=statetitle.current.value;
        const resimage=stateimage.current.value;
        const resaddress=stateaddress.current.value;
        const resdescr=statedescription.current.value;

        const meetupres={
            'title':restitle,
            'image':resimage,
            'address':resaddress,
            'description':resdescr,
        }

        props.post(meetupres);

    }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" required ref={statetitle}/>
        </div>
        <div className={classes.control}>
            <label htmlFor="image">Image</label>
            <input type="url" id="Image" required ref={stateimage}/>
        </div>
        <div className={classes.control}>
            <label htmlFor="address">Address</label>
            <input type="text" id="address" required ref={stateaddress}/>
        </div>
        <div className={classes.control}>
            <label htmlFor="description">Description</label>
            <textarea id="description" rows='5' required ref={statedescription}></textarea>
        </div>
        <div className={classes.actions}>
            <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default MeetupForm;
