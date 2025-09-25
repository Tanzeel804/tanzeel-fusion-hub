import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Star, Plus, Search, Filter } from 'lucide-react';
import { products } from '@/data/products';
import { useCart, Product } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

export const ProductsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const { addToCart } = useCart();
  const { toast } = useToast();

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'shoes', label: 'Shoes' },
    { value: 'bags', label: 'Bags' },
    { value: 'clothes', label: 'Clothes' },
    { value: 'tech', label: 'Tech' }
  ];

  const sortOptions = [
    { value: 'name', label: 'Name A-Z' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'popular', label: 'Most Popular' }
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'popular':
          return b.rating - a.rating; // Using rating as popularity metric
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const handleAddToCart = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    
    // Confetti effect would go here
    toast({
      title: "Added to cart! 🎉",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) 
            ? 'text-yellow-400 fill-current' 
            : 'text-muted-foreground'
        }`}
      />
    ));
  };

  const groupedProducts = useMemo(() => {
    const grouped: { [key: string]: Product[] } = {};
    
    if (selectedCategory === 'all') {
      categories.slice(1).forEach(cat => {
        grouped[cat.label] = filteredAndSortedProducts.filter(p => p.category === cat.value);
      });
    } else {
      const categoryLabel = categories.find(c => c.value === selectedCategory)?.label || 'Products';
      grouped[categoryLabel] = filteredAndSortedProducts;
    }
    
    return grouped;
  }, [filteredAndSortedProducts, selectedCategory]);

  return (
    <section id="categories-start" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gradient mb-4">Our Products</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover our carefully curated collection of premium products across multiple categories
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search products or brands..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-gradient-card border-border/30"
            />
          </div>

          {/* Category Filter */}
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-48 bg-gradient-card border-border/30">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Sort */}
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-52 bg-gradient-card border-border/30">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="text-muted-foreground text-sm">
          Showing {filteredAndSortedProducts.length} products
        </div>
      </div>

      {/* Products Grid by Category */}
      {Object.keys(groupedProducts).length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold mb-2">No products found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filters</p>
        </div>
      ) : (
        Object.entries(groupedProducts).map(([categoryName, categoryProducts]) => (
          categoryProducts.length > 0 && (
            <div key={categoryName} className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gradient">{categoryName}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categoryProducts.map(product => (
                  <Card key={product.id} className="product-card group cursor-pointer">
                    <CardHeader className="pb-3">
                      <div className="aspect-square bg-gradient-secondary rounded-lg mb-3 overflow-hidden">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="space-y-1">
                        <Badge variant="secondary" className="text-xs">
                          {product.brand}
                        </Badge>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {product.name}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pb-3">
                      <div className="flex items-center gap-1 mb-2">
                        {renderStars(product.rating)}
                        <span className="text-sm text-muted-foreground ml-1">
                          ({product.rating})
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {product.description}
                      </p>
                    </CardContent>

                    <CardFooter className="pt-0">
                      <div className="flex items-center justify-between w-full">
                        <div className="text-2xl font-bold text-gradient">
                          ${product.price}
                        </div>
                        <Button
                          onClick={(e) => handleAddToCart(product, e)}
                          className="btn-hero group"
                          size="sm"
                        >
                          <Plus className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
                          Add to Cart
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          )
        ))
      )}
    </section>
  );
};