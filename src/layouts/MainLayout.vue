<template>
  <q-layout view="lHh lpr lFf" class="shadow-2 rounded-borders">
    <q-header bordered class="bg-white text-primary">
      <q-tabs
        no-caps
        active-color="primary"
        indicator-color="transparent"
        class="text-grey"
        v-model="tab"
      >
        <q-tab name="paz" label="פז" @click="changeProvider('paz')" />
        <q-tab name="sonol" label="סונול" @click="changeProvider('sonol')" />
        <q-tab name="delek" label="דלק" @click="changeProvider('delek')" />
        <q-tab name="dor" label="דור" @click="changeProvider('dor')" />
        <q-tab name="other" label="אחר" @click="changeProvider('other')" />
      </q-tabs>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {},

  setup() {
    return {};
  },
  computed: {
    tab() {
      return this.$store.getters["example/provider"];
    },
  },
  methods: {
    changeProvider(provider) {
      this.$store.commit("example/CHANGE_PROVIDER", provider);
      this.$router.push("/");
    },
  },
});
</script>
