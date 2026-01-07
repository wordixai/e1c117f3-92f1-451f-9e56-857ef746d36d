import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "RETRO BOMBER",
    price: 599,
    originalPrice: 899,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
    tag: "SALE",
    color: "orange" as const,
  },
  {
    id: 2,
    name: "POP ART TEE",
    price: 199,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=500&fit=crop",
    tag: "NEW",
    color: "pink" as const,
  },
  {
    id: 3,
    name: "COMIC HOODIE",
    price: 459,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop",
    color: "yellow" as const,
  },
  {
    id: 4,
    name: "NEON PANTS",
    price: 389,
    originalPrice: 489,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop",
    tag: "HOT",
    color: "cyan" as const,
  },
  {
    id: 5,
    name: "GRAFFITI JACKET",
    price: 799,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=500&fit=crop",
    tag: "LIMITED",
    color: "pink" as const,
  },
  {
    id: 6,
    name: "VINTAGE SNEAKERS",
    price: 699,
    originalPrice: 999,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    tag: "SALE",
    color: "orange" as const,
  },
  {
    id: 7,
    name: "ART PRINT BAG",
    price: 259,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop",
    color: "yellow" as const,
  },
  {
    id: 8,
    name: "FUNKY SUNGLASSES",
    price: 159,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
    tag: "NEW",
    color: "cyan" as const,
  },
];

const ProductGrid = () => {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 dots-pattern-orange opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block relative">
            <h2 className="font-display text-5xl md:text-6xl text-primary text-pop">
              HOT PICKS!
            </h2>
            {/* Comic Effect */}
            <div className="absolute -top-4 -right-8 w-16 h-16 starburst border-2 border-pop-black flex items-center justify-center">
              <span className="font-display text-xs text-accent-foreground">NEW!</span>
            </div>
          </div>
          <p className="font-body text-xl text-muted-foreground mt-4">
            这些宝贝正在疯抢中！
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="btn-pop-secondary text-xl">
            SHOW ME MORE!
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
