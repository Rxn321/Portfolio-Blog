import { posts } from "../data/posts";

export function BlogGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {posts.map((post) => (
        <article key={post.id}>
          <img src={post.image} alt={post.title} />
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </article>
      ))}
    </div>
  );
}