<template>
  <div class="row">
    <div class="col-12 row">
      <div class="col-12 text-right">
        <q-btn
          v-if="!apiResponseViewerOpen"
          @click="
            apiResponseViewer.open();
            apiResponseViewerOpen = true;
          "
          label="show api response"
          color="accent"
          flat
          dense
          no-caps
        />
        <q-btn
          v-if="apiResponseViewerOpen"
          @click="
            apiResponseViewer.close();
            apiResponseViewerOpen = false;
          "
          label="hide api response"
          color="accent"
          flat
          dense
          no-caps
        />
      </div>
      <div
        v-if="section.label !== 'Info'"
        class="col-12 text-h6 text-primary text-center"
      >
        <q-icon :name="section.icon" class="q-mr-sm" />
        {{ section.label }}
      </div>

      <APIResponseViewer ref="apiResponseViewer" :section="section" />

      <ResumeInfo v-if="section.label === 'Info'" />
      <ResumeSkills v-if="section.label === 'Skills'" />
      <ResumeEducation v-if="section.label === 'Education'" />
      <ResumeExperience v-if="section.label === 'Experience'" />
      <ResumeProjects v-if="section.label === 'Projects'" />
      <ResumeHobbies v-if="section.label === 'Hobbies'" />
      <ResumeReferences v-if="section.label === 'References'" />
    </div>

    <div class="col-12 row">
      <div v-if="prevSection" class="col text-accent q-mt-md">
        <q-btn
          :to="prevSection.route"
          :icon-right="prevSection.icon"
          :label="prevSection.label"
          icon="fas fa-caret-left"
          flat
          dense
        />
      </div>

      <div v-if="nextSection" class="col text-accent text-right q-mt-md">
        <q-btn
          :to="nextSection.route"
          :icon="nextSection.icon"
          :label="nextSection.label"
          icon-right="fas fa-caret-right"
          flat
          dense
        />
      </div>
    </div>
  </div>
</template>

<script>
import ResumeInfo from "components/main/ResumeInfo";
import { computed, ref } from "vue";
import { useResumeStore } from "stores/resume";
import ResumeSkills from "components/main/ResumeSkills";
import ResumeEducation from "components/main/ResumeEducation";
import ResumeExperience from "components/main/ResumeExperience";
import ResumeProjects from "components/main/ResumeProjects";
import ResumeHobbies from "components/main/ResumeHobbies";
import ResumeReferences from "components/main/ResumeReferences";
import APIResponseViewer from "components/main/APIResponseViewer";

export default {
  name: "ResumeSection",
  components: {
    APIResponseViewer,
    ResumeReferences,
    ResumeHobbies,
    ResumeProjects,
    ResumeExperience,
    ResumeEducation,
    ResumeSkills,
    ResumeInfo,
  },
  props: {
    section: Object,
    sections: Array,
    index: Number,
  },
  setup(props) {
    const resumeStore = useResumeStore();

    const nextSection = computed(() => {
      return props.index !== props.sections.length
        ? props.sections[props.index + 1]
        : null;
    });
    const prevSection = computed(() => {
      return props.index !== 0 ? props.sections[props.index - 1] : null;
    });

    const apiResponseViewer = ref(null);
    const apiResponseViewerOpen = ref(false);

    return {
      nextSection,
      prevSection,
      resumeStore,
      apiResponseViewer,
      apiResponseViewerOpen,
    };
  },
};
</script>

<style scoped></style>
