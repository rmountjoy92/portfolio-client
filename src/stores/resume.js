import { defineStore } from "pinia";
import { api } from "boot/api";

export const useResumeStore = defineStore("resume", {
  state: () => ({
    data: null,
    loading: true,
  }),
  actions: {
    async getResume() {
      const data = await api.get({ endpoint: "" });
      this.data = data;
      this.loading = false;
    },
  },
});
