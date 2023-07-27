<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      icon: ref(true),
    }
  }
}
</script>
<template>
    <!-- <div> -->
        <q-dialog v-model="icon" class="full-width row wrap justify-start items-start content-start">
          <q-card>
            <q-card-section class="row items-center q-pb-none">
              <div class="text-h6">Title</div>
              <q-space />
              <q-btn icon="close" flat round dense v-close-popup />
            </q-card-section>
            <q-separator dark />
            <q-card-section>
                Start creating your amazing application!
            </q-card-section>
            <q-separator dark />
            <q-card-section>
                <div class="text-h6">Footer</div>
            </q-card-section>
          </q-card>
        </q-dialog>
    <!-- </div> -->
</template>