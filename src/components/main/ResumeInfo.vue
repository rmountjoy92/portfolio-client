<template>
  <div class="col-12 row q-mt-md">
    <div class="col-12 text-center">
      <q-avatar size="82px">
        <img :src="avatarUrl" />
      </q-avatar>
    </div>
    <div class="col-12 text-center text-h6 text-primary q-mt-md">
      {{ resumeStore.data.info.name }}
    </div>
    <div class="col-12 text-center text-caption text-accent q-mt-sm">
      {{ resumeStore.data.info.title }}
    </div>
    <div class="col-12 q-my-md">
      <q-list bordered separator class="rounded-borders">
        <q-item>
          <q-item-section avatar>
            <q-avatar icon="fas fa-map-marker-alt" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-body1 text-muted">
              {{ resumeStore.data.info.location }}
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          :href="resumeStore.data.info.github_profile"
          target="_blank"
          style="text-decoration: none"
          clickable
        >
          <q-item-section avatar>
            <q-avatar icon="fab fa-github" />
          </q-item-section>
          <q-item-section class="text-primary text-body1">
            <q-item-label> rmountjoy92 </q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          :href="'mailto:' + resumeStore.data.info.email"
          target="_blank"
          style="text-decoration: none"
          clickable
        >
          <q-item-section avatar>
            <q-avatar icon="fas fa-envelope" />
          </q-item-section>
          <q-item-section class="text-primary text-body1">
            <q-item-label> Email Me </q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          :href="baseUrl + '/docs'"
          target="_blank"
          style="text-decoration: none"
          clickable
        >
          <q-item-section avatar>
            <q-avatar icon="fas fa-book" />
          </q-item-section>
          <q-item-section class="text-primary text-body1">
            <q-item-label> API Documentation </q-item-label>
            <q-item-label caption>
              This website gets it's data from a FastApi (python) server hosted
              on AWS
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          href="https://github.com/rmountjoy92"
          target="_blank"
          style="text-decoration: none"
          clickable
        >
          <q-item-section avatar>
            <q-avatar icon="fab fa-github-square" />
          </q-item-section>
          <q-item-section class="text-primary text-body1">
            <q-item-label> View this website's code on Github </q-item-label>
            <q-item-label caption>
              It's was made using Vue 3 and Quasar!</q-item-label
            >
          </q-item-section>
        </q-item>

        <q-item @click="pdfGen.getPDF(resumePdfDD)" clickable>
          <q-item-section avatar>
            <q-avatar icon="fas fa-file-pdf" />
          </q-item-section>
          <q-item-section class="text-muted text-body1">
            <q-item-label> View/download this resume as a PDF </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>

    <PdfViewer ref="pdfViewer" />
    <PdfGenerator ref="pdfGen" @generated="(blob) => pdfViewer.open(blob)" />
  </div>
</template>

<script>
import { useResumeStore } from "stores/resume";
import { baseUrl } from "boot/api";
import PdfViewer from "components/global/PdfViewer";
import { computed, ref } from "vue";
import PdfGenerator from "components/global/PdfGenerator";
import { getResumePdf } from "boot/resumePDF";

export default {
  name: "ResumeInfo",
  components: { PdfGenerator, PdfViewer },
  setup() {
    const resumeStore = useResumeStore();
    const pdfViewer = ref(null);
    const pdfGen = ref(null);

    const avatarUrl = baseUrl + resumeStore.data.info.headshot;

    const resumePdfDD = computed(() => {
      return getResumePdf(resumeStore.data);
    });

    return {
      resumeStore,
      avatarUrl,
      baseUrl,
      pdfViewer,
      pdfGen,
      resumePdfDD,
    };
  },
};
</script>

<style scoped></style>
