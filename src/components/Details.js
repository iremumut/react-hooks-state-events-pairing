import { useState } from "react";
import Button from "./Button";
import CommentsList from "./CommentsList";

const Details = ({title, views, createdAt, upvotes, downvotes, comments}) => {

    const [isHidden, setIsHidden] = useState(false);

    function hideClickHandle() {
        setIsHidden((prev) => !prev);
    }
    return(
        <div>
            <h1>{title}</h1>
            <p>{views} Views | Uploaded {createdAt}</p>

            <div>
                <Button text={'like'} vote={upvotes}/>
                <Button text={'dislike'} vote={downvotes}/>
            </div>

            <button onClick={hideClickHandle}> {isHidden ? 'Show' : 'Hide'} Comments</button>
            <hr/>
            {isHidden ? '' : <div>
                                <CommentsList comments={comments}/>
                            </div>}
            

            
        </div>
    )
}

export default Details;
