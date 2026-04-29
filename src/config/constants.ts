export const COMPANY_CONFIG = {
  phone: "5492352407359",
  defaultMessage: "Hola, estuve viendo su catálogo online y quisiera hacer una consulta.",
  commercialMessage: "Hola, estuve viendo su catálogo online y me interesa consultar por algunos productos. ¿Podrían brindarme información sobre precios y disponibilidad?",
  budgetMessage: "Hola, le comparto el presupuesto solicitado.",
};

export const getWhatsAppLink = (message = COMPANY_CONFIG.defaultMessage) => {
  return `https://wa.me/${COMPANY_CONFIG.phone}?text=${encodeURIComponent(message)}`;
};
