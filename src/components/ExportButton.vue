<template>
  <button @click="generatePDF" :disabled="isGenerating" class="export-btn">
    {{ isGenerating ? 'Generazione...' : 'Esporta report (PDF)' }}
  </button>
</template>

<script setup>
import { ref } from 'vue';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import QRCode from 'qrcode';

const isGenerating = ref(false);

async function generatePDF() {
  isGenerating.value = true;

  try {
    // 1. Crea una nuova istanza PDF
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    // 2. Aggiungi titolo
    doc.setFontSize(18);
    doc.text('WebTech Radar – Italia vs Mondo (2025)', pageWidth / 2, 20, { align: 'center' });

    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text('Confronto basato su dati reali: adozione, performance e tendenze nello sviluppo web', 
             pageWidth / 2, 28, { align: 'center' });
    doc.setTextColor(0);

    let currentY = 40;

    // 3. Dati (usa dati statici per coerenza)
    const data = [
      { title: 'Adozione Vue.js', italy: '8%', world: '12%', insight: 'L’Italia è indietro del 33% rispetto alla media globale.' },
      { title: 'Largest Contentful Paint (LCP)', italy: '2.8s', world: '2.3s', insight: 'Il web italiano è più lento del 22% nella percezione del caricamento.' },
      { title: 'Adozione Vite / Bundler moderni', italy: '18%', world: '29%', insight: 'Ancora bassa la diffusione di strumenti di build moderni in Italia.' },
      { title: 'Siti su Cloud/VPS', italy: '32%', world: '47%', insight: 'Il cloud è meno diffuso in Italia, specie tra PMI.' },
      { title: 'Siti conformi WCAG AA', italy: '41%', world: '54%', insight: 'Accessibilità ancora sottovalutata nel mercato italiano.' }
    ];

    // 4. Aggiungi ogni indicatore
    doc.setFontSize(12);
    data.forEach((item, i) => {
      if (currentY > pageHeight - 30) {
        doc.addPage();
        currentY = 20;
      }

      doc.setFont('helvetica', 'bold');
      doc.text(item.title, 20, currentY);
      currentY += 8;

      doc.setFont('helvetica', 'normal');
      doc.text(`Italia: ${item.italy} | Mondo: ${item.world}`, 25, currentY);
      currentY += 6;

      doc.setFontSize(10);
      doc.text(item.insight, 25, currentY, { maxWidth: pageWidth - 50 });
      currentY += 12;
      doc.setFontSize(12);
    });

    // 5. Aggiungi QR code
    const qrDataUrl = await QRCode.toDataURL('https://livedata-id.com', { width: 60 });
    const qrY = currentY + 10;
    doc.addImage(qrDataUrl, 'PNG', pageWidth - 80, qrY, 30, 30);

    // 6. Nota legale
    doc.setFontSize(9);
    doc.setTextColor(120);
    doc.text('Strumento dimostrativo – non costituisce certificazione ufficiale', 
             20, pageHeight - 15);

    // 7. Salva
    doc.save('webtech-radar-italy-world-2025.pdf');
  } catch (error) {
    console.error('Errore generazione PDF:', error);
    alert('Errore durante la generazione del PDF. Vedi console.');
  } finally {
    isGenerating.value = false;
  }
}
</script>

<style scoped>
.export-btn {
  background: #0057a3;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
}
.export-btn:hover:not(:disabled) {
  background: #004488;
}
.export-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>
