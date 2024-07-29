import nestedComments from "../utils/nestedComments";
import user from "../assests/user.png";

const Comment = ({data}) => {
  const {name,text} = data;
  //{comment}
  return(
    <div className="flex py-2 items-center">
        <img src={user} className="h-10 w-10 pt-0.5" />
        <div className="pl-3">
           <div>{name}</div>
           <div>{text}</div>
        </div>
    </div>
  );
}

const CommentsList = ({nestedComments}) => {
  return(
    nestedComments.map((comment,index) => {
      return (<div key = {index}>
        <Comment data={comment}  className='border-b-2 border-b-white'/>
        <div className="pl-5 py-1 border-l-2 border-l-white ml-5">
          <CommentsList nestedComments={comment.replies}/>
        </div>
      </div>)

    })
  )
}
const CommentSection = () => {
  return (
    <div className="mt-3">
      <div className="pb-5 text-xl font-medium">Comment Section:</div>
      <CommentsList nestedComments={nestedComments} key="commentlist"/>
    </div>
    
  )
}

export default CommentSection