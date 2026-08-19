export interface Post {
  id: string;
  title: string;
  date: string;
  thumbnail: string;
  image: string;
  description: string;
}

export const posts: Post[] = [
  {
    id: "test-1",
    title: "IREC",
    date: "2026-08-09",
    thumbnail: "/posts/optimized/irec1-thumb.webp",
    image: "/posts/irec1.jpg",
    description: "kajdjkawbdjkawdjkb kjsdakjhdkahw",
  },
]