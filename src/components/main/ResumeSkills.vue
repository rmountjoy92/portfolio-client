<template>
  <div class="col-12 q-my-md">
    <q-list bordered separator class="rounded-borders text-muted">
      <q-item
        v-for="(skillType, index) in [
          { label: 'Backend', icon: 'fas fa-server' },
          { label: 'Frontend', icon: 'fas fa-laptop-code' },
          { label: 'Devops', icon: 'fas fa-code' },
          { label: 'Other', icon: 'fas fa-ellipsis-h' },
        ]"
        :key="`skill-type-item-${index}`"
      >
        <q-item-section avatar>
          <q-avatar :icon="skillType.icon" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-body1">
            {{ skillType.label }}
          </q-item-label>
          <q-item-label class="q-my-md">
            <q-chip
              v-for="(skill, index) in skillsByType(
                skillType.label.toLocaleLowerCase()
              )"
              :key="`skill-badge-${index}`"
              :label="skill.name"
              color="primary"
              text-color="white"
              size="14px"
            />
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { useResumeStore } from "stores/resume";

export default {
  name: "ResumeSkills",
  setup() {
    const resumeStore = useResumeStore();

    function skillsByType(t) {
      return resumeStore.data.skills.filter((o) => o.type === t);
    }

    return {
      resumeStore,
      skillsByType,
    };
  },
};
</script>

<style scoped></style>
