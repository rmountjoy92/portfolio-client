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
                  <q-item-label class="text-accent">
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
                  <q-item-label class="text-muted">
                    {{ a }}
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
                    Screenshots
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>
                    <q-carousel
                      v-model="data.slides[index]"
                      transition-prev="slide-right"
                      transition-next="slide-left"
                      animated
                      swipeable
                      control-color="primary"
                      navigation
                      padding
                      arrows
                      height="300px"
                    >
                      <q-carousel-slide
                        v-for="(p, index) in project.screenshots"
                        :key="`project-screenshot-${index}`"
                        :name="p"
                        class="column no-wrap flex-center"
                      >
                        <img
                          @click="imgViewer.open(screenshotUrl(p))"
                          style="width: 100%"
                          :src="screenshotUrl(p)"
                          class="rounded-borders cursor-pointer shadow-2"
                        />
                      </q-carousel-slide>
                    </q-carousel>
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

    <ImgViewer ref="imgViewer" />
  </div>
</template>

<script>
import { useResumeStore } from "stores/resume";
import { baseUrl } from "boot/api";
import { onMounted, reactive, ref } from "vue";
import ImgViewer from "components/global/ImgViewer";

export default {
  name: "ResumeProjects",
  components: { ImgViewer },
  setup() {
    const resumeStore = useResumeStore();
    const imgViewer = ref(null);

    const data = reactive({
      slides: {},
    });

    function screenshotUrl(p) {
      return `${baseUrl}${p}`;
    }

    onMounted(() => {
      resumeStore.data.projects.forEach((prj, i) => {
        data.slides[i] = prj.screenshots[0];
      });
    });

    return {
      resumeStore,
      screenshotUrl,
      data,
      imgViewer,
    };
  },
};
</script>

<style scoped></style>
