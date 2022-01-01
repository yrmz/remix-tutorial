import { Link } from 'remix';

export const headers = () => {
  return {
    "Cache-Control": "public, max-age=300, s-maxage=3600",
  };
};

export default function AdminIndex() {
  return (
    <p>
      <Link to="new">Create a New Post</Link>
    </p>
  );
}
