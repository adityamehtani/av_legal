<template>
  <div class="container">
    <h1>🔍 Track Your Case</h1>

    <input
      v-model="caseNumber"
      type="text"
      placeholder="Enter Case Number"
    />
    <button @click="trackCase">Track Case</button>

    <div v-if="status">
      <h3>📋 Case Status:</h3>
      <p>{{ status }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const caseNumber = ref('')
const status = ref('')

async function trackCase() {
  if (!caseNumber.value) {
    status.value = '⚠️ Please enter a case number.'
    return
  }

  const response = await $fetch('/api/cases', {
    method: 'POST',
    body: { caseNumber: caseNumber.value },
  })

  status.value = response.status
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
