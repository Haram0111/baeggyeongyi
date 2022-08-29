import React, {useState} from 'react'
import feedData from '../Data/feedData';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faComments, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import {Col, Row} from 'react-bootstrap'
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
                            <div>좋아요 수 : {a.like}</div>
                            <FontAwesomeIcon icon={faThumbsUp} style={{fontSize: "10px", color: "white"}}/>좋아요
                            <FontAwesomeIcon icon={faComments} style={{fontSize: "10px", color: "white"}} ></FontAwesomeIcon>댓글달기
                            <FontAwesomeIcon icon={faPaperPlane} style={{fontSize: "10px", color: "white"}}/>공유
                        </>
                    )
                })
            }
        </>
    )
}

export default PostingFeed;