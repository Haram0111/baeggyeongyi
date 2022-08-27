import React, {useState} from 'react'
import feedData from '../Data/feedData';
import styled from "styled-components";

// const StyledWirterInfo = styled.div`
//   height: 150px;
//   width: 100%;
//   background-color: blue;
//   `;


function PostingFeed(){
    const [feed, setFeed] = useState(feedData);

    return(
        <>
            {
                feed && feed.map((a,i)=>{
                    return(
                        <>                            
                            <div><img src={a.wirterImg} style={{width: "30px", height: "30px"}}></img>{` `}{a.wirter}</div>
                            <div>{a.date}</div>
                            <div>{a.text}</div>
                        </>
                    )
                })
            }
        </>
    )
}

export default PostingFeed;