import { TopicListType } from "components/topicList/TopicListContainer";

interface Response {
  data: TopicListType[];
}
type FetchPostsApi = (topic: string) => Promise<Response>;

export const fetchPostsApi: FetchPostsApi = (topic) => {
  return fetch(`https://www.reddit.com/r/${topic}.json`)
    .then((response) => response.json())
    .then((json) => json.data.children.map((child: Response) => child.data));
};
