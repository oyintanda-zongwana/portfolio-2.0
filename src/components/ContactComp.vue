<template>
  <div class="container-six">
    <h1>CONTACT ME @</h1>
    <div class="contact-info">
      <div class="row">
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="contact-item" data-aos="fade-up">
            <div class="circle">
              <i class="las la-phone"></i>
            </div>
            <h4>076 480 1680</h4>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="contact-item" data-aos="fade-up" data-aos-delay="200">
            <div class="circle">
              <i class="lar la-envelope"></i>
            </div>
            <h4>oyintandazongone@gmail.com</h4>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="contact-item" data-aos="fade-up" data-aos-delay="400">
            <div class="circle">
              <i class="las la-home"></i>
            </div>
            <h4>Mfuleni</h4>
          </div>
        </div>
      </div>
    </div>
    <h3 class="description">I'd love to hear from you! Whether you have a project in mind or just want to say hello, feel free to reach out.</h3>
    <form class="contact-form" action="https://formspree.io/f/mzzpbeoj" target="_blank" method="POST">
      <div class="form-group" data-aos="fade-up">
        <input type="text" name="name" id="name" placeholder="Name" required>
      </div>
      <div class="form-group" data-aos="fade-up" data-aos-delay="200">
        <input type="email" name="email" id="email" placeholder="Email" required>
      </div>
      <div class="form-group" data-aos="fade-up" data-aos-delay="400">
        <textarea name="message" id="message" placeholder="Message" required></textarea>
      </div>
      <div class="btn-group" data-aos="fade-up" data-aos-delay="600" >
        <button type="submit" class="submit-btn">Send Message</button>
        <button type="reset" class="submit-btn">Clear</button>
      </div>
    </form>
    <div class="social-links">
      <a href="#" target="_blank"><i class="lab la-linkedin"></i></a>
      <a href="https://github.com/oyintanda-zongwana" target="_blank"><i class="lab la-github"></i></a>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
h1 {
  margin-top: 2em;
  font-size: 2.5rem;
  font-weight: 700;
  color: whitesmoke;
  text-align: center;
}

.container-six {
  /* padding: 1em 2em; */
  background-color: #000;
  color: whitesmoke;
  text-align: center;
}

.contact-info {
  margin-bottom: 3em;
}

.contact-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.circle {
  height: 3em;
  width: 3em;
  background-color: whitesmoke;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border-radius: 50%;
  margin-bottom: 1em;
}

.circle:hover {
  background-color: black;
  color: whitesmoke;
  transition: background-color 0.4s ease;
}

h4 {
  font-size: 1.25rem;
  font-weight: 600;
}

.description {
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 2em;
}

.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group {
  width: 100%;
  margin-bottom: 1.5em;
}

input, textarea {
  width: 100%;
  padding: 1em;
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid whitesmoke;
  background-color: #000;
  color: whitesmoke;
  transition: border-color 0.3s ease;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #29829b;
}

.btn-group {
  display: flex;
  justify-content: center;
  gap: 1em;
}

.submit-btn {
  background-color: whitesmoke;
  color: #000;
  padding: 0.75em 1.5em;
  border: none;
  border-radius: 0.5em;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.submit-btn:hover {
  background-color: #29829b;
  color: whitesmoke;
}

.social-links {
  margin-top: 2em;
}

.social-links a {
  margin: 0 1em;
  font-size: 1.5rem;
  color: whitesmoke;
  transition: transform 0.3s ease;
}

.social-links a :hover {
  transform: scale(1.5);
}
</style>
