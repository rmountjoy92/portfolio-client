<template>
  <q-slide-transition>
    <div v-show="data.visible" class="col-12 q-my-md">
      <q-card flat bordered>
        <q-card-section class="text-center text-overline q-pa-sm text-accent">
          <q-icon name="fas fa-server" />
          API Response
        </q-card-section>
        <q-card-section style="max-height: 200px" class="scroll">
          <q-markdown :src="apiResponse" />
        </q-card-section>
        <q-card-section class="text-center q-mt-lg">
          <q-btn
            :href="docsUrl"
            type="a"
            target="_blank"
            icon="fas fa-book"
            label="view in api docs"
            outline
            color="secondary"
          />
        </q-card-section>
      </q-card>
    </div>
  </q-slide-transition>
</template>

<script>
import { useResumeStore } from "stores/resume";
import { computed, reactive } from "vue";
import { baseUrl } from "boot/api";

export default {
  name: "APIResponseViewer",
  props: {
    section: Object,
  },
  setup(props, { expose }) {
    const resumeStore = useResumeStore();
    const data = reactive({
      visible: false,
    });

    const apiResponse = computed(() => {
      let resp = {};
      resp[props.section.model] = resumeStore.data[props.section.model];
      return ["```js", JSON.stringify(resp, null, 4), "```"].join("\n");
    });

    const docsUrl = computed(() => {
      return `${baseUrl}/docs#/Resume/${props.section.apiDocUrl}`;
    });

    function open() {
      data.visible = true;
    }

    function close() {
      data.visible = false;
    }

    expose({
      open,
      close,
    });

    return {
      data,
      apiResponse,
      docsUrl,
    };
  },
};
</script>

<style scoped></style>
