<template>
  <div class="contact container mt-5">
    <h1>Contact Us</h1>
    <p>Get a Quick Reply Within 48 Hours!</p>
    <div class="input-group mb-3">
   
      <input type="text" class="form-control" placeholder="Your Name" aria-label="Username" aria-describedby="basic-addon1">
    </div>

    <div class="input-group mb-3">
      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
    </div>

    <div class="input-group mb-3">
      <input type="text" class="form-control" aria-label="sujets">
      <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Suject</button>
      <ul class="dropdown-menu dropdown-menu-end">
        <li><a class="dropdown-item" href="#">Your Account</a></li>
        <li><a class="dropdown-item" href="#">VIP Rights</a></li>
        <li><a class="dropdown-item" href="#">Payment</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Others</a></li>
      </ul>
   </div>

    <div class="input-group">
      <textarea class="form-control" aria-label="message" placeholder="Message..."></textarea>
    </div>
    <div class="input-group mt-3">
      <button class="btn btn-primary" type="submit">Submit form</button>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
</style>