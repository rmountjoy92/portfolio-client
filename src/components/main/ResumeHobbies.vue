<template>
  <div class="col-12 q-my-md">
    <q-list bordered separator class="rounded-borders">
      <q-item
        v-for="(hobby, index) in resumeStore.data.hobbies"
        :key="`hobby-item-${index}`"
      >
        <q-item-section>
          <q-item-label class="text-primary text-h6">
            {{ hobby.name }}
          </q-item-label>
          <q-item-label caption>
            {{ hobby.description }}
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { useResumeStore } from "stores/resume";

export default {
  name: "ResumeHobbies",
  setup() {
    const resumeStore = useResumeStore();
    return {
      resumeStore,
    };
  },
};
</script>

<style scoped></style>
