import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CartProvider } from "@/contexts/CartContext";
import FloatingCartButton from "@/components/cart/FloatingCartButton";
import CartSidebar from "@/components/cart/CartSidebar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <WhatsAppButton />
      <FloatingCartButton />
      <CartSidebar />
    </CartProvider>
  );
}
