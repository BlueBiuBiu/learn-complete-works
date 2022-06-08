import { defineStore } from 'pinia'

export const useStore = defineStore('user', {
  state: () => {
    return { 
      config: [],
      src: ''
    }
  },
  actions: {
    saveUserConfig(result) {
      this.config = result
    },
    toIframeSrc(result) {
      this.src = result
    }
  },
})