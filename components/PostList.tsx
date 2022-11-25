import {Post} from "../utils/types/types";
import SummaryItem from "./SummaryItem";

type PostListTypes = {
    posts: Post[],
    limit: number,
}
const PostList = ({posts, limit}:PostListTypes) => {
    const postsToShow = posts.slice(0, limit).filter((post) => !post.unlisted);
  return (
      <>
          {/* eslint-disable-next-line react/jsx-key */}
          {postsToShow.map(({title,href,description}) => <SummaryItem name={title} shortDesc={description} link={undefined} longDesc={undefined} tags={undefined}/>)}
          {posts.length > limit ?
              <a className="text-th-tertiary text-sm hover:text-black" href="/blog"> View all posts &rarr; </a>: null}
      </>
  )
}

export default PostList