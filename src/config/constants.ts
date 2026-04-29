export const COMPANY_CONFIG = {
  phone: "5492352407359",
  defaultMessage: "Hola, me contacto desde la tienda online. Me gustaría hacer una consulta.",
  budgetMessage: "Hola, le comparto el presupuesto solicitado.",
};

export const getWhatsAppLink = (message = COMPANY_CONFIG.defaultMessage) => {
  return `https://wa.me/${COMPANY_CONFIG.phone}?text=${encodeURIComponent(message)}`;
};
