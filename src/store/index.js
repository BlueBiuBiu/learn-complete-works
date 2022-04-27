import { defineStore } from 'pinia'

export const useStore = defineStore('user', {
  state: () => {
    return { 
      config: []
    }
  },
  actions: {
    saveUserConfig(result) {
      this.config = result
    },
  },
})