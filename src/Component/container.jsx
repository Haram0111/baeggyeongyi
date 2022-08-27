import styled from "styled-components";

function Container() {
    const StyledContanier = styled.div`
    float: left;
    margin: 10px 0 0 10px;
    height: 500px;
    width: 50%;
    background-color: red;
    `;
    return(
        <StyledContanier>
          Contanier
        </StyledContanier>
    );
}

export default Container;