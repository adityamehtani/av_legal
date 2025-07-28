<template>
  <div class="container">
    <h1>📢 Case Alerts</h1>

    <input
      v-model="caseNumber"
      type="text"
      placeholder="Enter your Case Number"
    />
    <button @click="subscribe">Subscribe</button>

    <div v-if="message">
      <h3>📬 Alert:</h3>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const caseNumber = ref('')
const message = ref('')

function subscribe() {
  if (!caseNumber.value) {
    message.value = '⚠️ Please enter a case number.'
    return
  }

  // Simulate an alert
  message.value = `🔔 Alert for ${caseNumber.value}: Hearing is tomorrow at 10:00 AM in Delhi HC`
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  text-align: center;
}

input {
  padding: 10px;
  width: 60%;
  margin-bottom: 10px;
}

button {
  padding: 10px 20px;
  cursor: pointer;
}

p {
  font-weight: bold;
  margin-top: 10px;
}
</style>
