import { useState } from "react";

function Button({text, vote}){

    const [count, setCount] = useState(vote);

    function handleClick(){
        setCount((prev) => prev+=1);
    }

    return(
        <>
            <button className="like-buttons" onClick={handleClick}>{count} {text === 'like'? '👍' : '👎'}</button>
        </>
    )
}

export default Button;