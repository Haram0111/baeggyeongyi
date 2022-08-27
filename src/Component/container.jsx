import styled from "styled-components";
import PostingFeed from "./postingFeed";

const StyledContanier = styled.div`
    float: left;
    margin: 10px 0 0 10px;
    height: 500px;
    width: 50%;
    background-color: red;
    `;

function Container() {
    return(
        <StyledContanier>
          <PostingFeed/>
        </StyledContanier>
    );
}

export default Container;