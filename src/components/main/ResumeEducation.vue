<template>
  <div class="col-12 q-my-md">
    <q-list bordered separator class="rounded-borders">
      <q-item
        v-for="(edu, index) in resumeStore.data.education"
        :key="`edu-item-${index}`"
      >
        <q-item-section>
          <q-item-label class="text-primary text-h6">
            {{ edu.school }}
          </q-item-label>
          <q-item-label caption>
            {{ edu.major }}
          </q-item-label>
          <q-item-label caption>
            {{ edu.years }}
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { useResumeStore } from "stores/resume";

export default {
  name: "ResumeEducation",
  setup() {
    const resumeStore = useResumeStore();
    return {
      resumeStore,
    };
  },
};
</script>

<style scoped></style>
