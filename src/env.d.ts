/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Window {
  __BLOG_DATA__?: {
    posts: Array<{
      id: string;
      title: string;
      date: string;
      description?: string;
      cover?: string;
      category?: string;
    }>;
    categories: string[];
  };
}
