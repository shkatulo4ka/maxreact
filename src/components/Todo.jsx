import {useState} from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

const Todo= (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const closeHandler = () => {
        setModalIsOpen(false)
    }
    const deleteHandler = () => {
        setModalIsOpen(true);
    }
    return (
        <div className='card'>
          <h2>{props.text}</h2>
          <div className='actions'>
             <button className='btn' onClick={deleteHandler}>Delete</button>
          </div>
          { modalIsOpen && <Modal onCancel={closeHandler} onConfirm={closeHandler}/> }
          { modalIsOpen && <Backdrop onCancel={closeHandler}/>  }
        </div>
     );
  }
  
  export default Todo;
  