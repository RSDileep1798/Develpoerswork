import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Globe, Award } from "lucide-react";

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent-foreground rounded-full text-sm font-semibold mb-6">
              Premium Quality Products Since 2010
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-navy-light to-primary bg-clip-text text-transparent leading-tight">
            TVG Houston
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Your Trusted Partner in International Trade
          </p>
          
          <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            We deliver premium quality products worldwide with guaranteed safety and excellence. 
            Experience the best in international commerce with TVG Houston.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              onClick={scrollToProducts}
              size="lg"
              className="bg-gradient-to-r from-primary to-navy-light hover:opacity-90 transition-opacity text-lg px-8 py-6 shadow-elegant"
            >
              Browse Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Us
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-16">
            <div className="p-6 rounded-lg bg-card border border-border hover:shadow-elegant transition-shadow">
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-card-foreground">Global Delivery</h3>
              <p className="text-muted-foreground text-sm">
                Safe and secure delivery to destinations worldwide
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border hover:shadow-elegant transition-shadow">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-card-foreground">Quality Assured</h3>
              <p className="text-muted-foreground text-sm">
                Premium products with international quality standards
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border hover:shadow-elegant transition-shadow">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-card-foreground">Trusted Partner</h3>
              <p className="text-muted-foreground text-sm">
                Years of excellence in international trade
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
