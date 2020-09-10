import React from "react";
import { RootState } from "store";
import { useSelector } from "react-redux";
import { TopicList } from "./TopicList";
export interface TopicListType {
  topicList: string[];
}

export const TopicListContainer = () => {
  const topicList = useSelector<RootState, TopicListType["topicList"]>(
    (state) => state.root.present.topicList
  );

  return <TopicList topicList={topicList} />;
};
