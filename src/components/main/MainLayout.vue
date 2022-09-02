<template>
  <q-layout view="hHh LpR fFf">
    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-list separator>
        <q-item
          v-for="(s, i) in sections"
          :key="`sidebar-nav-item-${i}`"
          :to="s.route"
          class="text-muted"
          clickable
          v-ripple
          exact
          replace
        >
          <q-item-section avatar>
            <q-icon :name="s.icon" />
          </q-item-section>
          <q-item-section>{{ s.label }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <div v-if="resumeStore.loading" class="fit text-center q-mt-lg">
        <q-spinner-orbit color="primary" size="128px" />
      </div>
      <router-view v-else />
    </q-page-container>
  </q-layout>
</template>

<script>
import { onMounted, ref } from "vue";
import { resumeSections } from "boot/resumeSections";
import { useResumeStore } from "stores/resume";

export default {
  name: "MainLayout",
  setup() {
    const sections = resumeSections;
    const leftDrawerOpen = ref(false);
    const resumeStore = useResumeStore();

    onMounted(() => {
      resumeStore.getResume();
    });

    return {
      resumeStore,
      sections,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>

<style scoped></style>
