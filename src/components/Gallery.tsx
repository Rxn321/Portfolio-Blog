import { posts } from "../data/posts";

export function Gallery() {
  return (
    <section className="w-full h-screen pt-25 pb-25">
      <div className="w-full h-full overflow-y-auto">
        {/* Photos */}
        <div className="grid grid-cols-[repeat(auto-fill,160px)] justify-center gap-2">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group relative h-[160px] w-[160px]"
            >
              <img
                src={post.image}
                alt={post.title}
                className="block h-full w-full object-cover rounded-md group-hover:scale-90 group-hover:rounded-full group-hover:brightness-110 group-hover:shadow-2xl transition"
              />

              {/* Hover layer */}
                <div
                className="
                    pointer-events-none
                    fixed
                    inset-0
                    z-50
                    flex
                    items-center
                    justify-center
                    pt-25
                    pb-25
                    px-4
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                "
                >
                <div className="relative h-full w-full overflow-hidden rounded-md">
                    {/* Image */}
                    <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-contain"
                    />.

                    {/* Description */}
                    <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-md bg-white/70 px-4 py-3 backdrop-blur-md dark:bg-white/20"
                    >
                    <p className="text-sm">
                        {post.description}
                    </p>
                    </div>

                </div>
                </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;