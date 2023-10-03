import Modal from "./Modal";
import {useState} from 'react';
import Backdrop from "./backdrop";

function Todo(props){
  const [Modalstate, setModalstate]=useState(false)
    
  function delhand(){
      setModalstate(true)
    }
  function drop(){
    setModalstate(false)
  }

    return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={delhand}>Delete</button>
      </div>
      {Modalstate ? (<Modal onCancel={drop} onConfirm={drop}/>): null}
      {Modalstate && <Backdrop onClick={drop}/>}
    </div>
    );
}

export default Todo;