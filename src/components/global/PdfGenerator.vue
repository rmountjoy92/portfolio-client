<template>
  <q-dialog persistent v-model="data.loading">
    <q-card>
      <q-card-section>
        <q-spinner-orbit color="primary" size="160px" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { reactive } from "vue";

let pdfMake = require("pdfmake/build/pdfmake.js");
let pdfFonts = require("pdfmake/build/vfs_fonts.js");
pdfMake.vfs = pdfFonts.pdfMake.vfs;

pdfMake.fonts = {
  Roboto: {
    normal:
      "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf",
    bold: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf",
    italics:
      "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf",
    bolditalics:
      "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf",
  },
};

export default {
  name: "PdfGenerator",
  setup(props, { expose, emit }) {
    const data = reactive({
      loading: false,
    });

    function getPDF(dd) {
      data.loading = true;
      const gen = pdfMake.createPdf(dd);
      gen.getBlob((blob) => {
        emit("generated", blob);
        data.loading = false;
      });
    }

    expose({
      getPDF,
    });

    return {
      data,
    };
  },
};
</script>

<style scoped></style>
