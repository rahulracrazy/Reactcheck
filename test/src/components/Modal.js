function Modal(props){
    function cancelHandler(){
        props.onCancel();
    }
    return (
        <div className="modal">
            <p>Are you sure?</p>
            <button className="btn btn--alt" onClick={cancelHandler}>Cancel</button>
            <button className="btn" onClick={props.onConfirm}>Corfirm</button>
        </div>
    )
}

export default Modal;