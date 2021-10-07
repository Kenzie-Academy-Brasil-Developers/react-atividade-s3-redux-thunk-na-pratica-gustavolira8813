import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCommentThunk } from "../../store/modules/user/thunk";

const FormComments = () => {
  const [newComment, setNewComment] = useState("");

  const dispatch = useDispatch();

  const { comments } = useSelector((state) => state.user);

  const handleComment = () => {
    console.log("comentario", comments);
    dispatch(addCommentThunk(newComment));
    setNewComment("");
  };
  return (
    <div>
      <input
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Escreva seu comentário"
      />
      <button onClick={handleComment}>Comentar</button>
    </div>
  );
};

export default FormComments;
