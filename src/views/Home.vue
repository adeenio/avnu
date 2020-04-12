<template>
  <div>
   <User/>
  </div>
</template>

<script>
// @ is an alias to /src
import User from '@/components/User.vue'

export default {
  name: 'home',
  components: {
   User,
  }
}
</script>
