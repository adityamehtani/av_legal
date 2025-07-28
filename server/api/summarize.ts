<template>
  <div style="padding: 2rem;">
    <h2>Summarize a Legal Document</h2>
    <input type="file" @change="handleFileUpload" />
    <button @click="summarizeText" :disabled="!uploadedText">Summarize</button>

    <div v-if="summary">
      <h3>Summary:</h3>
      <p>{{ summary }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useFetch } from '#app'

const uploadedText = ref('')
const summary = ref('')

function handleFileUpload(event) {
  const file = event.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = () => {
    uploadedText.value = reader.result
  }
  reader.readAsText(file)
}

async function summarizeText() {
  const { data, error } = await useFetch('/api/summarize', {
    method: 'POST',
    body: { text: uploadedText.value }
  })

  if (error.value) {
    alert('Error summarizing')
    return
  }

  summary.value = data.value.summary
}
</script>
