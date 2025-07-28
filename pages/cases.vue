<template>
  <div style="padding: 2rem;">
    <h1>📂 Case Manager</h1>

    <input type="file" @change="handleFileUpload" />
    <p v-if="fileName">✅ Uploaded: {{ fileName }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const fileName = ref('')

function handleFileUpload(event) {
  const file = event.target.files[0]
  if (file) {
    fileName.value = file.name
    // Later: send file to AI and show summary
  }
}
</script>
