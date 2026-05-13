export const TENANT_CONFIG = {
  name: "Distribuidora Manitos",
  phone: "5492352407359",
  defaultMessage:
    "Hola, estuve viendo su catálogo online y quisiera hacer una consulta.",
  commercialMessage:
    "Hola, estuve viendo su catálogo online y me interesa consultar por algunos productos.",
  budgetMessage: "Hola, le comparto el presupuesto solicitado.",
  seo: {
    title: "Distribuidora Manitos | Todo para Mascotas y Jardinería",
    description:
      "En Distribuidora Manitos vas a encontrar el mejor catálogo mayorista y minorista de productos para mascotas.",
    domain: "https://distribuidoramanitos.com",
  },
  storage: {
    cartKey: "manitos_cart",
    clientNameKey: "manitos_cliente_nombre",
    clientPhoneKey: "manitos_cliente_telefono",
  },
};

export const getWhatsAppLink = (message = TENANT_CONFIG.defaultMessage) => {
  return `https://wa.me/${TENANT_CONFIG.phone}?text=${encodeURIComponent(message)}`;
};
