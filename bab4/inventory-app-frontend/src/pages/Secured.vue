// src/pages/Secured.vue

<template>
<q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->
<q-page-container>
<q-page padding>
<h1>This is not secured Page!! <br/> You are not authenticated!</h1>
</q-page>
</q-page-container>
</q-layout>
</template>

<script>
export default {
  name: 'Secured'
}
</script>

<style>
</style>
