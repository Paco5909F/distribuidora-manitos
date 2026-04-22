"use client";

import { PDFDownloadLink } from "@react-pdf/renderer";
import { BudgetDocument, type BudgetData } from "./BudgetPDF";
import { FileDown } from "lucide-react";

export default function PDFButton({ data, fileName }: { data: BudgetData, fileName: string }) {
  return (
    <PDFDownloadLink
      document={<BudgetDocument data={data} />}
      fileName={fileName}
    >
      {({ loading, error }) => (
        <button 
          disabled={loading || !!error}
          className="w-full flex items-center justify-center gap-3 py-4 bg-foreground text-white rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-black transition-colors disabled:opacity-50"
        >
          <FileDown size={18} />
          {loading ? 'Generando Archivo...' : 'Generar PDF'}
        </button>
      )}
    </PDFDownloadLink>
  );
}
