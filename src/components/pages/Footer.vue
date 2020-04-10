<template>
 <div class="px-10" id="footer">
  <v-row>

    <v-col>
        <h3 style="color: #00995d">Pages</h3>
        <hr style="border: 2px solid rgba(0, 0, 0, 0.45);border-radius: 5px; ">
        <p style="color: #fff;">Home</p>
        <p style="color: #fff;">Projects</p>
        <p style="color: #fff;">Sign Up</p>
        <p style="color: #fff;">Login</p>
    </v-col>

    <v-col>
        <h3 style="color: #00995d">Redes Sociais</h3>
        <hr style="border: 2px solid rgba(0, 0, 0, 0.45);border-radius: 5px; ">
        <p style="color: #fff;">Facebook</p>
        <p style="color: #fff;">Twitter</p>
        <p style="color: #fff;">Linkedin</p>
    </v-col>

    <v-col>
       <v-img
          :src="require('../../assets/logo.png')"
          contain
          width="250"
          height="200"
          class="mx-auto"
        />
    </v-col>

  </v-row>

  <v-row>
    <v-col class="text-center">
       <p style="color: #fff; font-size: 15px">© Copyright 2020 findmypair.com - All Rights Reserved</p>
    </v-col>
  </v-row>

 </div>
</template> 

<script>
  export default {
    name: 'Footer',

    data: () => ({
      
    }),
  }
</script>
