<template>
  <div class="col-12 q-my-md">
    <q-list bordered separator class="rounded-borders">
      <q-item
        v-for="(exp, index) in resumeStore.data.experience"
        :key="`exp-item-${index}`"
        class="q-pt-md"
      >
        <q-item-section>
          <q-item-label class="text-primary text-h6">
            {{ exp.company }}
          </q-item-label>
          <q-item-label caption class="text-accent text-bold">
            {{ exp.title }}
          </q-item-label>
          <q-item-label caption class="text-accent">
            {{ exp.date }}
          </q-item-label>
          <q-item-label caption>
            {{ exp.info }}
          </q-item-label>
          <q-item-label>
            <q-list bordered separator class="rounded-borders q-my-md">
              <q-item dense>
                <q-item-section>
                  <q-item-label class="text-overline text-center text-primary">
                    Duties
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item
                v-for="(duty, index) in exp.duties"
                :key="`exp-duty-${index}`"
              >
                <q-item-section>
                  <q-item-label class="text-muted">
                    {{ duty }}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { useResumeStore } from "stores/resume";

export default {
  name: "ResumeExperience",
  setup() {
    const resumeStore = useResumeStore();
    return {
      resumeStore,
    };
  },
};
</script>

<style scoped></style>
