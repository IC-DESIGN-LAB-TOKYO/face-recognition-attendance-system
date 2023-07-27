<script setup>

</script>
<template>
    <div class="q-pa-sm row items-start q-gutter-md">
        <q-breadcrumbs>
            <q-breadcrumbs-el label="Home" icon="mdi-home-variant-outline" :to="{ name: 'admin.dashboard' }" />
            <q-breadcrumbs-el label="Profile" />
        </q-breadcrumbs>
    </div>
    <div class="row q-pa-md example-row-equal-width">
        <div class="col-3"><q-card class="my-card">
          <img src="https://cdn.quasar.dev/img/mountains.jpg">

          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{ lorem }}
          </q-card-section>
        </q-card>
    </div>
        <div class="col-9">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam illo quia sit unde provident, temporibus ad modi laudantium aperiam nobis doloribus vitae, excepturi in? Ullam qui, distinctio fuga nesciunt optio ut minus tenetur laudantium vel a odit sapiente. Tenetur adipisci, dolore dicta voluptatum officia qui quia veniam aperiam minus aspernatur quae, ad voluptatibus hic explicabo. Voluptas voluptatum totam magni cumque aliquid beatae! Delectus laudantium quae facere rem! Ex at recusandae impedit rerum magni ad ipsum eligendi quasi omnis? Quia autem libero sint iure maiores animi dolorum delectus dolorem ea tempora. Debitis necessitatibus corrupti iusto pariatur ea, eveniet consequuntur nobis odio.</div>
    </div>
</template>