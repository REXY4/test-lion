import React from 'react';
import { Modal, Button} from "react-bootstrap";
import FormAuth from './FormAuth';
import { useDispatch } from 'react-redux';

interface Props {
show: boolean
login: any
}

const BasicModal: React.FC<Props> = ({ show, login }) => {
  let dispatch = useDispatch();
  const handleClose = () => dispatch({type: "MODAL_AUTH"});
  return(
    <Modal show={show}  backdrop="static" keyboard={false}>
      <Modal.Header>
        <Modal.Title>Sign in</Modal.Title>
        <Button variant="link" id="link-button-close" onClick={handleClose}>X</Button>
      </Modal.Header>
      <Modal.Body style={{
        padding : "50px"
      }}>
        <FormAuth close={handleClose} login={login}/>
      </Modal.Body>
    </Modal>
  );
}

export default BasicModal;
