import React from "react";
import styled, { keyframes } from "styled-components";
import { TopicListType } from "components/topicList/TopicListContainer";
import { useDispatch } from "react-redux";

const sideToSide = keyframes`
  from {
    left: 0;
  }
  to {
    left: 100%;
  }
`;

const Item = styled.div`
  height: 30px;
  span {
    position: absolute;
    padding: 5px;
    background: #9e9e9e;
    cursor: pointer;
    border-radius: 3px;
    animation: ${sideToSide} 7s linear infinite alternate;
    transition-duration: 1s;
    &:hover {
      background: #eee;
      animation-play-state: paused;
    }
  }
`;

export const TopicList = ({ topicList }: TopicListType) => {
  const dispatch = useDispatch();
  return (
    <>
      {topicList.map((item, i) => (
        <Item key={i}>
          <span
            onClick={function () {
              dispatch({ type: "THREADS_FETCH_REQUESTED", item });
            }}
          >
            {item}
          </span>
        </Item>
      ))}
    </>
  );
};
