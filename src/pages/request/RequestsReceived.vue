<template>
  <section>
    <base-card>
      <header>
        <h2>Requests received</h2>
      </header>
      <ul v-if="hasRequests">
        <request-item v-for="req in receivedRequests" :key="req.id" :email="req.userEmail" :message="req.userMessage"></request-item>
      </ul>
      <h3 v-else>You haven't received any requests yet!</h3>
    </base-card>
  </section>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';


export default {
  components:{
    RequestItem, 
  },
  computed:{
    receivedRequests(){
      return this.$store.getters['requests/requests'];
    },
    hasRequests(){
      return this.$store.getters['requests/hasRequest'];
    }
  }
}

</script>

<style scoped>

</style>