<template>
  <div class="radar-card">
    <h3>{{ data.title }}</h3>
    <div class="comparison">
      <div class="country italy">
        <span class="label">Italia</span>
        <span class="value">{{ data.italy }}{{ data.unit }}</span>
      </div>
      <div class="country world">
        <span class="label">Mondo</span>
        <span class="value">{{ data.world }}{{ data.unit }}</span>
      </div>
    </div>
    <p class="source">Fonte: {{ data.source }}</p>
    <p class="insight">{{ data.insight }}</p>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.radar-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  transition: transform 0.2s;
}
.radar-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.08);
}
.radar-card h3 {
  font-size: 1.25rem;
  margin-bottom: 1.25rem;
  color: #111;
}
.comparison {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
}
.country {
  flex: 1;
  text-align: center;
  padding: 0.75rem;
  border-radius: 8px;
  background: #f0f5ff;
}
.country.italy {
  background: #e6f0ff;
  border-left: 4px solid #0057a3;
}
.country.world {
  background: #f5f5f5;
  border-left: 4px solid #777;
}
.label {
  display: block;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
}
.value {
  display: block;
  font-size: 1.4rem;
  font-weight: 700;
}
.source {
  font-size: 0.8rem;
  color: #888;
  margin-top: 1rem;
  font-style: italic;
}
.insight {
  font-size: 0.95rem;
  color: #333;
  margin-top: 0.75rem;
  line-height: 1.5;
}
</style>
