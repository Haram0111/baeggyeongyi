import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import feedData from '../Data/feedData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faComments, faThumbsUp } from '@fortawesome/free-solid-svg-icons';



function PostingFeed(){
    const [feed, setFeed] = useState(feedData);
    const navigate = useNavigate();

    return(
        <>
            {
                feed && feed.map((a,i)=>{
                    return(
                        <div key={i} onClick={ () => navigate(`/`+i) }>                            
                            <div><img src={a.wirterImg} style={{width: "30px", height: "30px"}}></img>{` `}{a.wirter}</div>
                            <div>{a.date}</div>
                            <div>{a.text}</div>
                            <div>좋아요 수 : {a.like}</div>
                            <FontAwesomeIcon icon={faThumbsUp} style={{fontSize: "10px", color: "white"}}/>좋아요
                            <FontAwesomeIcon icon={faComments} style={{fontSize: "10px", color: "white"}} ></FontAwesomeIcon>댓글달기
                            <FontAwesomeIcon icon={faPaperPlane} style={{fontSize: "10px", color: "white"}}/>공유
                        </div>
                    )
                })
            }
        </>
    )
}

export default PostingFeed;