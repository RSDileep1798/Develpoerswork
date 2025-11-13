import { CheckCircle, Target, Users, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              About TVG Houston
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Leading the way in international trade with commitment to quality, safety, and customer satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                Excellence in Every Delivery
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                TVG Houston has been a trusted name in international trade for over a decade. We specialize in 
                delivering premium quality products to destinations worldwide, ensuring safety, reliability, and 
                excellence at every step.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our commitment to quality and customer satisfaction has made us a preferred partner for businesses 
                across the globe. We understand the importance of timely, safe deliveries and maintain the highest 
                standards in every transaction.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-foreground">Quality Assurance</h4>
                    <p className="text-muted-foreground text-sm">
                      Every product meets international quality standards and undergoes rigorous testing
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                    <Target className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-foreground">Global Reach</h4>
                    <p className="text-muted-foreground text-sm">
                      Delivering to over 50 countries with reliable logistics partners
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-foreground">Customer First</h4>
                    <p className="text-muted-foreground text-sm">
                      Dedicated support team ensuring satisfaction at every step
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-foreground">Continuous Growth</h4>
                    <p className="text-muted-foreground text-sm">
                      Constantly expanding our product range and service capabilities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Countries Served</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">99%</div>
              <div className="text-muted-foreground">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
