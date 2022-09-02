<template>
  <div class="col-12 q-my-md">
    <q-list bordered separator class="rounded-borders">
      <q-item
        v-for="(project, index) in resumeStore.data.projects"
        :key="`project-item-${index}`"
      >
        <q-item-section>
          <q-item-label class="text-primary text-h6">
            {{ project.name }}
          </q-item-label>
          <q-item-label caption>
            {{ project.description }}
          </q-item-label>
          <q-item-label>
            <q-list bordered separator class="rounded-borders q-my-md">
              <q-item dense>
                <q-item-section>
                  <q-item-label
                    class="text-overline text-center text-secondary"
                  >
                    URLs
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item
                v-for="(url, index) in project.urls"
                :key="`project-url-${index}`"
                :href="url"
                clickable
                type="a"
                target="_blank"
              >
                <q-item-section>
                  <q-item-label class="text-primary">
                    {{ url }}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-item-label>

          <q-item-label>
            <q-list bordered separator class="rounded-borders q-mb-md">
              <q-item dense>
                <q-item-section>
                  <q-item-label
                    class="text-overline text-center text-secondary"
                  >
                    Technologies used
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>
                    <q-chip
                      color="primary"
                      text-color="white"
                      v-for="(t, index) in project.tech_used"
                      :key="`project-t-${index}`"
                      :label="t"
                    />
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-item-label>

          <q-item-label>
            <q-list bordered separator class="rounded-borders q-my-md">
              <q-item dense>
                <q-item-section>
                  <q-item-label
                    class="text-overline text-center text-secondary"
                  >
                    Achievements
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item
                v-for="(a, index) in project.achievements"
                :key="`project-achievement-${index}`"
              >
                <q-item-section>
                  <q-item-label>
                    {{ a }}
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
  name: "ResumeProjects",
  setup() {
    const resumeStore = useResumeStore();
    return {
      resumeStore,
    };
  },
};
</script>

<style scoped></style>
