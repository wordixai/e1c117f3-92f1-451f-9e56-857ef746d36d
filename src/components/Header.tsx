import { ShoppingBag, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [cartCount] = useState(3);

  return (
    <header className="sticky top-0 z-50 bg-pop-pink border-b-4 border-pop-black">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 starburst rounded-full border-4 border-pop-black" />
            <h1 className="font-display text-3xl md:text-4xl text-primary-foreground text-outline">
              POP SHOP
            </h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {["NEW", "TOPS", "BOTTOMS", "ACCESSORIES", "SALE"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-hand text-lg text-primary-foreground hover:text-accent transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Cart & Menu */}
          <div className="flex items-center gap-4">
            <button className="relative p-2 bg-accent border-4 border-pop-black shadow-pop hover:shadow-pop-hover hover:-translate-x-1 hover:-translate-y-1 transition-all">
              <ShoppingBag className="w-6 h-6 text-accent-foreground" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-primary-foreground font-display text-sm rounded-full border-2 border-pop-black flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="md:hidden p-2 bg-pop-orange border-4 border-pop-black">
              <Menu className="w-6 h-6 text-primary-foreground" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
