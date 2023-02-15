<template>
  <div class="login">
    <div class="account d-flex align-items-center">
      <img src="@/assets/img/avatar/avatar.png" alt="account icon"/>
      <div id="login" v-if="isLogin" class="text-light"> Welcome | <a href="#" @click="logout" class="text-light text-decoration-none">Log out</a></div>
      <div id="login" v-else class="text-light"><a href="#" @click="login1" class="text-light text-decoration-none">Login </a>| Sign up</div>
    </div>
    


    <div id="login-box" 
         :style="log == 0 ? 'display:none' : 'display:block; z-index:1'"
         class="">
      <form>
        <label>
          Username:
          <input v-model="uname" type="text" class="form-control" placeholder="Enter your username">
        </label>
        <label>
          Password:
          <input v-model="upwd" type="password" class="form-control" placeholder="Enter your password">
        </label>
        <button  class="btn btn-primary"
                @click="login2"
               >
                Login
        </button>
        <p id="close" @click="close">x</p>
      </form>
    </div>

    <div id="back" :style="log == 0 ? 'display:none' : 'display:block'"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isLogin = ref(false)
const log = ref(0)
const uname = ref("")
const upwd = ref("")

const login1 = () => {
    log.value = 1
}
login1()

const login2 = () => {
    if(uname.value === "test" && upwd.value === "123456") {
      log.value = 0;
      isLogin.value = true
    }else {
      alert("false")
    }
}
login2()

const close = () => {
   log.value = 0
   uname.value = ""
   upwd.value = ""
}
close()

const logout = () => {
   isLogin.value = false
   uname.value = ""
   upwd.value = ""
}
</script>

<style lang="less" scoped>

.login {

  .account {
    vertical-align: center;
    
    img {
    width: 30px;
    height: 30px;
     }
  }

    /*登陆框*/
    #login-box{
        padding: 20px;
        display:none;
        width:350px;
        height: 150px;
        background: #eeeeee;
        border-radius: 5px;
        position: absolute;
        margin-left: -80px;
        margin-top: 150px;
    }
    #login-box>form{
        text-align: center;
    }
    #login-box label{
        display: block;
        font-size: 20px;
        margin: 10px 0 0 0;
    }
    #login-box label input{
        width:200px;
        height: 30px;
    }
    #login-box button{
        width:200px;
        height: 30px;
        margin:10px 0 0 0;
        width:90px;
        border-radius: 5px;
    }
    #close{
        font-size:18px;
        position: absolute;
        top:0;
        right: 5px;
        cursor: pointer;
    }
    /*背景*/
    #back{
        position:absolute;
        left:0;
        top:0;
        width:100%;
        height:100%;
        background: #000;
        opacity: 0.5;
    }
}

</style>
