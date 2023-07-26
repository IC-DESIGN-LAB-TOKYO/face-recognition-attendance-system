<script setup>

import Header from '@/views/layout/Header.vue'
import Footer from '@/views/layout/Footer.vue'

</script>

<template>
    <q-layout view="hHh LpR lff">

        <!-- HEADER -->
        <Header></Header>

        <q-page-container>
            <RouterView v-slot="{ Component }">
                <template v-if="Component">
                    <Transition name="fade">
                        <div class="fit row min-height-fit">
                            <Suspense>
                                <!-- main content -->
                                <component :is="Component"></component>

                                <!-- loading state -->
                                <template #fallback>
                                    Loading...
                                </template>
                            </Suspense>
                        </div>
                    </Transition>
                </template>
            </RouterView>
        </q-page-container>

        <!-- FOOTER -->
        <Footer></Footer>

    </q-layout>
</template>

<style scoped></style>
