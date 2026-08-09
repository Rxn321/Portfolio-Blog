export interface Post {
  id: string;
  title: string;
  date: string;
  image: string;
  description: string;
}

export const posts: Post[] = [
  {
    id: "test-1",
    title: "Tokyo",
    date: "2026-08-09",
    image: "/posts/tokyo.webp",
    description: "Walking through Tokyo at night.",
  },
  {
    id: "sunset-2",
    title: "Sunset",
    date: "2026-08-08",
    image: "/posts/sunset.webp",
    description: "A quiet evening by the ocean.",
  },
];