<script setup>
import { ref, computed } from 'vue'
import { useData } from 'vitepress'

const props = defineProps({
  url: {
    type: String,
    required: true
  }
})

const { lang } = useData()
const messages = {
  'fa-IR': { copy: 'کپی لینک', copied: 'کپی شد ✓' },
  'en-US': { copy: 'Copy link', copied: 'Copied ✓' }
}

const t = computed(() => messages[lang.value] ?? messages['en-US'])

const copied = ref(false)

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(props.url)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy text: ', err)
  }
}
</script>

<template>
  <button class="copy-btn" :class="{ copied: copied }" @click="copyToClipboard">
    {{ copied ? t.copied : t.copy }}
  </button>
</template>

<style scoped>
.copy-btn {
  background-color: var(--vp-c-default-soft);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
  padding: 4px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
  transition: all 0.25s ease;
}

.copy-btn:hover {
  background-color: var(--vp-c-brand-1);
  color: #ffffff;
  border-color: var(--vp-c-brand-1);
}

.copy-btn.copied {
  background-color: #10b981;
  color: #ffffff;
  border-color: #10b981;
}
</style>
