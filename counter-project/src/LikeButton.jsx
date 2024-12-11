import { useState } from 'react';

const Like = () => {
  let [isLiked, setIsLiked] = useState(false);
  let [likeCount, setLikeCount] = useState(0);
  let clicked = () => {
    setIsLiked((isLiked) => !isLiked);
    if(!isLiked) 
        setLikeCount((likeCount) => likeCount+1);
    else 
        setLikeCount((likeCount) => likeCount-1);
  }
  const styles = { 
    color: isLiked ? "red" : "white", 
    cursor: "pointer", 
    fontSize: "24px"
  };
  return (
    <div>
        <h1>Like Button</h1>
        {/* <h2>Like Count : {likeCount}</h2> */}
        {/* <h2>Like Type : {isLiked.toString()}</h2> */}
        <span style={styles} onClick={clicked} >
            {
                (isLiked)? (<i className="fa-solid fa-heart"></i>)
                : (<i className="fa-regular fa-heart"></i>)
            } {likeCount}
        </span>
    </div>
  )
}

export default Like;