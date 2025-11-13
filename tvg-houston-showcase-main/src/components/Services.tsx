import { Truck, Package, Shield, HeadphonesIcon, Globe2, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Truck,
    title: "Global Shipping",
    description: "Fast and reliable shipping to over 50 countries worldwide with full tracking capabilities",
  },
  {
    icon: Package,
    title: "Custom Packaging",
    description: "Professional packaging solutions ensuring your products arrive in perfect condition",
  },
  {
    icon: Shield,
    title: "Quality Control",
    description: "Rigorous quality checks and certifications meeting international standards",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock customer support in multiple languages for your convenience",
  },
  {
    icon: Globe2,
    title: "International Trade",
    description: "Expertise in cross-border commerce with complete documentation handling",
  },
  {
    icon: Clock,
    title: "Express Delivery",
    description: "Priority shipping options for urgent orders with guaranteed delivery times",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for all your international trading needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-navy-light rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
