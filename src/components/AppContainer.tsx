import { TopicListContainer } from "components/topicList/TopicListContainer";
import { PostsListContainer } from "components/postsList/PostsListContainer";
import { Loader } from "components/Loader";
import { useSelector } from "react-redux";
import React from "react";
import styled from "styled-components";
import { RootState } from "store";
import { LoaderReducerRootState } from "store/reducers/loaderReducer";
import { UndoButton } from "components/UndoButton";

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const AppContainer = () => {
  const loaderIsShown = useSelector<
    RootState,
    LoaderReducerRootState["loaderIsShown"]
  >((state) => state.loader.loaderIsShown);

  const undoButtonIsShown = useSelector<RootState, boolean>(
    (state) => state.undo.undoButtonIsShown
  );

  return (
    <>
      <TopicListContainer />
      {undoButtonIsShown && <UndoButton />}
      <PostsListContainer />
      <LoaderWrapper>{loaderIsShown && <Loader />}</LoaderWrapper>
    </>
  );
};
