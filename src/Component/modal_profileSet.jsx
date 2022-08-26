import './modal_profileSet.css';
import { VscClose } from "react-icons/vsc";

function ModalProfileSet(props) {
    if (props.modalState == false) return(null);
    else return(
        <div className="fullscreen">
            <div className="modal">
                <div className='banner'>
                    <span className='close_btn' onClick={()=>{
                        props.setModalState(false);
                    }}><VscClose/></span>
                </div>
                <div className='setting_content'>
                    하이염
                </div>
            </div>
        </div>
    );
}

export default ModalProfileSet;