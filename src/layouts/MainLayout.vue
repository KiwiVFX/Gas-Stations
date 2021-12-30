<template>
       <q-layout view="lHh lpr lFf" class="shadow-2 rounded-borders">
      <q-header bordered class="bg-white text-primary">
        <q-tabs no-caps active-color="primary" indicator-color="transparent" class="text-grey" v-model="tab">
          <q-tab name="paz" label="פז" @click="changeProvider('paz')" />
          <q-tab name="sonol" label="סונול" @click="changeProvider('sonol')" />
          <q-tab name="delek" label="דלק" @click="changeProvider('delek')" />
          <q-tab name="dor" label="דור" @click="changeProvider('dor')" />
          <q-tab name="other" label="אחר" @click="changeProvider('other')" />
        </q-tabs>
      </q-header>

    <!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

// import EssentialLink from 'components/EssentialLink.vue'

// const linksList = [
//   {
//     title: 'Docs',
//     caption: 'quasar.dev',
//     icon: 'school',
//     link: 'https://quasar.dev'
//   },
//   {
//     title: 'Github',
//     caption: 'github.com/quasarframework',
//     icon: 'code',
//     link: 'https://github.com/quasarframework'
//   },
//   {
//     title: 'Discord Chat Channel',
//     caption: 'chat.quasar.dev',
//     icon: 'chat',
//     link: 'https://chat.quasar.dev'
//   },
//   {
//     title: 'Forum',
//     caption: 'forum.quasar.dev',
//     icon: 'record_voice_over',
//     link: 'https://forum.quasar.dev'
//   },
//   {
//     title: 'Twitter',
//     caption: '@quasarframework',
//     icon: 'rss_feed',
//     link: 'https://twitter.quasar.dev'
//   },
//   {
//     title: 'Facebook',
//     caption: '@QuasarFramework',
//     icon: 'public',
//     link: 'https://facebook.quasar.dev'
//   },
//   {
//     title: 'Quasar Awesome',
//     caption: 'Community Quasar projects',
//     icon: 'favorite',
//     link: 'https://awesome.quasar.dev'
//   }
// ];


import { defineComponent, ref } from 'vue'


export default defineComponent({
  name: 'MainLayout',

  components: {
    // EssentialLink
  },

  setup () {
    // const tab = ref('paz')
    // const allOpenGasStations = ref(false)

    return {
      // tab
      // allGasStations,
      // allOpenGasStations
      // essentialLinks: linksList,
      // leftDrawerOpen,
      // toggleLeftDrawer () {
      //   leftDrawerOpen.value = !leftDrawerOpen.value
      // }
    }
  },
  computed: {
    tab(){

      return this.$store.getters["example/provider"];
   
    }
  },
  methods: {
    changeProvider(provider) {
      // console.log(provider)
        this.$store.commit("example/CHANGE_PROVIDER", provider)
        this.$router.push("/");
    }
  }
})
</script>
