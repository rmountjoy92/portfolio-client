<template>
  <div class="col-12 q-my-md">
    <q-list bordered separator class="rounded-borders">
      <q-item
        v-for="(reference, index) in resumeStore.data.references"
        :key="`reference-item-${index}`"
      >
        <q-item-section>
          <q-item-label class="text-primary text-h6">
            {{ reference.name }}
          </q-item-label>
          <q-item-label caption>
            {{ reference.title }}
          </q-item-label>
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
          <q-item-label> Request references contact info </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { useResumeStore } from "stores/resume";

export default {
  name: "ResumeReferences",
  setup() {
    const resumeStore = useResumeStore();
    return {
      resumeStore,
    };
  },
};
</script>

<style scoped></style>
