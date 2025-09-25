import React from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const { cartItems, updateQuantity, removeFromCart, clearCart, getTotalPrice, getTotalItems } = useCart();

  const handleCheckout = () => {
    // Simulated checkout
    alert(`Checkout completed! Total: $${getTotalPrice().toFixed(2)}`);
    clearCart();
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent className="w-full max-w-md bg-gradient-secondary border-l border-border/50">
        <SheetHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-xl font-bold text-gradient">
              Shopping Cart
            </SheetTitle>
            <Badge variant="secondary" className="bg-primary/20 text-primary">
              {getTotalItems()} items
            </Badge>
          </div>
        </SheetHeader>

        <div className="mt-6 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Add some products to get started!
              </p>
              <Button onClick={onClose} className="btn-hero">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item.id} className="card-glow p-4">
                    <div className="flex gap-3">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg bg-gradient-secondary"
                      />
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm truncate">{item.name}</h4>
                        <p className="text-xs text-muted-foreground">{item.brand}</p>
                        <div className="text-lg font-bold text-primary mt-1">
                          ${item.price.toFixed(2)}
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.id)}
                          className="h-6 w-6 text-destructive hover:text-destructive"
                        >
                          <X className="h-3 w-3" />
                        </Button>

                        <div className="flex items-center gap-1 bg-gradient-card rounded-lg p-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-6 w-6"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          
                          <span className="px-2 text-sm font-medium min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-6 w-6"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-3 pt-3 border-t border-border/30">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal:</span>
                        <span className="font-semibold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              {/* Cart Summary */}
              <div className="card-glow p-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal:</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping:</span>
                  <span className="text-green-500">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax:</span>
                  <span>${(getTotalPrice() * 0.08).toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-gradient">
                    ${(getTotalPrice() + getTotalPrice() * 0.08).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4">
                <Button 
                  onClick={handleCheckout} 
                  className="w-full btn-hero py-3"
                >
                  Checkout Now
                </Button>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    onClick={onClose}
                    className="flex-1 btn-secondary"
                  >
                    Continue Shopping
                  </Button>
                  
                  <Button
                    variant="outline"
                    onClick={clearCart}
                    className="px-4 text-destructive hover:text-destructive border-destructive/30"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};