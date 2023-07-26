<script setup>

import {ref} from 'vue'

const leftDrawerOpen = ref(true)
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const menuList = [
  {
    icon: 'inbox',
    label: 'Dashboard',
    separator: true,
    path: '/dashboard'
  },
  {
    icon: 'mdi-account-group',
    label: 'Employee',
    separator: true,
    path: '/employees'
  },
  {
    icon: 'mdi-cog-outline',
    label: 'Settings',
    separator: true,
    path: '/settings'
  },
]

</script>
<template>
    <q-header bordered class="bg-primary text-white">
        <q-toolbar>
          <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
            <q-toolbar-title>
                <q-avatar>
                    <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
                </q-avatar>
                Title
            </q-toolbar-title>
        </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
        <q-scroll-area class="fit">
            <q-list>
  
              <template v-for="(menuItem, index) in menuList" :key="index">
                <router-link :to="menuItem.path">
                    <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
                        <q-item-section avatar>
                          <q-icon :name="menuItem.icon" />
                        </q-item-section>
                        <q-item-section>
                          {{ menuItem.label }}
                        </q-item-section>
                      </q-item>
                </router-link>
                <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
              </template>
  
            </q-list>
          </q-scroll-area>
    </q-drawer>

</template>