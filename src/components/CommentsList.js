import Comment from "./Comment";

function CommentsList({comments}) {

    const commentDisplay = comments.map((com)=> {
        return <Comment key={com.id} comment={com} />
    }) 

    return(
        <div>
            <h2>{comments.length} Comments</h2>
            {commentDisplay}
        </div>
    )
}

export default CommentsList;