import React, { useState } from "react";
import { Heart } from "@styled-icons/fa-regular";
import { Heart as FilledHeart, TrashAlt } from "@styled-icons/fa-solid";
import styled from "styled-components";
import { PostsListType } from "components/postsList/PostsListContainer";

const Container = styled.div`
  display: flex;
  padding: 10px;
`;

const HeartWrapper = styled.div`
  color: red;
  cursor: pointer;
  margin-right: 5px;
  svg {
    width: 15px;
  }
`;
const TrashWrapper = styled.div`
  margin-right: 5px;
  cursor: pointer;
  color: #607d8b;
  &:hover {
    color: #4e636d;
  }
  svg {
    width: 15px;
  }
`;

const Link = styled.a`
  color: #607d8b;
`;

interface Props extends PostsListType {
  removePost: () => void;
  setFavoriteStatus: () => void;
}

export const PostsList = ({
  title,
  url,
  favorite,
  removePost,
  setFavoriteStatus,
}: Props) => {
  const [heartIconHover, setHeartIcon] = useState<boolean>(false);
  return (
    <Container>
      <>
        <HeartWrapper
          onClick={setFavoriteStatus}
          onMouseEnter={() => {
            setHeartIcon(true);
          }}
          onMouseLeave={() => {
            setHeartIcon(false);
          }}
        >
          {favorite || heartIconHover ? <FilledHeart /> : <Heart />}
        </HeartWrapper>
        <TrashWrapper>
          <TrashAlt onClick={removePost} />
        </TrashWrapper>
        <Link target="_blank" href={url}>
          {title}
        </Link>
      </>
    </Container>
  );
};
