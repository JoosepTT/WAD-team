<template>
  <div class="contacts-page">
    <div class="contact-card">
      <div class="contact-title">
        <h1>Contact Us</h1>
      </div>
      <div class="contact-content">
        <div class="contact-info">
          <h2>Get in Touch</h2>
          <p>Email: info@wadteam.ee</p>
          <p>Phone: +372 123 4567</p>
          <p>Address: Tartu Ülikool, Delta centre</p>
          <p>Follow us on social media:</p>
          <ul class="social-links">
            <li><a href="#" target="_blank">Instagram - </a></li>
            <li><a href="#" target="_blank">LinkedIn - </a></li>
            <li><a href="#" target="_blank">GitHub - </a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'ContactsView'
}
</script>

<style scoped>
.contacts-page {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 80vh;
  padding: 120px 20px 60px;
  background-color: rgb(203, 187, 159);
}

.contact-card {
  background-color: #925454;
  border-radius: 20px;
  box-shadow: -20px 0 40px rgba(0, 0, 0, 0.3), 20px 0 40px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 900px;
  overflow: hidden;
  color: white;
  font-family: 'American Typewriter', serif;
}

.contact-title {
  text-align: center;
  padding: 40px 20px 30px;
  background: rgba(0, 0, 0, 0.1);
}

.contact-title h1 {
  font-size: 48px;
  margin: 0;
  color: white;
}

.contact-content {
  padding: 40px;
  display: flex;
  justify-content: center;
}

.contact-info {
  width: 100%;
  max-width: 600px;
  text-align: center;
}

.contact-info h2 {
  font-size: 32px;
  margin-bottom: 30px;
}

.contact-info p {
  font-size: 22px;
  margin: 15px 0;
  line-height: 1.5;
}

.social-links {
  list-style: none;
  padding: 0;
  margin: 30px 0 0;
  display: flex;
  justify-content: center;
  gap: 40px;
}

.social-links a {
  color: white;
  text-decoration: none;
  font-size: 20px;
  border-bottom: 1px solid transparent;
  transition: border-bottom 0.3s;
}

.social-links a:hover {
  border-bottom: 1px solid white;
}

/* Mobiiilivaade */
@media (max-width: 768px) {
  .contact-content {
    padding: 30px;
  }

  .contact-title h1 {
    font-size: 40px;
  }

  .contact-info {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .contact-title h1 {
    font-size: 36px;
  }

  .contact-info p {
    font-size: 20px;
  }

  .social-links {
    flex-direction: column;
    gap: 20px;
  }
}
</style>