import React from "react";
import { PostsList } from "./PostsList";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import {
  DragDropContext,
  Droppable,
  Draggable,
  CompletedDrag,
} from "react-beautiful-dnd";
import {
  removePost,
  setFavoriteStatus,
  setReorderedPosts,
} from "store/actions/postActions";
import { showUndoButton } from "store/actions/undoButton";

export interface PostsListType {
  title: string;
  url: string;
  favorite?: boolean;
}

const reorder = (
  list: PostsListType[],
  startIndex: number,
  endIndex: number
): PostsListType[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

export const PostsListContainer = () => {
  const dispatch = useDispatch();

  const posts = useSelector<RootState, PostsListType[]>(
    (state) => state.root.present.posts
  );

  const onDragEnd = (result: CompletedDrag["result"]) => {
    const { destination, source } = result;
    if (!destination) {
      return;
    }
    const reorderedPosts = reorder(posts, source.index, destination?.index);
    dispatch(setReorderedPosts(reorderedPosts));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="DroppableId">
        {(provided) => {
          return (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {posts &&
                posts.map(({ url, title, favorite }, i) => {
                  return (
                    <Draggable key={i} index={i} draggableId={i.toString()}>
                      {(provided) => {
                        return (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <PostsList
                              url={url}
                              title={title}
                              favorite={favorite}
                              key={i}
                              removePost={() => {
                                dispatch(removePost(i));
                                dispatch(showUndoButton());
                              }}
                              setFavoriteStatus={() => {
                                dispatch(setFavoriteStatus(i));
                              }}
                            />
                          </div>
                        );
                      }}
                    </Draggable>
                  );
                })}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
};
