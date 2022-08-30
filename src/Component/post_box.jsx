import feedData from '../Data/feedData.js';
import personalData from '../Data/personalData.js';
import { useState } from 'react';
import GetToday from '../Function/gettoday.jsx';
// 작성자는 personalData에서, 쓴글 같은건 feedData로
//unshift()

function PostBox() {
    let data = [{
        writerImg : personalData[0].myImg,
        writer : personalData[0].myName,
        time : GetToday(),
        text : ''
    }];
    let [postState, setPostState] = useState(data[0]);
    //let [savePostState, setSavePostState] = useState(feedData);
    return(
        <>
            <div className="post_box">
                <span onClick={()=>{
                    feedData.unshift(postState);
                    console.log(feedData);
                }}>+</span>
                <span>사진</span>
                <span>동영상</span>
                <span>친친</span>
                <span>태그</span>
                <input type='text' onChange={(e)=>{
                    let copy = data[0];
                    copy.text = e.target.value;
                    setPostState(copy);
                }}></input>
            </div>
        </>
    );
}

export default PostBox;