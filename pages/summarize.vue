const response = await $fetch('/api/summarize', {
  method: 'POST',
  body: { text: input.value }
});
data.value = response.summary;
