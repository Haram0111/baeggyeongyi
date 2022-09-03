import React, {useState} from 'react'
import feedData from '../Data/feedData';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faComments, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

function PostingPage(){
    const [feed, setFeed] = useState(feedData);

    return(
        <>
            {
                <>                            
                    <p>피드 한개를 보여주는 페이지입니다</p>
                </>
            }
        </>
    )
}

export default PostingPage;