<script setup>
definePageMeta({
  middleware: ['guest'],
});

const state = reactive({
  email: '',
  password: ''
});

const supabase = useSupabaseClient()

const signUp = async () => {
  const { error } = await supabase.auth.signUp({
    email: state.email,
    password: state.password,
  })
  if (error) console.log(error)
};
</script>

<template>
  <form @submit.prevent="signUp">
    <input v-model="state.email" type="email" />
    <input v-model="state.password" type="password" />
    <button type="submit" @click="signUp">Sign Up</button>
    <NuxtLink href="/sign-in">Sign In</NuxtLink>   
  </form>
</template>