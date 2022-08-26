import './modal_profileSet.css';
import { VscClose } from "react-icons/vsc";
import personalData from '../Data/personalData';
import { useState } from 'react';

function ModalProfileSet(props) {
    let data = [{
        img:'',
        name:'',
        intro:''
    }];
    let [myProfile, setMyProfile] = useState(data);
    let [saveMyProfile, setSaveMyProfile] = useState(personalData);
    let [checking, setChecking] = useState(false);

    
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
                    {/* 이름 작성 칸 */}
                    <span>user name</span>
                    <input id='inputname' type='text' placeholder={personalData.myName} onChange={(e)=>{
                        let copy = myProfile;
                        copy.name = e.target.value;
                        setMyProfile(copy);
                    }}/>
                    {/* 익명여부 */}
                    <span>익명</span>
                    <input type='checkbox' onClick={()=>{
                        if (checking == true) {setChecking(false)}
                        else {setChecking(true)}
                    }}></input>
                    {/* 소개글 작성 칸 */}
                    <span>user intro</span>
                    <input type='text' id='Checking' placeholder={personalData.myIntro} onChange={(e)=>{
                        let copy = myProfile;
                        copy.intro = e.target.value;
                        setMyProfile(copy);
                    }}></input>
                    {/* 저장 */}
                    <span onClick={()=>{
                        let copy = saveMyProfile;
                        copy.myName = myProfile.name;
                        copy.myIntro = myProfile.intro;
                        setSaveMyProfile(copy);
                        props.setModalState(false);
                        props.setCheckState(checking);
                    }}>저장</span>
                </div>
            </div>
        </div>
    );
}

export default ModalProfileSet;