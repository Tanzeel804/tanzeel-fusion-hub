import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

export const TermsSection: React.FC = () => {
  return (
    <section id="terms-section" className="py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gradient mb-4">Terms & Conditions</h2>
        <p className="text-lg text-muted-foreground">
          Please read our terms and conditions carefully
        </p>
      </div>

      <Card className="card-glow">
        <CardHeader>
          <CardTitle className="text-gradient">Tanzeel's Store Terms of Service</CardTitle>
          <p className="text-sm text-muted-foreground">Last updated: September 2024</p>
        </CardHeader>
        
        <CardContent>
          <ScrollArea className="h-96 pr-4">
            <div className="space-y-6 text-sm">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">1. Acceptance of Terms</h3>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using Tanzeel's Store, you accept and agree to be bound by the terms 
                  and provision of this agreement. If you do not agree to abide by the above, please do 
                  not use this service.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">2. Use License</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Permission is granted to temporarily download one copy of the materials on Tanzeel's Store 
                  for personal, non-commercial transitory viewing only. This is the grant of a license, not a 
                  transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display</li>
                  <li>attempt to reverse engineer any software contained on the website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">3. Privacy Policy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your privacy is important to us. We collect only the necessary information to provide 
                  our services effectively. We do not sell, trade, or rent your personal identification 
                  information to others. We may collect non-personal identification information about 
                  users whenever they interact with our site.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">4. Product Information</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We strive to provide accurate product information, including descriptions, pricing, 
                  and availability. However, we do not warrant that product descriptions or other 
                  content is accurate, complete, reliable, current, or error-free. All products are 
                  subject to availability and we reserve the right to discontinue any product at any time.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">5. Orders and Payment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All orders are subject to acceptance and availability. We reserve the right to refuse 
                  or cancel orders for any reason. Payment must be received before order processing. 
                  We accept all major credit cards and digital payment methods. All prices are subject 
                  to change without notice.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">6. Shipping and Returns</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We offer worldwide shipping on all orders. Delivery times may vary based on location 
                  and product availability. Returns are accepted within 30 days of purchase in original 
                  condition. Return shipping costs are the responsibility of the customer unless the 
                  item was defective or incorrectly shipped.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">7. Limitation of Liability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall Tanzeel's Store or its suppliers be liable for any damages 
                  (including, without limitation, damages for loss of data or profit, or due to 
                  business interruption) arising out of the use or inability to use the materials 
                  on our website, even if we have been notified orally or in writing of the 
                  possibility of such damage.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">8. Contact Information</h3>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms and Conditions, please contact us at:
                </p>
                <div className="mt-3 space-y-1 text-muted-foreground">
                  <p>Email: support@tanzeelsstore.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
                  <p>Address: 123 Commerce St, San Francisco, CA 94102</p>
                </div>
              </div>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </section>
  );
};