<script setup></script>
<template>
    <div class="q-pa-sm row items-start q-gutter-md">
        <q-breadcrumbs>
            <q-breadcrumbs-el label="ホーム" icon="mdi-home-variant-outline" :to="{ name: 'admin.dashboard' }" />
            <q-breadcrumbs-el label="Employee" />
        </q-breadcrumbs>
    </div>
    <div class="full-width row wrap justify-start items-start content-start">
        <div class="q-px-md row">
            <q-toolbar>
                <q-toolbar-title class="page-ttl text-h1">
                    Employee
                </q-toolbar-title>
            </q-toolbar>
        </div>
        <div class="full-width row q-px-md q-mt-md">
            <div class="col-12">
                <q-card class="common-card">
                    <q-card-section class="row justify-between items-center q-py-md  q-px-lg">
                        <div class="common-card-ttl">Employee List</div>
                    </q-card-section>
                    <q-card-section class="q-px-none">
                        
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </div>
</template>