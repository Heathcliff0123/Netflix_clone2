<template>
  <div>
    <form @submit.prevent="submit">
      <label>Email</label>
      <input v-model="email" type="text" required />

      <label>Password</label>
      <input v-model="password" type="text" required />
      <div class="submit">
        <button>Submit</button>
      </div>
    </form>

    <p>{{ email }}</p>
    <p>{{ password }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return { email: "", password: "" };
  },
  methods: {
    submit() {
      if (this.email === "1") {
        if (this.password === "1") {
          this.$router.push("/Landing");
        }
      }
    },
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
.submit {
  text-align: center;
}
</style>
