interface Props {
  title: string;
  date: string; // ISO string for serialization
  description?: string;
  cover?: string;
  slug?: string;
  href?: string;
  featured?: boolean;
  showIcon?: boolean;
}

export default function BlogPostCard({
  title,
  date,
  description,
  cover,
  slug,
  href,
  featured = false,
  showIcon = true,
}: Props) {
  const link = href || `/blog/${slug}/`;
  const dateObj = new Date(date);
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <a
      href={link}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener" : undefined}
      className="block group h-full"
    >
      <article
        className={`h-full flex flex-col overflow-hidden transition-transform duration-300 group-hover:-translate-y-1 ${
          featured ? "md:col-span-2 lg:col-span-3" : ""
        }`}
      >
        {cover && (
          <div
            className={`bg-app-surface overflow-hidden rounded-2xl mb-4 lg:mb-6 ${
              featured
                ? "aspect-[2.07] lg:aspect-[2.43]"
                : "aspect-[1.48] xl:aspect-[1.04]"
            }`}
          >
            <img
              src={cover}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        )}
        <div className="flex-1 flex flex-col">
          <time className="text-xs lg:text-base font-medium text-app-gray-400 tracking-[var(--tracking-tight)] mb-2 lg:mb-4">
            {formattedDate}
          </time>
          <div className="flex items-start gap-2 mb-2.5 lg:mb-4">
            <h3
              className={`font-display text-app-text leading-none tracking-[var(--tracking-tight)] flex-1 ${
                featured ? "text-xl lg:text-[32px]" : "text-sm lg:text-2xl"
              }`}
            >
              {title}
            </h3>
            {showIcon && (
              <div className="flex items-center justify-center p-0.5 lg:p-1 rounded bg-app-surface-alt flex-shrink-0 mt-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 lg:w-4 lg:h-4 text-app-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </div>
            )}
          </div>
          {description && (
            <p
              className={`text-app-gray-500 leading-[1.3] tracking-[var(--tracking-tight)] line-clamp-3 ${
                featured ? "text-base lg:text-xl" : "text-sm lg:text-xl"
              }`}
            >
              {description}
            </p>
          )}
        </div>
      </article>
    </a>
  );
}
