<template>
    <base-card>
  <form>
    <div class="form-control">
      <label for="email">Email</label>
      <input type="email" id="email" />
    </div>
    <div class="form-control">
      <label for="password">password</label>
      <input type="password" id="password" />
    </div>
    <base-button>Login</base-button>
    <base-button type="button" mode="flat">Signup instead</base-button>
  </form>
    </base-card>
</template>

<script>
import BaseCard from '../../components/ui/BaseCard.vue'

export default {
  components: { BaseCard },


}
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>