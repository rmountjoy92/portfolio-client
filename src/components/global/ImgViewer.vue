<template>
  <q-dialog
    v-model="data.isOpen"
    transition-show="slide-up"
    transition-hide="slide-down"
    persistent
    maximized
  >
    <q-card>
      <div class="scroll q-pa-md" style="max-height: calc(100vh - 50px)">
        <q-img
          @click="close"
          :src="data.src"
          class="shadow-2 rounded-borders"
        />
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
      let page = document.getElementById("q-app");
      page.style.zoom = "100%";
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
