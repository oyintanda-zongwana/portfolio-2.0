<template>
    <div class="container-five">
      <h1 class="title">Get in Touch</h1>
      <p class="description">I'd love to hear from you! Whether you have a project in mind or just want to say hello, feel free to reach out.</p>
      <form class="contact-form" @submit.prevent="handleSubmit"  action="https://formspree.io/f/mzzpbeoj"
      method="POST">
        <div class="form-group">
          <input type="text" id="name" v-model="formData.name" placeholder="Name" required>
          <label for="name">Name</label>
        </div>
        <div class="form-group">
          <input type="email" id="email" v-model="formData.email" placeholder="Email" required>
          <label for="email">Email</label>
        </div>
        <div class="form-group">
          <textarea id="message" v-model="formData.message" placeholder="Message" required></textarea>
          <label for="message">Message</label>
        </div>
        <button class="submit-btn">Send Message</button>
      </form>
      <div class="social-links">
        <a href="#" target="_blank"><i class="lab la-linkedin"></i></a>
        <a href="https://github.com/oyintanda-zongwana" target="_blank"><i class="lab la-github"></i></a>
      </div>
    </div>
  </template>
  
<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      // Add your form submission logic here
      console.log('Form submitted:', this.formData)
    }
  }
}
</script>
  
<style scoped>
.container-five {
  color: whitesmoke;
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background-color: #000;
  border: 1px solid #333;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.title {
  font-size: 24px;
  font-weight: 900;
  margin-bottom: 10px;
}
.description {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
}
.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form-group {
  margin-bottom: 20px;
}
input, textarea {
width: 100%;
padding: 10px;
font-size: 16px;
  border: none;
  border-bottom: 1px solid #333;
  background-color: #000;
  color: whitesmoke;
}
input:focus, textarea:focus {
  border-bottom: 1px solid whitesmoke;
}
label {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
}
.submit-btn {
  background-color: whitesmoke;
  color: #000;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.submit-btn:hover {
  background-color: whitesmoke;
}
.social-links {
margin-top: 20px;
display: flex;
justify-content: center;
}
.social-links a {
  margin: 0 10px;
  font-size: 24px;
  color: #fff;
}
.social-links a:hover {
  color: #ccc;
}
</style>