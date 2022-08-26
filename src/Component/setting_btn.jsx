import { useState } from "react";
import ModalProfileSet from "./modal_profileSet";
import { VscSettingsGear } from "react-icons/vsc";
import personalData from "../Data/personalData";

function SettingBtn() {
    let [modalState, setModalState] = useState(false);
    let [checkState, setCheckState] = useState(false);
    return(
        <>
            <span className="setting_btn" onClick={()=>{
                setModalState(true);
            }}><VscSettingsGear/></span>
            <span style={{color:'black'}}>
                {checkState==true ? '익명' : personalData.myName}
            </span>
            <span style={{color:'black'}}>{personalData.myIntro}</span>
            <ModalProfileSet modalState={modalState} setModalState={setModalState} checkState={checkState} setCheckState={setCheckState}/>
        </>
    );
}

export default SettingBtn;