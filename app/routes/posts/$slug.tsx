import { LoaderFunction, useLoaderData } from 'remix';
import invariant from 'tiny-invariant';
import { getPost, Post } from '~/post';

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, "expected param.slug");
  return getPost(params.slug);
};

export default function PostSlug() {
  const post = useLoaderData<Post>();
  return <div dangerouslySetInnerHTML={{ __html: post.html }} />;
}
