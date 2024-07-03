<template>
    <footer>
      <p>Copy Right &#169; {{ year }} By ONZ Dev Studios</p>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        year: new Date().getFullYear()
      }
    },
    mounted() {
      setInterval(() => {
        const newYear = new Date().getFullYear();
        if (newYear > this.year) {
          this.year = newYear;
        }
      }, 1000 * 60 * 60 * 24); // Check every 24 hours
    }
  }
  </script>
  <style scoped>
  footer {
    color: whitesmoke;
  }
  </style>