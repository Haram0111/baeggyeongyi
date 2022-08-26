import { useState } from "react";
import ModalProfileSet from "./modal_profileSet";
import { VscSettingsGear } from "react-icons/vsc";

function SettingBtn() {
    let [modalState, setModalState] = useState(false);
    return(
        <>
            <span className="setting_btn" onClick={()=>{
                setModalState(true);
            }}><VscSettingsGear/></span>
            <ModalProfileSet modalState={modalState} setModalState={setModalState}/>
        </>
    );
}

export default SettingBtn;