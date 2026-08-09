import { posts } from "../data/posts";

export function Gallery() {
  return (
    <section className="w-full h-screen pt-25 pb-25">
      <div className="h-full w-full overflow-y-auto">
        {/* Photos */}
        <div className="grid grid-cols-[repeat(auto-fill,160px)] justify-center gap-2">
          {posts.map((post) => (
            <article key={post.id} className="h-[160px] w-[160px]">
              <img
                src={post.image}
                alt={post.title}
                className="block h-full w-full object-cover rounded-md"
              />
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Gallery;