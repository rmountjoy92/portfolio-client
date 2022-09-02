<template>
  <div class="q-pa-md row">
    <div class="col-12 col-md-6 col-lg-5 col-xl-4">
      <q-card flat bordered>
        <q-tabs class="lt-md" active-color="primary">
          <q-route-tab
            v-for="(s, i) in sections"
            :key="`route-tab-${i}`"
            :icon="s.icon"
            :label="s.label"
            :to="s.route"
            class="text-muted"
            exact
            replace
            ripple
          />
        </q-tabs>
        <q-tab-panels :model-value="tab" animated>
          <q-tab-panel
            v-for="(s, i) in sections"
            :key="`tab-panel-${i}`"
            :name="s.route"
          >
            <ResumeSection :section="s" :index="i" :sections="sections" />
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script>
import { resumeSections } from "boot/resumeSections";
import { useRoute } from "vue-router/dist/vue-router";
import { computed } from "vue";
import ResumeSection from "components/main/ResumeSection";

export default {
  name: "ResumePage",
  components: { ResumeSection },
  setup() {
    const route = useRoute();
    const sections = resumeSections;

    const tab = computed(() => {
      return route.path;
    });

    return {
      sections,
      tab,
    };
  },
};
</script>

<style scoped></style>
