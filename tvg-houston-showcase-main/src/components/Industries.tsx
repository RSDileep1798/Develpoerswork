import { Factory, Briefcase, Home, Utensils, Stethoscope, ShoppingBag } from "lucide-react";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Supplying quality materials and products to manufacturers worldwide",
  },
  {
    icon: Briefcase,
    title: "Corporate",
    description: "Premium corporate gifts and branded merchandise solutions",
  },
  {
    icon: Home,
    title: "Retail",
    description: "Direct-to-consumer and B2B retail distribution channels",
  },
  {
    icon: Utensils,
    title: "Food & Beverage",
    description: "Specialized packaging and containers for the F&B industry",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "Medical-grade containers and packaging solutions",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    description: "Fulfillment and packaging services for online retailers",
  },
];

const Industries = () => {
  return (
    <section id="industries" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Industries We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted partner across diverse sectors with specialized solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="p-8 bg-card border border-border rounded-xl hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">{industry.title}</h3>
                <p className="text-muted-foreground">{industry.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
