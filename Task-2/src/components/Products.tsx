import { useState, useEffect } from 'react';
import productsData from '../../public/data/products.json';

export const Products = () => {
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("What's New");
  const [visibleCount, setVisibleCount] = useState(4);

  const categories = [
    "What's New", "Articles", "Whitepapers", "Case Studies",
    "Strategy Papers", "News & Media", "Videos", "Newsletter"
  ];

  useEffect(() => {
    // Simulate loading for the animation effect
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Reset visible count when category changes
  useEffect(() => {
    setVisibleCount(4);
  }, [selectedCategory]);

  // For demonstration, map 'What's New' to all products or let filtering work
  const filteredProducts = selectedCategory === "What's New"
    ? productsData
    : productsData.filter(p => p.category === selectedCategory);

  const displayedProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  return (
    <section className="py-24 bg-white" id="products">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">

        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-[2.5rem] m-0 font-light text-secondary ">
            Latest at <strong className="font-extrabold text-[#111827]">eGov</strong>
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-4 mb-16 ">
          {categories.map(category => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-[15px] font-semibold transition-all duration-300 border ${isActive
                  ? 'bg-[#00c2cb] text-white border-[#00c2cb] shadow-md'
                  : 'bg-white text-secondary border-secondary/40 hover:border-secondary hover:bg-gray-50'
                  }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24">
            <div className="w-12 h-12 border-4 border-gray-200 border-t-[#00c2cb] rounded-full animate-spin mb-4"></div>
            <p className="text-secondary/70 font-medium animate-pulse">Loading latest updates...</p>
          </div>
        ) : (
          <>
            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                  {displayedProducts.map((product, index) => (
                    <article
                      key={product.id}
                      className="bg-[#ecf6fb] rounded-[28px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.15)] flex flex-col h-full animate-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Image */}
                      <div className="h-56 overflow-hidden relative">
                        <img
                          src={product.thumbnail}
                          alt={product.title}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-8 flex flex-col flex-grow">
                        <h3 className="text-[1.15rem] font-bold text-secondary mb-6 leading-snug">
                          {product.title}
                        </h3>

                        {/* Meta (Author & Date) */}
                        <div className="mt-auto mb-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] font-medium text-secondary/80">
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                            {product.authors}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                            {product.date}
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-2">
                          {product.tags.map((tag, i) => (
                            <span key={i} className="bg-white px-4 py-1.5 rounded-md text-[13px] font-semibold text-secondary shadow-sm">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {hasMore && (
                  <div className="text-center mt-6">
                    <button
                      onClick={() => setVisibleCount(prev => prev + 4)}
                      className="px-8 py-3 bg-transparent border-2 border-[#00c2cb] text-[#00c2cb] font-semibold rounded-full hover:bg-[#00c2cb] hover:text-white transition-colors duration-300"
                    >
                      See More
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-20 bg-[#f8fbfe] rounded-3xl border border-dashed border-gray-300">
                {/* No Results State */}
                <div className="text-5xl mb-4 opacity-50">📰</div>
                <h3 className="text-2xl font-bold text-secondary mb-2">No updates found</h3>
                <p className="text-secondary/60 max-w-md mx-auto">
                  We don't have any entries for "{selectedCategory}" yet. Check back later!
                </p>
              </div>
            )}
          </>
        )}

      </div>
    </section>
  );
};
