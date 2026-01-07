import { Heart } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  tag?: string;
  color: "orange" | "pink" | "yellow" | "cyan";
}

const colorClasses = {
  orange: "bg-pop-orange",
  pink: "bg-pop-pink",
  yellow: "bg-accent",
  cyan: "bg-pop-cyan",
};

const ProductCard = ({ name, price, originalPrice, image, tag, color }: ProductCardProps) => {
  return (
    <div className="group relative">
      {/* Card Frame */}
      <div className={`pop-frame ${colorClasses[color]} p-3`}>
        {/* Image Container */}
        <div className="relative overflow-hidden bg-card border-4 border-pop-black">
          <img
            src={image}
            alt={name}
            className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
          />

          {/* Tag */}
          {tag && (
            <div className="absolute top-2 left-2 bg-pop-yellow border-2 border-pop-black px-3 py-1 rotate-[-5deg]">
              <span className="font-display text-sm text-accent-foreground">{tag}</span>
            </div>
          )}

          {/* Favorite Button */}
          <button className="absolute top-2 right-2 p-2 bg-card border-2 border-pop-black opacity-0 group-hover:opacity-100 transition-opacity hover:bg-secondary hover:text-secondary-foreground">
            <Heart className="w-5 h-5" />
          </button>

          {/* Quick Add Overlay */}
          <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button className="w-full btn-pop-primary text-base py-2">
              ADD TO CART!
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="mt-3 text-center">
          <h3 className="font-hand text-lg text-foreground truncate px-2 bg-card border-2 border-pop-black inline-block">
            {name}
          </h3>
          <div className="mt-2 flex items-center justify-center gap-3">
            <span className="price-tag">¥{price}</span>
            {originalPrice && (
              <span className="font-body text-muted-foreground line-through">
                ¥{originalPrice}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Decorative Dots */}
      <div className="absolute -z-10 inset-0 dots-pattern opacity-20" />
    </div>
  );
};

export default ProductCard;
