<template>
  <div style="padding: 2rem; font-family: sans-serif;">
    <h1>📄 Upload PDF to Extract Text</h1>
    <form @submit.prevent="uploadPDF">
      <input type="file" accept="application/pdf" @change="handleFile" />
      <button type="submit">Upload & Extract</button>
    </form>
    <div v-if="extractedText">
      <h2>📑 Extracted Text:</h2>
      <pre>{{ extractedText }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const file = ref(null)
const extractedText = ref('')

const handleFile = (e) => {
  file.value = e.target.files[0]
}

const uploadPDF = async () => {
  if (!file.value) return alert('Please select a PDF')

  const formData = new FormData()
  formData.append('file', file.value)

  const res = await fetch('/api/upload', {
    method: 'POST',
    body: formData,
  })

  const data = await res.json()
  extractedText.value = data.text || 'No text found in PDF.'
}
</script>
