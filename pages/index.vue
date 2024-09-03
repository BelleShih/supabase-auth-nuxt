<script setup>
const user = useSupabaseUser();
console.log(user);
</script>

<template>
  <div>
    <div>Home</div>
    <NuxtLink to="/sign-out">sign out</NuxtLink>
  </div>
</template>