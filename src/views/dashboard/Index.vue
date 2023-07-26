<script setup>

</script>
<template>
    <div class="q-pa-sm row items-start q-gutter-md">
        <q-breadcrumbs>
            <q-breadcrumbs-el label="ホーム" icon="mdi-home-variant-outline" :to="{ name: 'admin.dashboard' }" />
            <q-breadcrumbs-el label="コンタクト" />
        </q-breadcrumbs>
    </div>
    <div class="row q-pa-md q-col-gutter-md">
        <div class="col-12">
            <q-card class="my-card">
                <q-card-section>
                    This is example card
                </q-card-section>
            </q-card>
        </div>
        <div class="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
            <q-card class="my-card">
                <q-card-section>
                    This is example card
                </q-card-section>
            </q-card>
        </div>
        <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <q-card class="my-card">
                <q-card-section>
                    This is example card
                </q-card-section>
            </q-card>
        </div>
        <div class="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
            <q-card class="my-card">
                <q-card-section>
                    This is example card
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>