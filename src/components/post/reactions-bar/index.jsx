import { useContext } from "react";
import { useSelector } from "react-redux";

import { PostContext } from "..";
import Comments from "./Comments";
import Like from "./Like";
import Share from "./share";

const ReactionsBar = () => {
  const { _id: id, creatorId, likes, isLiked } = useContext(PostContext);
  const isAdmin = useSelector((state) => Boolean(state.admin));

  return (
    <div className="flex flex-col pt-1">
      <div className="grid grid-cols-3 items-center justify-items-center">
        {!isAdmin && (
          <Like
            likes={likes}
            type="post"
            userId={creatorId}
            postId={id}
            isLiked={isLiked}
          />
        )}
        <div
          className={`${
            isAdmin ? "col-span-3" : "col-span-1"
          } w-full flex justify-center`}
        >
          <Comments />
        </div>
        {!isAdmin && <Share />}
      </div>
    </div>
  );
};

export default ReactionsBar;
