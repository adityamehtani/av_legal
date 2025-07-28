<template>
  <div class="container">
    <h1>⚖️ Live Case Tracker</h1>

    <div class="form-section">
      <label for="caseNumber">Enter Case Number:</label>
      <input v-model="caseNumber" id="caseNumber" placeholder="e.g. WP/1234/2024" />

      <button @click="trackCase">Track Case</button>
    </div>

    <div class="result-section" v-if="caseStatus">
      <h2>📋 Case Status</h2>
      <p><strong>Case:</strong> {{ caseNumber }}</p>
      <p><strong>Status:</strong> {{ caseStatus }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const caseNumber = ref('')
const caseStatus = ref('')

// Fake tracking for now
function trackCase() {
  caseStatus.value = '🟢 Hearing scheduled on August 10, 2025 at Delhi High Court'
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
  padding: 1rem;
}

input {
  margin-top: 0.5rem;
  padding: 0.5rem;
  width: 100%;
  margin-bottom: 1rem;
}

button {
  padding: 0.5rem 1rem;
  background-color: #1a73e8;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.result-section {
  margin-top: 2rem;
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 8px;
}
</style>

