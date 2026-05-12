"use client";

import { useState, useEffect } from "react";
import { useCart } from "@/contexts/CartContext";
import { X, Minus, Plus, Trash2, MessageCircle, User, ArrowLeft, ArrowRight } from "lucide-react";
import { getWhatsAppLink, TENANT_CONFIG } from "@/config/constants";

export default function CartSidebar() {
  const { cart, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen, total, showToast } = useCart();
  
  // State for Wizard
  const [step, setStep] = useState<1 | 2>(1);

  // Form State
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [address, setAddress] = useState("");
  const [observations, setObservations] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedName = localStorage.getItem(TENANT_CONFIG.storage.clientNameKey);
      const savedPhone = localStorage.getItem(TENANT_CONFIG.storage.clientPhoneKey);
      if (savedName) setClientName(savedName);
      if (savedPhone) setClientPhone(savedPhone);
    }
  }, []);

  // Reset step when cart opens
  useEffect(() => {
    if (isCartOpen) {
      setStep(1);
    }
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  const handleNextStep = () => {
    if (cart.length === 0) {
      showToast("Tu carrito está vacío");
      return;
    }
    setStep(2);
  };

  const handleSendOrder = () => {
    if (!clientName.trim()) {
      showToast("Por favor, ingresa tu nombre");
      return;
    }

    localStorage.setItem(TENANT_CONFIG.storage.clientNameKey, clientName.trim());
    localStorage.setItem(TENANT_CONFIG.storage.clientPhoneKey, clientPhone.trim());

    if (!paymentMethod) {
      showToast("Por favor, selecciona una forma de pago");
      return;
    }
    
    if (!deliveryMethod) {
      showToast("Por favor, selecciona un método de entrega");
      return;
    }

    if (deliveryMethod === "Envío a domicilio" && !address.trim()) {
      showToast("Por favor, ingresa tu dirección de envío");
      return;
    }

    const productosTexto = cart
      .map((i) => {
        const catTexto = i.categoria && i.categoria !== "General" ? `${i.categoria} - ` : "";
        const subtotal = i.precio * i.cantidad;
        return `• ${catTexto}${i.nombre}\n  Cantidad: ${i.cantidad}\n  Subtotal: $${subtotal.toLocaleString("es-AR")}`;
      })
      .join("\n\n");

    let message = `Hola, le comparto mi pedido realizado desde el catálogo online de ${TENANT_CONFIG.name}.\n\n`;
    
    message += `👤 Cliente\n`;
    message += `• Nombre: ${clientName.trim()}\n`;
    if (clientPhone.trim()) {
      message += `• Teléfono: ${clientPhone.trim()}\n`;
    }
    
    message += `\n🛒 Productos\n${productosTexto}\n`;

    message += `\n📦 Entrega\n`;
    message += `• ${deliveryMethod}\n`;
    if (deliveryMethod === "Envío a domicilio") {
      message += `• Dirección: ${address.trim()}\n`;
    }

    message += `\n💳 Pago\n`;
    message += `• ${paymentMethod}\n`;

    if (observations.trim()) {
      message += `\n📝 Observaciones\n`;
      message += `• ${observations.trim()}\n`;
    }

    message += `\n💰 Total: $${total.toLocaleString("es-AR")}\n\n`;
    message += `Quedo atento a la confirmación del pedido y disponibilidad. Muchas gracias.`;

    window.open(getWhatsAppLink(message), "_blank");
  };

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] animate-in fade-in"
        onClick={() => setIsCartOpen(false)}
      />
      {/* 
        Fix Mobile Viewport Jump: 
        Replaced h-[100dvh] with fixed inset-y-0 h-full to avoid Chrome URL bar jump issues.
      */}
      <div className="fixed inset-y-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[110] flex flex-col animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50 shrink-0">
          <div className="flex items-center gap-3">
            {step === 2 && (
              <button 
                onClick={() => setStep(1)}
                className="p-1.5 -ml-2 text-gray-500 hover:text-primary hover:bg-primary/10 rounded-full transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
            )}
            <h2 className="font-heading font-black text-xl flex items-center gap-2 text-foreground">
              {step === 1 ? "Tu Carrito" : "Completar Pedido"}
            </h2>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Main Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 flex flex-col gap-6 styled-scrollbar">
          
          {step === 1 && (
            <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-left-4">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-gray-400 gap-4">
                  <span className="text-4xl">🛒</span>
                  <p className="font-medium text-center">Tu carrito está vacío.<br/>Agrega productos desde el catálogo.</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 border border-gray-100 rounded-2xl bg-white shadow-sm">
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-1 block">
                          {item.categoria || "General"}
                        </span>
                        <h3 className="font-bold text-sm text-foreground leading-tight mb-2">
                          {item.nombre}
                        </h3>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="font-black text-primary">
                          ${(item.precio * item.cantidad).toLocaleString("es-AR")}
                        </span>
                        
                        <div className="flex items-center bg-gray-50 rounded-lg p-1 border border-gray-100">
                          <button 
                            onClick={() => updateQuantity(item.id, item.cantidad - 1)}
                            className="p-1 hover:bg-white rounded shadow-sm text-gray-600 transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm font-bold">{item.cantidad}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.cantidad + 1)}
                            className="p-1 hover:bg-white rounded shadow-sm text-gray-600 transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-300 hover:text-red-500 transition-colors self-start p-1"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))
              )}
            </div>
          )}

          {step === 2 && cart.length > 0 && (
            <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-right-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <User size={16} />
                </div>
                <h3 className="font-black text-foreground">Datos de Facturación y Envío</h3>
              </div>
              
              <div className="flex flex-col gap-4">
                <div>
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 mb-1 block">
                    Tu Nombre *
                  </label>
                  <input
                    type="text"
                    placeholder="Ingresa tu nombre y apellido"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm font-medium transition-all"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 mb-1 block">
                    Tu Teléfono (Opcional)
                  </label>
                  <input
                    type="tel"
                    placeholder="Ej. 11 1234-5678"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm font-medium transition-all"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 mb-1 block">
                    Forma de pago *
                  </label>
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm font-medium transition-all bg-white"
                  >
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="Efectivo">Efectivo</option>
                    <option value="Transferencia">Transferencia</option>
                    <option value="Acordar con el vendedor">Acordar con el vendedor</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 mb-1 block">
                    Método de entrega *
                  </label>
                  <select
                    value={deliveryMethod}
                    onChange={(e) => setDeliveryMethod(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm font-medium transition-all bg-white"
                  >
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="Retiro por sucursal">Retiro por sucursal</option>
                    <option value="Envío a domicilio">Envío a domicilio</option>
                  </select>
                </div>
                
                {deliveryMethod === "Envío a domicilio" && (
                  <div className="animate-in fade-in slide-in-from-top-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 mb-1 block">
                      Dirección de envío *
                    </label>
                    <input
                      type="text"
                      placeholder="Tu dirección completa"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm font-medium transition-all"
                    />
                  </div>
                )}
                
                <div>
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 mb-1 block">
                    Observaciones (Opcional)
                  </label>
                  <textarea
                    placeholder="Ej. Entregar por la mañana..."
                    value={observations}
                    onChange={(e) => setObservations(e.target.value)}
                    rows={2}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm font-medium transition-all resize-none"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Fixed Footer: Total + Button */}
        {cart.length > 0 && (
          <div className="p-4 md:p-6 bg-white border-t border-gray-100 flex flex-col gap-4 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] shrink-0">
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-500">Total Estimado</span>
              <span className="text-2xl font-black text-foreground">
                ${total.toLocaleString("es-AR")}
              </span>
            </div>
            
            {step === 1 ? (
              <button
                onClick={handleNextStep}
                className="w-full py-4 px-6 bg-primary text-white rounded-xl font-black tracking-widest uppercase text-sm shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3"
              >
                Completar Pedido <ArrowRight size={20} />
              </button>
            ) : (
              <button
                onClick={handleSendOrder}
                className="w-full py-4 px-6 bg-[#25D366] text-white rounded-xl font-black tracking-widest uppercase text-sm shadow-lg shadow-[#25D366]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3"
              >
                <MessageCircle size={20} />
                Enviar por WhatsApp
              </button>
            )}
          </div>
        )}

      </div>
    </>
  );
}
