import styled from "styled-components";

function SideBanner_adv() {
    const StyledAdv = styled.div`
    float: left;
    margin: 10px 0 0 5%;
    height: 100px;
    width: 20%;
    background-color: #61dafb;
    `;
    return(
        <StyledAdv>
          <p>광고바</p>
        </StyledAdv>
    );
}

export default SideBanner_adv;