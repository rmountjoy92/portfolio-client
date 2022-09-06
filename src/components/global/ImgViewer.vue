<template>
  <q-dialog
    v-model="data.isOpen"
    transition-show="slide-up"
    transition-hide="slide-down"
    persistent
    maximized
  >
    <q-card>
      <q-toolbar>
        <q-toolbar-title class="text-center"> </q-toolbar-title>
        <q-btn
          @click="close"
          icon="fas fa-times"
          dense
          flat
          round
          class="q-ml-sm"
        />
      </q-toolbar>
      <div class="scroll" style="max-height: calc(100vh - 50px)">
        <q-img :src="data.src" />
      </div>
    </q-card>
  </q-dialog>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "ImgViewer",
  setup(props, { expose }) {
    const data = reactive({
      isOpen: false,
      src: "",
    });

    function open(src) {
      data.isOpen = true;
      data.src = src;
    }

    function close() {
      data.isOpen = false;
      data.src = "";
    }

    expose({
      open,
      close,
    });

    return {
      data,
      close,
    };
  },
};
</script>

<style scoped></style>
