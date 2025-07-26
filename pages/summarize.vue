<template>
  <div>
    <h1>Summarize Legal Text</h1>
    <textarea v-model="text" placeholder="Paste your legal text here..." rows="10" cols="80"></textarea>
    <br />
    <button @click="summarizeText">Summarize</button>
    <div v-if="summary">
      <h2>Summary</h2>
      <p>{{ summary }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const text = ref('')
const summary = ref('')

function summarizeText() {
  summary.value = text.value.length > 0
    ? '✅ This is a simulated summary of your legal text.'
    : ''
}
</script>

<style scoped>
textarea {
  width: 100%;
  margin: 1em 0;
}
button {
  padding: 8px 16px;
  background: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
  
