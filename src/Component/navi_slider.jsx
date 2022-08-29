import styled from "styled-components";
import Alarm_data from "../Data/alarm";
import { useState } from "react";
import HotPosing from './hotPosting';

function Navi_Slider(props) {
    const [alarm, setAlarm] = useState(Alarm_data);

    const StyledSidebar = styled.div`
    float: right;
    margin: 10px 0 0 0;
    height: 1000px;
    width: 20%;
    background-color: grey;
    z-index: 2;
    `;

    const StyledPageMove = styled.button`
    margin: 10px 0 0;
    height: 50px;
    width: 30%;
    background-color: white;
    border-radius: 15px;
    font-size: 20px;
    `;

    const StyledAlarm = styled.div`
    margin: 10px auto 0;
    height: 600px;
    width: 90%;
    background-color: white;
    border-radius: 15px;
    `;
    if (props.menuShow) {return(
        <StyledSidebar>
              <HotPosing></HotPosing>
              <>
                <StyledPageMove>1</StyledPageMove>{' '}
                <StyledPageMove>2</StyledPageMove>{' '}
                <StyledPageMove>3</StyledPageMove>{' '}
              </>
              <StyledAlarm>
                {
                  alarm && alarm.map((a,i)=>{
                    return(
                      <div key={i}>{a.text}</div>
                    )
                  })
                }
            </StyledAlarm>
        </StyledSidebar>
    );}
    else {return(null)}
}

export default Navi_Slider;