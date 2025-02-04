export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser();
  const router = useRouter();

  if(to.meta.middleware?.includes('guest')) {
    return null; //pass
  };

  if (!user.value) {
    return router.push('/sign-in');
  }
  return null; //pass
});