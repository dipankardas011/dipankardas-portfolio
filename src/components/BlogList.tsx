import { useState, useMemo } from "react";
import Search from "./Search";
import BlogPostCard from "./BlogPostCard";

interface SerializedPost {
  id: string;
  title: string;
  date: string; // ISO string
  description?: string;
  cover?: string;
  category?: string;
}

interface Props {
  posts: SerializedPost[];
  categories: string[];
}

export default function BlogList({ posts, categories }: Props) {
  const [searchVal, setSearchVal] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      let show = true;
      
      // Search filter
      if (searchVal) {
        const searchLower = searchVal.toLowerCase();
        show = show && (
          post.title.toLowerCase().includes(searchLower) ||
          post.description?.toLowerCase().includes(searchLower) ||
          false
        );
      }
      
      // Category filter
      if (selectedCategory) {
        show = show && post.category === selectedCategory;
      }
      
      return show;
    });
  }, [posts, searchVal, selectedCategory]);

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-20 lg:mb-24">
      {/* Search and Category Filters */}
      <div className="max-w-[848px] mx-auto pb-8 md:pb-16 lg:pb-24">
        <Search
          value={searchVal}
          className="mb-6 lg:mb-8"
          onChange={(value) => setSearchVal(value)}
        />
        
        {categories.length > 0 && (
          <div className="grid grid-cols-2 gap-2.5 md:grid-cols-3 lg:grid-cols-5 lg:gap-4">
            <button
              onClick={() => setSelectedCategory("")}
              className={`flex items-center justify-center w-full px-6 py-2.5 rounded-[32px] border transition-colors duration-300 text-xs leading-none tracking-[var(--tracking-tight)] capitalize md:text-sm md:py-3 lg:text-base lg:px-6 lg:py-3 ${
                selectedCategory === ""
                  ? "border-app-text bg-app-text text-white"
                  : "border-app-gray-200 hover:border-app-gray-300"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className={`flex items-center justify-center w-full px-6 py-2.5 rounded-[32px] border transition-colors duration-300 text-xs leading-none tracking-[var(--tracking-tight)] capitalize md:text-sm md:py-3 lg:text-base lg:px-6 lg:py-3 ${
                  category === selectedCategory
                    ? "border-app-text bg-app-text text-white"
                    : "border-app-gray-200 hover:border-app-gray-300"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.toLowerCase()}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Search Results (if searching) */}
      {searchVal.length > 0 && (
        <div className="mb-12 lg:mb-16">
          {filteredPosts.length > 0 ? (
            <>
              <h2 className="text-xl md:text-2xl font-display text-app-text mb-6 lg:mb-8 tracking-[var(--tracking-tight)]">
                Search results for "{searchVal}"
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredPosts.map((post) => (
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
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-base lg:text-lg text-app-gray-400 tracking-[var(--tracking-tight)]">
                No posts found for "{searchVal}"
                {selectedCategory && ` in category "${selectedCategory}"`}
              </p>
            </div>
          )}
        </div>
      )}

      {/* All Posts */}
      <div>
        <h2 className="text-xl md:text-2xl lg:text-[32px] font-display text-app-text mb-6 lg:mb-10 tracking-[var(--tracking-tight)]">
          {selectedCategory ? `${selectedCategory} posts` : "All posts"}
        </h2>
        <div className="grid grid-cols-1 auto-rows-fr gap-6 p-4 border border-app-gray-200 rounded-2xl md:grid-cols-2 lg:grid-cols-3 lg:gap-8 lg:p-8">
          {(searchVal ? filteredPosts : posts).map((post) => (
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
