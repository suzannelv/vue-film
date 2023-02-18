<script setup>
</script>

<template>
  <div class="contact container-fluid text-light d-flex p-3 mx-auto flex-column">
    <div class="row d-flex d-wrap contact-form mx-auto align-items-center">
      <div class="col mt-5  ">
          <h1>Contact Us</h1>
          <p>Get a Quick Reply Within 48 Hours!</p>
          <div class="input-group mb-3">
            <!-- entrer username -->
            <input type="text" class="form-control" placeholder="Your Name" aria-label="Username" aria-describedby="basic-addon1" required="required">
          </div>
            <!-- entrer mail -->
          <div class="input-group mb-3">
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
          </div>
          <!-- sélection des sujets -->
          <div class="input-group mb-3">
            <input type="text" class="form-control" aria-label="sujets">
            <button class="btn bg-secondary dropdown-toggle text-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">Suject</button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><a class="dropdown-item" href="#">Your Account</a></li>
              <li><a class="dropdown-item" href="#">VIP Rights</a></li>
              <li><a class="dropdown-item" href="#">Payment</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Others</a></li>
            </ul>
          </div>
          <!-- enter le message -->
           <div class="input-group">
            <textarea class="form-control" aria-label="message" placeholder="Message..."></textarea>
          </div> 
        <!-- bouton pour soumettre -->
          <div class="input-group mt-3">
            <button class="btn btn-submit fw-bold" type="submit">Submit form</button>
          </div>
      </div>
      <!-- les questions les plus posées -->
    <div class="row hot-questions">
      <div class="col mt-5 ">
            <h5>Hot Questions</h5>
            <ul>
              <li><van-icon name="arrow" />How to link email/phone number?</li>
              <li><van-icon name="arrow" />Why I cannot log in to my account?</li>
              <li><van-icon name="arrow" />What are the payment methods available for VIP purchase?</li>
              <li><van-icon name="arrow" />How to join the VIP membership?</li>
              <li><van-icon name="arrow" />Why was my account charged automatically?</li>
              <li><van-icon name="arrow" />How to cancel the automatic renewal?</li>
            </ul>
          </div>
    </div>
      
     
    </div> 
    <div class="diviser-line mt-5 mx-auto"></div>
    <!-- réseaux sociaux -->
    <div class="social text-center mt-4">
       <h4>Follow Us</h4>
       <div class="icons text-light">
        <van-icon name="wechat" class="fs-2 mx-3"/>
        <van-icon name="qq" class="fs-2 mx-3"/>
        <van-icon name="weibo" class="fs-2 mx-3"/>
       </div>
    </div>
   
  </div>
</template> 



<style lang="less" scoped>
 .contact{
   background:url(@/assets/img/fond/collage-fond-film.jpg) no-repeat center fixed;
   background-size: cover;
   height: 100vh;
 .contact-form {
  .btn-submit {
    background-color: var(--primary-color);
  }
 }
  
 }

</style>