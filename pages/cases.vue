<template>
  <div style="padding: 2rem">
    <h1>📁 My Cases</h1>
    <ul>
      <li v-for="caseItem in cases" :key="caseItem.id">
        📝 {{ caseItem.name }} (Uploaded: {{ new Date(caseItem.date).toLocaleString() }})
      </li>
    </ul>
  </div>
</template>

<script setup>
const { data: cases } = await useFetch('/api/cases')
</script>
