import { Document, Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    paddingTop: 20,
    paddingHorizontal: 40,
    paddingBottom: 40,
    fontFamily: 'Helvetica',
    backgroundColor: '#ffffff'
  },

  // Header
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30
  },
  logoContainer: {
    width: 70,
  },
  logo: {
    width: '100%',
    objectFit: 'contain'
  },
  companyDetails: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 10
  },
  companyTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#000'
  },
  companyText: {
    fontSize: 9,
    color: '#000',
    marginBottom: 2
  },
  officialBox: {
    width: 140,
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid',
    padding: 10,
    textAlign: 'center'
  },
  officialTextBig: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000'
  },
  officialTextSmall: {
    fontSize: 8,
    fontWeight: 'bold',
    marginTop: 2,
    textAlign: 'left',
    color: '#000'
  },

  // Section Titles
  sectionTitleContainer: {
    borderTopWidth: 2,
    borderTopColor: '#000',
    borderTopStyle: 'solid',
    marginTop: 15,
    paddingTop: 5,
    marginBottom: 8
  },
  sectionTitleBox: {
    borderLeftWidth: 4,
    borderLeftColor: '#000',
    borderLeftStyle: 'solid',
    paddingLeft: 5
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#000'
  },

  // Boxed Data
  dataBox: {
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  dataCol: {
    width: '32%'
  },
  dataLabel: {
    fontSize: 7,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 2
  },
  dataValue: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 6
  },

  // Table
  tableContainer: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid',
    borderBottomWidth: 0
  },
  tableHeaderGroup: {
    flexDirection: 'row',
    backgroundColor: '#000000',
  },
  th: {
    paddingVertical: 6,
    paddingHorizontal: 4,
    color: '#ffffff',
    fontSize: 8,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  tr: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    borderBottomStyle: 'solid',
  },
  td: {
    paddingVertical: 8,
    paddingHorizontal: 4,
    fontSize: 9,
    textAlign: 'center',
    borderRightWidth: 1,
    borderRightColor: '#000',
    borderRightStyle: 'solid',
    color: '#000'
  },

  // Columns constraints
  colConcept: { width: '35%', textAlign: 'left', paddingLeft: 8 },
  colCategoria: { width: '20%', textAlign: 'left', paddingLeft: 8 },
  colQty: { width: '15%' },
  colUnit: { width: '15%' },
  colSub: { width: '15%', borderRightWidth: 0, fontWeight: 'bold' },

  // Total Box
  totalWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 15
  },
  totalBox: {
    borderWidth: 2,
    borderColor: '#000',
    borderStyle: 'solid',
    backgroundColor: '#f5f5f5',
    padding: 10,
    width: 200,
    alignItems: 'center'
  },
  totalText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000'
  },

  // Obs
  obsBox: {
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid',
    padding: 10,
    minHeight: 50,
    fontSize: 9,
    color: '#000'
  },

  // Footer
  footer: {
    position: 'absolute',
    bottom: 15,
    left: 40,
    right: 40,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  footerText: {
    fontSize: 7,
    color: '#999',
    lineHeight: 1.4
  },
  pageNumber: {
    fontSize: 8,
    color: '#999',
    fontWeight: 'bold'
  }
});

export interface BudgetItem {
  producto_id: number;
  nombre: string;
  categoria?: string;
  precio: number;
  cantidad: number;
}

export interface BudgetData {
  cliente: string;
  fecha: string;
  fechaValidez: string;
  items: BudgetItem[];
  subtotal: number;
  ajusteTexto?: string;
  ajusteValor?: number;
  total: number;
  observaciones: string;
  condicionIva: string;
  localidad?: string;
}

export const BudgetDocument = ({ data }: { data: BudgetData }) => {
  return (
    <Document
      title={`Presupuesto - ${data.cliente}`}
      author="Joaquín Rosas"
      subject="Sistema desarrollado por Joaquín Rosas"
      producer="Desarrollado por Joaquín Rosas"
    >
      <Page size="A4" style={styles.page}>

        {/* Header Block */}
        <View style={styles.headerContainer}>
          <View style={styles.logoContainer}>
            <Image src="/brand/logo.png" style={styles.logo} />
          </View>

          <View style={styles.companyDetails}>
            <Text style={styles.companyTitle}>DISTRIBUIDORA MANITOS</Text>
            <Text style={styles.companyText}>Chacabuco, Buenos Aires</Text>
            <Text style={styles.companyText}>WhatsApp: +54 9 2352 40 7359 | Email: ventas@manitos.com</Text>
          </View>

          <View style={styles.officialBox}>
            <Text style={styles.officialTextBig}>PRESUPUESTO</Text>
            <Text style={styles.officialTextBig}>OFICIAL</Text>
            <View style={{ marginTop: 4 }}>
              <Text style={styles.officialTextSmall}>FECHA: {data.fecha}</Text>
              <Text style={styles.officialTextSmall}>VÁLIDO HASTA: {data.fechaValidez}</Text>
            </View>
          </View>
        </View>

        {/* Datos Del Cliente */}
        <View style={styles.sectionTitleContainer}>
          <View style={styles.sectionTitleBox}>
            <Text style={styles.sectionTitle}>DATOS DEL CLIENTE</Text>
          </View>
        </View>

        <View style={styles.dataBox}>
          <View style={styles.dataCol}>
            <Text style={styles.dataLabel}>RAZÓN SOCIAL / NOMBRE</Text>
            <Text style={styles.dataValue}>{data.cliente || 'Consumidor Final'}</Text>
          </View>
          <View style={styles.dataCol}>
            <Text style={styles.dataLabel}>LOCALIDAD</Text>
            <Text style={styles.dataValue}>{data.localidad || '-'}</Text>
          </View>
          <View style={styles.dataCol}>
            <Text style={styles.dataLabel}>CONDICIÓN IVA</Text>
            <Text style={styles.dataValue}>{data.condicionIva?.toUpperCase() || 'CONSUMIDOR FINAL'}</Text>
          </View>
        </View>

        {/* Detalle Del Servicio */}
        <View style={styles.sectionTitleContainer}>
          <View style={styles.sectionTitleBox}>
            <Text style={styles.sectionTitle}>DETALLE DEL PEDIDO</Text>
          </View>
        </View>

        <View style={styles.tableContainer}>
          {/* Header Row */}
          <View style={styles.tableHeaderGroup}>
            <Text style={[styles.th, styles.colConcept]}>CONCEPTO</Text>
            <Text style={[styles.th, styles.colCategoria]}>CATEGORÍA</Text>
            <Text style={[styles.th, styles.colQty]}>CANT</Text>
            <Text style={[styles.th, styles.colUnit]}>PRECIO U.</Text>
            <Text style={[styles.th, styles.colSub]}>SUBTOTAL</Text>
          </View>

          {/* Rows */}
          {data.items.map((item, index) => (
            <View style={styles.tr} key={index}>
              <Text style={[styles.td, styles.colConcept, { fontWeight: 'bold' }]}>
                {item.nombre}
              </Text>
              <Text style={[styles.td, styles.colCategoria]}>{item.categoria || '-'}</Text>
              <Text style={[styles.td, styles.colQty]}>{item.cantidad}</Text>
              <Text style={[styles.td, styles.colUnit]}>$ {item.precio.toLocaleString('es-AR')}</Text>
              <Text style={[styles.td, styles.colSub]}>$ {(item.precio * item.cantidad).toLocaleString('es-AR')}</Text>
            </View>
          ))}
        </View>

        {/* Subtotal y Ajustes: Solo mostrar si hay un ajuste aplicado */}
        {data.ajusteTexto && (
          <View style={styles.totalWrapper}>
            <View style={[styles.totalBox, { backgroundColor: '#ffffff', borderWidth: 1, borderBottomWidth: 0, width: 220, alignItems: 'stretch' }]}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 }}>
                <View style={{ width: 100 }}>
                  <Text style={{ fontSize: 9, color: '#666', fontWeight: 'bold' }}>SUBTOTAL:</Text>
                </View>
                <Text style={{ fontSize: 10, fontWeight: 'bold', flex: 1, textAlign: 'right' }}>$ {data.subtotal.toLocaleString('es-AR')}</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 }}>
                <View style={{ width: 100 }}>
                  <Text style={{ fontSize: 9, color: '#666', fontWeight: 'bold', textTransform: 'uppercase' }}>{data.ajusteTexto}:</Text>
                </View>
                <Text style={{
                  fontSize: 10,
                  fontWeight: 'bold',
                  color: data.ajusteValor ? (data.ajusteValor < 0 ? '#ff0000' : '#28a745') : '#000',
                  flex: 1,
                  textAlign: 'right'
                }}>
                  {data.ajusteValor && data.ajusteValor > 0 ? '+' : ''}$ {data.ajusteValor?.toLocaleString('es-AR')}
                </Text>
              </View>
            </View>
          </View>
        )}

        {/* Total General */}
        <View style={styles.totalWrapper}>
          <View style={[styles.totalBox, { width: 220, marginTop: 0 }]}>
            <Text style={[styles.totalText, { fontSize: 14 }]}>TOTAL: $ {data.total.toLocaleString('es-AR')}</Text>
          </View>
        </View>

        {/* Observaciones */}
        <>
          <View style={[styles.sectionTitleContainer, { marginTop: 30 }]}>
            <View style={styles.sectionTitleBox}>
              <Text style={styles.sectionTitle}>OBSERVACIONES</Text>
            </View>
          </View>
          <View style={styles.obsBox}>
            <Text>{data.observaciones?.trim() || "Sin observaciones adicionales."}</Text>
          </View>

          {/* Footer en todas las páginas */}
          <View style={styles.footer} fixed>
            <View style={{ flex: 1 }}>
              <Text style={styles.footerText}>Documento generado electrónicamente por el sistema de gestión de DISTRIBUIDORA MANITOS.</Text>
              <Text style={styles.footerText}>Este documento no es válido como factura. Los precios pueden variar sin previo aviso.</Text>
            </View>
            <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
              `Página ${pageNumber} de ${totalPages} | Generado el ${new Date().toLocaleDateString('es-AR')}`
            )} />
          </View>
        </>

      </Page>
    </Document>
  );
};
