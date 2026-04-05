import BlogPostCard from "./BlogPostCard";

interface SerializedPost {
  id: string;
  title: string;
  date: string; // ISO string
  description?: string;
  cover?: string;
}

interface Props {
  posts: SerializedPost[];
}

interface SerializedPost {
  id: string;
  title: string;
  date: string; // ISO string
  description?: string;
  cover?: string;
}

export default function BlogList({ posts }: Props) {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-20 lg:mb-24">
      {/* All Posts */}
      <div>
        <h2 className="text-xl md:text-2xl lg:text-[32px] font-display text-app-text mb-6 lg:mb-10 tracking-[var(--tracking-tight)]">
          All posts
        </h2>
        <div className="grid grid-cols-1 auto-rows-fr gap-6 p-4 border border-app-gray-200 rounded-2xl md:grid-cols-2 lg:grid-cols-3 lg:gap-8 lg:p-8">
          {posts.map((post) => (
            <BlogPostCard
              key={post.id}
              title={post.title}
              date={post.date}
              description={post.description}
              cover={post.cover}
              slug={post.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
