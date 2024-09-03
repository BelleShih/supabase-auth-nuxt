<script setup>
const supabase = useSupabaseClient();
const router = useRouter();

definePageMeta({
  middleware: ['guest'],
});

const state = reactive({
  email: '',
  password: ''
});

const signIn = async () => {
  const { error } = await supabase.auth.signInWithPassword({
    email: state.email,
    password: state.password,
  });
  router.push('/');
  if (error) console.log(error);
}
</script>

<template>
  <form @submit.prevent="signIn">
    <input v-model="state.email" type="email" />
    <input v-model="state.password" type="password" />
    <button type="submit">Sign In</button>
    <NuxtLink href="/sign-up">Sign Up</NuxtLink>   
  </form>
</template>