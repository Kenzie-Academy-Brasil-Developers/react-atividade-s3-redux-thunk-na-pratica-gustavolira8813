import { addComment } from "./actions";

export const addCommentThunk = (comment) => {
  return (dispatch, getStore) => {
    const { user } = getStore();
    const updatedUser = { ...user, comments: [...user.comments, comment] };
    dispatch(addComment(updatedUser));
  };
};
