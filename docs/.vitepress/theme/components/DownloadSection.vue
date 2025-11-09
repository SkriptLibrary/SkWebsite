<template>
  <div class="download-wrapper">
    <div class="container">
      <!-- Header -->
      <div class="header">
        <h1 class="title">Downloads</h1>
        <p class="subtitle">Get the latest version or explore previous releases</p>
      </div>

      <!-- Latest Build -->
      <div class="latest-card">
        <div class="latest-header">
          <div class="latest-badge">
            <span class="badge-dot"></span>
            Latest Release
          </div>
        </div>
        
        <div class="latest-body">
          <div class="latest-left">
            <h2 class="version">{{ latest.version }}</h2>
            <div class="meta-list">
              <div class="meta-item">
                <svg class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span>{{ formatDate(latest.date) }}</span>
              </div>
              <div class="meta-item">
                <svg class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
                <span>{{ latest.notes }}</span>
              </div>
            </div>
          </div>

          <div class="latest-actions">
            <a :href="latest.url" download class="btn-primary">
              <svg class="icon-btn" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download
            </a>
          </div>
        </div>
      </div>

      <!-- Previous Releases -->
      <div class="section-header">
        <h3 class="section-title">Previous Releases</h3>
      </div>

      <div class="builds-grid">
        <div v-for="build in olderBuilds" :key="build.version" class="build-card">
          <div class="build-top">
            <h4 class="build-version">{{ build.version }}</h4>
            <span class="build-date">{{ formatDate(build.date) }}</span>
          </div>
          <p class="build-notes">{{ build.notes }}</p>
          <div class="build-footer">
            <a :href="build.url" download class="btn-sm-primary">
              <svg class="icon-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const builds = ref([
  { version: 'v0.1.1', date: '2025-11-09', notes: 'Creation of the main skript.', url: 'https://github.com/SkriptLibrary/SkLibrary/releases/download/v0.1.1/skLibrary-v0.1.1.sk' }
])

const sortedBuilds = computed(() =>
  [...builds.value].sort((a, b) => new Date(b.date) - new Date(a.date))
)

const latest = computed(() => sortedBuilds.value[0])
const olderBuilds = computed(() => sortedBuilds.value.slice(1))

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  })
}
</script>

<style scoped>
.download-wrapper {
  min-height: 100vh;
  padding: 3rem 1.5rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

/* Header */
.header {
  margin-bottom: 2.5rem;
}

.title {
  font-size: 2rem;
  font-weight: 600;
  color: #f9fafb;
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.02em;
}

.subtitle {
  font-size: 0.9375rem;
  color: #9ca3af;
  margin: 0;
  font-weight: 400;
}

/* Latest Build Card */
.latest-card {
  background: #18181b;
  border: 1px solid #27272a;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 3rem;
  transition: border-color 0.2s ease;
}

.latest-card:hover {
  border-color: #3f3f46;
}

.latest-header {
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid #27272a;
}

.latest-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fbbf24;
  text-transform: uppercase;
  letter-spacing: 0.025em;
}

.badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #fbbf24;
}

.latest-body {
  padding: 1.75rem 1.5rem;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2rem;
  align-items: start;
}

.latest-left {
  min-width: 0;
}

.version {
  font-size: 1.875rem;
  font-weight: 600;
  color: #f9fafb;
  margin: 0 0 1rem 0;
  letter-spacing: -0.02em;
}

.meta-list {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  color: #a1a1aa;
  font-size: 0.875rem;
}

.icon {
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
  stroke-width: 2;
  color: #71717a;
}

.latest-actions {
  display: flex;
  gap: 0.75rem;
  flex-shrink: 0;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.5rem;
  border-radius: 8px;
  background: #fbbf24;
  color: #18181b;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background 0.15s ease;
}

.btn-primary:hover {
  background: #f59e0b;
}

.icon-btn {
  width: 1rem;
  height: 1rem;
  stroke-width: 2;
}

/* Section Header */
.section-header {
  margin-bottom: 1.25rem;
}

.section-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: #71717a;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0;
}

/* Builds Grid */
.builds-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}

.build-card {
  background: #18181b;
  border: 1px solid #27272a;
  border-radius: 10px;
  padding: 1.25rem;
  transition: all 0.2s ease;
}

.build-card:hover {
  border-color: #3f3f46;
  transform: translateY(-2px);
}

.build-top {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.75rem;
  gap: 1rem;
}

.build-version {
  font-size: 1.125rem;
  font-weight: 600;
  color: #f9fafb;
  margin: 0;
}

.build-date {
  font-size: 0.75rem;
  color: #71717a;
  white-space: nowrap;
}

.build-notes {
  font-size: 0.875rem;
  color: #a1a1aa;
  margin: 0 0 1rem 0;
  line-height: 1.5;
  min-height: 2.625rem;
}

.build-footer {
  display: flex;
  gap: 0.5rem;
}

.btn-sm-primary {
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background: #27272a;
  border: 1px solid #3f3f46;
  color: #e4e4e7;
  font-size: 0.8125rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.15s ease;
}

.btn-sm-primary:hover {
  background: #3f3f46;
  border-color: #52525b;
}

.icon-sm {
  width: 0.875rem;
  height: 0.875rem;
  stroke-width: 2;
}

/* Responsive */
@media (max-width: 768px) {
  .download-wrapper {
    padding: 2rem 1rem;
  }

  .header {
    margin-bottom: 2rem;
  }

  .title {
    font-size: 1.75rem;
  }

  .subtitle {
    font-size: 0.875rem;
  }

  .latest-card {
    margin-bottom: 2.5rem;
  }

  .latest-header {
    padding: 1rem 1.25rem;
  }

  .latest-body {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    padding: 1.25rem;
  }

  .version {
    font-size: 1.5rem;
    margin-bottom: 0.875rem;
  }

  .meta-list {
    gap: 0.5rem;
  }

  .meta-item {
    font-size: 0.8125rem;
  }

  .latest-actions {
    width: 100%;
  }

  .btn-primary {
    width: 100%;
    justify-content: center;
    padding: 0.75rem 1.5rem;
  }

  .builds-grid {
    grid-template-columns: 1fr;
    gap: 0.875rem;
  }

  .build-card {
    padding: 1rem;
  }

  .build-top {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
    margin-bottom: 0.625rem;
  }

  .build-version {
    font-size: 1rem;
  }
}
</style>