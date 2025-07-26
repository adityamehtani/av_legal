<template>
  <div style="padding: 2rem;">
    <h1>📝 Summarize Legal Text</h1>

    <textarea
      v-model="text"
      placeholder="Paste your legal text here..."
      rows="10"
      style="width: 100%; font-size: 16px; margin: 1em 0;"
    />

    <button @click="summarizeText" style="padding: 0.6em 1.5em; font-size: 16px; background: #007bff; color: white; border: none;">
      Summarize
    </button>

    <div v-if="summary" style="margin-top: 2em;">
      <h2>🔍 Summary</h2>
      <p>{{ summary }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const text = ref('')
const summary = ref('')

function summarizeText() {
  if (!text.value.trim()) {
    summary.value = "❗ Please paste legal text to summarize."
    return
  }

  // Simulated summary - in next step we will call real AI
  summary.value = "✅ This is a simulated summary of your legal text. Real AI summary will be added soon."
}
</script>
