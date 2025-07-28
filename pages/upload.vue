<template>
  <div>
    <h1>Upload a Case PDF</h1>
    <input type="file" @change="handleFile" />
    <p v-if="text"><strong>Extracted Text:</strong> {{ text }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const text = ref('');

const handleFile = async (e) => {
  const file = e.target.files[0];
  const formData = new FormData();
  formData.append('file', file);

  const res = await fetch('/api/upload', {
    method: 'POST',
    body: formData,
  });

  const data = await res.json();
  text.value = data.text;
};
</script>
