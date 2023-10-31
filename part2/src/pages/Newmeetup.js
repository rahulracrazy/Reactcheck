import MeetupForm from "../components/layout/meetupscomp/meetupform";
import { useNavigate } from 'react-router-dom';

function Newmeetuppage(){
    const history=useNavigate();

    function storedataoverapi(data){
        fetch('https://react-009-5bab0-default-rtdb.firebaseio.com/meetup.json',{
        method:'post',
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'
        }
    }).then(()=>{
        history('/')
    })
    }

    return <section><h1>Add New Meetup</h1>
    <MeetupForm post={storedataoverapi}/>
    </section>
}

export default Newmeetuppage;