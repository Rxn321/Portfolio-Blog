export interface Post {
  id: string;
  title: string;
  date: string;
  thumbnail: string;
  image: string;
  description: string;
}

// Note to self: Run imgOptimizer to optimize images and generate thumbnails before adding new posts to this


export const posts: Post[] = [
    {
    id: "cypress",
    title: "Snowboarding on Cypress Mountain",
    date: "2025-11-23",
    thumbnail: "/posts/optimized/cypress-thumb.webp",
    image: "/posts/photos/cypress.webp",
    description: "Snowboarding at Cypress Mountain on a winter day.",
  },
    {
    id: "hollyburn",
    title: "Hollyburn rocket on Hollyburn Mountain",
    date: "2026-01-24",
    thumbnail: "/posts/optimized/hollyburn-thumb.webp",
    image: "/posts/photos/hollyburn.webp",
    description: "A winter hike carrying hollyburn rocket onto Hollyburn Mountain.",
  },
    {
    id: "joffreLake",
    title: "Joffre Lake",
    date: "2026-06-09",
    thumbnail: "/posts/optimized/joffreLake-thumb.webp",
    image: "/posts/photos/joffreLake.webp",
    description: "A scenic view of Joffre Lake during the summer months.",
  },
    {
    id: "richmond",
    title: "Richmond",
    date: "2026-05-01",
    thumbnail: "/posts/optimized/richmond-thumb.webp",
    image: "/posts/photos/richmond.webp",
    description: "A beautiful view of Richmond during the spring season.",
  },
    {
    id: "quebec",
    title: "Quebec",
    date: "2026-05-02",
    thumbnail: "/posts/optimized/quebec-thumb.webp",
    image: "/posts/photos/quebec.webp",
    description: "A stunning view of Quebec during the autumn season.",
  },
    {
    id: "moab",
    title: "Moab",
    date: "2026-06-12",
    thumbnail: "/posts/optimized/moab-thumb.webp",
    image: "/posts/photos/moab.webp",
    description: "Our second campsite in Moab otw to IREC 2026.",
  },
    {
    id: "abiquiqui",
    title: "Abiquiu Lake",
    date: "2026-06-13",
    thumbnail: "/posts/optimized/abiquiqui-thumb.webp",
    image: "/posts/photos/abiquiqui.webp",
    description: "Our third campsite in Abiquiu Lake.",
  },
  {
    id: "irec1",
    title: "IREC",
    date: "2026-06-17",
    thumbnail: "/posts/optimized/irec1-thumb.webp",
    image: "/posts/photos/irec1.webp",
    description: "A group photo with the Canadian teams at IREC 2026.",
  },
    {
    id: "irec2",
    title: "IREC",
    date: "2026-06-18",
    thumbnail: "/posts/optimized/irec2-thumb.webp",
    image: "/posts/photos/irec2.webp",
    description: "Larping at IREC 2026.",
  },
    {
    id: "aso",
    title: "Aso volcano",
    date: "2026-07-09",
    thumbnail: "/posts/optimized/aso-thumb.webp",
    image: "/posts/photos/aso.webp",
    description: "This lake near the Aso volcano looks better than the actual volcano.",
  },
].sort((a, b) => b.date.localeCompare(a.date));