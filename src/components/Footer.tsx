import { Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-pop-black text-primary-foreground border-t-4 border-pop-yellow">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 starburst rounded-full border-2 border-pop-yellow" />
              <h4 className="font-display text-2xl text-pop-yellow">POP SHOP</h4>
            </div>
            <p className="font-body text-muted-foreground">
              让艺术走进生活，让时尚成为态度。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-hand text-xl text-pop-pink mb-4">SHOP</h5>
            <ul className="space-y-2 font-body">
              {["New Arrivals", "Best Sellers", "Sale Items", "Collections"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-pop-yellow transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h5 className="font-hand text-xl text-pop-cyan mb-4">HELP</h5>
            <ul className="space-y-2 font-body">
              {["FAQ", "Shipping", "Returns", "Contact Us"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-pop-yellow transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h5 className="font-hand text-xl text-pop-orange mb-4">FOLLOW US</h5>
            <div className="flex gap-4">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 bg-card border-4 border-pop-yellow flex items-center justify-center hover:bg-pop-yellow hover:text-accent-foreground transition-colors group"
                >
                  <Icon className="w-5 h-5 text-foreground group-hover:text-accent-foreground" />
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="font-body text-sm text-muted-foreground mb-2">订阅获取最新资讯</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2 bg-card border-4 border-pop-yellow border-r-0 font-body text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
                <button className="px-4 py-2 bg-pop-yellow text-accent-foreground font-hand border-4 border-pop-yellow hover:bg-pop-orange transition-colors">
                  GO!
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t-2 border-muted text-center">
          <p className="font-body text-sm text-muted-foreground">
            © 2024 POP SHOP. All rights reserved. Made with ❤️ and lots of colors.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
