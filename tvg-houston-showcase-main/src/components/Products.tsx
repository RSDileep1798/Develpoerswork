import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Ruler } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  height: string;
  width: string;
  image: string;
  description: string;
  inStock: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Premium Glass Bottle - 500ml",
    price: 12.99,
    height: "9.5 inches",
    width: "3.2 inches",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=500&fit=crop",
    description: "High-quality glass bottle perfect for beverages",
    inStock: true,
  },
  {
    id: 2,
    name: "Stainless Steel Bottle - 750ml",
    price: 24.99,
    height: "10.8 inches",
    width: "3.5 inches",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=500&fit=crop",
    description: "Durable stainless steel construction",
    inStock: true,
  },
  {
    id: 3,
    name: "Eco-Friendly Bottle - 1L",
    price: 18.99,
    height: "11.2 inches",
    width: "3.8 inches",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=500&fit=crop",
    description: "Sustainable and environmentally friendly",
    inStock: true,
  },
  {
    id: 4,
    name: "Designer Bottle - 650ml",
    price: 29.99,
    height: "10.0 inches",
    width: "3.4 inches",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=500&fit=crop",
    description: "Elegant design for premium experiences",
    inStock: true,
  },
  {
    id: 5,
    name: "Sport Bottle - 800ml",
    price: 16.99,
    height: "10.5 inches",
    width: "3.6 inches",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=500&fit=crop",
    description: "Perfect for active lifestyles",
    inStock: true,
  },
  {
    id: 6,
    name: "Luxury Bottle - 500ml",
    price: 34.99,
    height: "9.8 inches",
    width: "3.3 inches",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=500&fit=crop",
    description: "Premium luxury product line",
    inStock: true,
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Our Premium Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of high-quality bottles. All prices in USD with detailed specifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-elegant transition-all duration-300 border-border">
              <CardHeader className="p-0">
                <div className="relative h-64 bg-muted overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {product.inStock && (
                    <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                      In Stock
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2 text-card-foreground">{product.name}</CardTitle>
                <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Ruler className="h-4 w-4" />
                    <span>H: {product.height}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Ruler className="h-4 w-4 rotate-90" />
                    <span>W: {product.width}</span>
                  </div>
                </div>
                
                <div className="text-2xl font-bold text-primary mb-4">
                  ${product.price.toFixed(2)} USD
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full bg-gradient-to-r from-primary to-navy-light hover:opacity-90 transition-opacity">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
