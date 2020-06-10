<template>
  <div>
    <base-top></base-top>
    <div class="contact">
      <div class="container">
        <div class="agile-contact-form">
          <div class="col-md-6 contact-form-left">
            <div class="w3layouts-contact-form-top">
              <h3>Get in touch</h3>
              <p>Pellentesque eget mi nec est tincidunt accumsan. Proin fermentum dignissim justo, vel euismod justo sodales vel. In non condimentum mauris. Maecenas condimentum interdum lacus, ac varius nisl dignissim ac. Vestibulum euismod est risus, quis convallis nisi tincidunt eget. Sed ultricies congue lacus at fringilla.</p>
            </div>
            <div class="agileits-contact-address">
              <ul>
                <li>
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  <span>+1 234 567 8901</span>
                </li>
                <li>
                  <i class="fa fa-phone fa-envelope" aria-hidden="true"></i>
                  <span>
                    <a href="mailto:example@email.com">mail@example.com</a>
                  </span>
                </li>
                <li>
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                  <span>Eiusmod Tempor inclore Place,Kingsport 56777.</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 contact-form-right">
            <div class="contact-form-top">
              <h3>Send us a message</h3>
            </div>
            <div class="agileinfo-contact-form-grid">
              <form action="#" method="post">
                <input type="text" name="Name" placeholder="Name" required />
                <input type="email" name="Email" placeholder="Email" required />
                <input type="text" name="Telephone" placeholder="Telephone" required />
                <textarea name="Message" placeholder="Message" required></textarea>
                <button class="btn1">Submit</button>
              </form>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>

        <div class="w3agile-map">
          <h3>Find us here</h3>
          <iframe src="javascript:;" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
