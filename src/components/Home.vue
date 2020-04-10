<template>

    <v-row class="text-center" id="corpo">
      <v-col cols="12" style="position: relative; padding:0!important;background: #2031398f!important; width: 500px">
        <v-img
          :src="require('../assets/ideia.jpg')"
          contain
          width="100%"
          height="100%"
          id="imagem"
        >
          <div style="position:relative!important; top: 40px; padding: 40px; margin: 10%;" class="text-left">

            <h1 style="color: #fff!important;text-shadow: 2px 1px 1px rgba(0, 0, 0, 0.71)!important;">Take a ideia</h1>
            <h4 style="color: #fff!important; font-weight: 100!important; text-align: left!important;text-shadow: 2px 1px 1px rgba(0, 0, 0, 0.71)!important;" class="mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel nibh viverra, pellentesque quam id, malesuada dolor. Nunc at placerat augue, sed congue metus. Nulla faucibus nisl vel malesuada commodo. Morbi quam orci, viverra vehicula tempus ut, mollis non velit. Etiam vel laoreet sem. Nam molestie cursus lectus ut elementum. Maecenas magna diam, convallis eget rhoncus sit amet, condimentum quis.</h4>

            <v-autocomplete
                v-model="select"
                :loading="loading"
                :items="items"
                :search-input.sync="search"
                cache-items
                class="mx-4"
                flat
                hide-no-data
                hide-details
                label="Search a project"
                solo-inverted

                style="position: relative!important; width: 100%;background:#ffffff6e!important;"
                append-icon="fa-search"
            ></v-autocomplete>

          </div>
        </v-img>
      </v-col>
        
        <v-carousel
          cycle
          height="400"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item
            v-for="(color, i) in colors"
            :key="i"
            :src="color"
          >
          </v-carousel-item>
      </v-carousel>
      <v-container>
         <v-row class="text-center">
              <v-col cols="4">
              <h2 style="color: #fff;">Others Projects</h2>
              <hr style="width: 25%; margin: auto; border: 4.5px solid rgb(0, 153, 93);border-radius: 5px; ">
              </v-col>
              <v-col cols="8">
              </v-col>
        </v-row>
        <v-row class="mx-10">
          <v-col cols="3">
                <v-card
                  style="box-shadow: rgba(0, 0, 0, 0.66) 3px 3px 7px;"
                  class="mx-auto"
                  max-width="400"
                >
                  <v-img
                    class="white--text align-end"
                    height="175px"
                    src="https://picsum.photos/350/120?random"
                  >
                  </v-img>

                  <v-card-subtitle class="pb-0">Name project</v-card-subtitle>

                  <v-card-text class="text--primary">
                    <div>Description</div>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn
                      color="#203139"
                      text
                    >
                      Share
                    </v-btn>

                    <v-btn
                      color="#203139"
                      text
                    >
                      About
                    </v-btn>
                  </v-card-actions>
                </v-card>
          </v-col>
          <v-col cols="3">
            <v-card
                  style="box-shadow: rgba(0, 0, 0, 0.66) 3px 3px 7px;"
                  class="mx-auto"
                  max-width="400"
                >
                  <v-img
                    class="white--text align-end"
                    height="175px"
                    src="https://picsum.photos/350/121?random"
                  >
                  </v-img>

                  <v-card-subtitle class="pb-0">Name project</v-card-subtitle>

                  <v-card-text class="text--primary">
                    <div>Description</div>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn
                      color="#203139"
                      text
                    >
                      Share
                    </v-btn>

                    <v-btn
                      color="#203139"
                      text
                    >
                      About
                    </v-btn>
                  </v-card-actions>
                </v-card>
          </v-col>
          <v-col cols="3">
            <v-card
                  style="box-shadow: rgba(0, 0, 0, 0.66) 3px 3px 7px;"
                  class="mx-auto"
                  max-width="400"
                >
                  <v-img
                    class="white--text align-end"
                    height="175px"
                    src="https://picsum.photos/350/122?random"
                  >
                  </v-img>

                  <v-card-subtitle class="pb-0">Name project</v-card-subtitle>

                  <v-card-text class="text--primary">
                    <div>Description</div>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn
                      color="#203139"
                      text
                    >
                      Share
                    </v-btn>

                    <v-btn
                      color="#203139"
                      text
                    >
                      About
                    </v-btn>
                  </v-card-actions>
                </v-card>
          </v-col>
          <v-col cols="3">
            <v-card
                  style="box-shadow: rgba(0, 0, 0, 0.66) 3px 3px 7px;"
                  class="mx-auto"
                  max-width="400"
                >
                  <v-img
                    class="white--text align-end"
                    height="175px"
                    src="https://picsum.photos/350/123?random"
                  >
                  </v-img>

                  <v-card-subtitle class="pb-0">Name project</v-card-subtitle>

                  <v-card-text class="text--primary">
                    <div>Description</div>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn
                      color="#203139"
                      text
                    >
                      Share
                    </v-btn>

                    <v-btn
                      color="#203139"
                      text
                    >
                      About
                    </v-btn>
                  </v-card-actions>
                </v-card>
          </v-col>
        </v-row>
        <v-row class="mx-10">
          <v-col cols="3">
              <v-card
                  style="box-shadow: rgba(0, 0, 0, 0.66) 3px 3px 7px;"
                  class="mx-auto"
                  max-width="400"
                >
                  <v-img
                    class="white--text align-end"
                    height="175px"
                    src="https://picsum.photos/350/124?random"
                  >
                  </v-img>

                  <v-card-subtitle class="pb-0">Name project</v-card-subtitle>

                  <v-card-text class="text--primary">
                    <div>Description</div>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn
                      color="#203139"
                      text
                    >
                      Share
                    </v-btn>

                    <v-btn
                      color="#203139"
                      text
                    >
                      About
                    </v-btn>
                  </v-card-actions>
                </v-card>
          </v-col>
          <v-col cols="3">
            <v-card
                  style="box-shadow: rgba(0, 0, 0, 0.66) 3px 3px 7px;"
                  class="mx-auto"
                  max-width="400"
                >
                  <v-img
                    class="white--text align-end"
                    height="175px"
                    src="https://picsum.photos/350/125?random"
                  >
                  </v-img>

                  <v-card-subtitle class="pb-0">Name project</v-card-subtitle>

                  <v-card-text class="text--primary">
                    <div>Description</div>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn
                      color="#203139"
                      text
                    >
                      Share
                    </v-btn>

                    <v-btn
                      color="#203139"
                      text
                    >
                      About
                    </v-btn>
                  </v-card-actions>
                </v-card>
          </v-col>
          <v-col cols="3">
            <v-card
                  style="box-shadow: rgba(0, 0, 0, 0.66) 3px 3px 7px;"
                  class="mx-auto"
                  max-width="400"
                >
                  <v-img
                    class="white--text align-end"
                    height="175px"
                    src="https://picsum.photos/350/126?random"
                  >
                  </v-img>

                  <v-card-subtitle class="pb-0">Name project</v-card-subtitle>

                  <v-card-text class="text--primary">
                    <div>Description</div>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn
                      color="#203139"
                      text
                    >
                      Share
                    </v-btn>

                    <v-btn
                      color="#203139"
                      text
                    >
                      About
                    </v-btn>
                  </v-card-actions>
                </v-card>
          </v-col>
          <v-col cols="3">
            <v-card
                  style="box-shadow: rgba(0, 0, 0, 0.66) 3px 3px 7px;"
                  class="mx-auto"
                  max-width="400"
                >
                  <v-img
                    class="white--text align-end"
                    height="175px"
                    src="https://picsum.photos/350/127?random"
                  >
                  </v-img>

                  <v-card-subtitle class="pb-0">Name project</v-card-subtitle>

                  <v-card-text class="text--primary">
                    <div>Description</div>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn
                      color="#203139"
                      text
                    >
                      Share
                    </v-btn>

                    <v-btn
                      color="#203139"
                      text
                    >
                      About
                    </v-btn>
                  </v-card-actions>
                </v-card>
          </v-col>
        </v-row>
        <v-row class="mx-10">
          <v-col cols="3">
              <v-card
                  style="box-shadow: rgba(0, 0, 0, 0.66) 3px 3px 7px;"
                  class="mx-auto"
                  max-width="400"
                >
                  <v-img
                    class="white--text align-end"
                    height="175px"
                    src="https://picsum.photos/350/128?random"
                  >
                  </v-img>

                  <v-card-subtitle class="pb-0">Name project</v-card-subtitle>

                  <v-card-text class="text--primary">
                    <div>Description</div>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn
                      color="#203139"
                      text
                    >
                      Share
                    </v-btn>

                    <v-btn
                      color="#203139"
                      text
                    >
                      About
                    </v-btn>
                  </v-card-actions>
                </v-card>
          </v-col>
          <v-col cols="3">
            <v-card
                  style="box-shadow: rgba(0, 0, 0, 0.66) 3px 3px 7px;"
                  class="mx-auto"
                  max-width="400"
                >
                  <v-img
                    class="white--text align-end"
                    height="175px"
                    src="https://picsum.photos/350/129?random"
                  >
                  </v-img>

                  <v-card-subtitle class="pb-0">Name project</v-card-subtitle>

                  <v-card-text class="text--primary">
                    <div>Description</div>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn
                      color="#203139"
                      text
                    >
                      Share
                    </v-btn>

                    <v-btn
                      color="#203139"
                      text
                    >
                      About
                    </v-btn>
                  </v-card-actions>
                </v-card>
          </v-col>
          <v-col cols="3">
            <v-card
                  style="box-shadow: rgba(0, 0, 0, 0.66) 3px 3px 7px;"
                  class="mx-auto"
                  max-width="400"
                >
                  <v-img
                    class="white--text align-end"
                    height="175px"
                    src="https://picsum.photos/350/130?random"
                  >
                  </v-img>

                  <v-card-subtitle class="pb-0">Name project</v-card-subtitle>

                  <v-card-text class="text--primary">
                    <div>Description</div>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn
                      color="#203139"
                      text
                    >
                      Share
                    </v-btn>

                    <v-btn
                      color="#203139"
                      text
                    >
                      About
                    </v-btn>
                  </v-card-actions>
                </v-card>
          </v-col>
          <v-col cols="3">
            <v-card
                  style="box-shadow: rgba(0, 0, 0, 0.66) 3px 3px 7px;"
                  class="mx-auto"
                  max-width="400"
                >
                  <v-img
                    class="white--text align-end"
                    height="175px"
                    src="https://picsum.photos/350/131?random"
                  >
                  </v-img>

                  <v-card-subtitle class="pb-0">Name project</v-card-subtitle>

                  <v-card-text class="text--primary">
                    <div>Description</div>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn
                      color="#203139"
                      text
                    >
                      Share
                    </v-btn>

                    <v-btn
                      color="#203139"
                      text
                    >
                      About
                    </v-btn>
                  </v-card-actions>
                </v-card>
          </v-col>
        </v-row>

        <div class="text-center">
          <v-pagination
            v-model="page"
            :length="4"
            circle
          ></v-pagination>
        </div>
 
      </v-container>
      
      <img src="../dist/img/onda.png" width="100%">

    </v-row>
      
</template> 

<script>
  require('../dist/scss/home.scss')

  export default {
    name: 'Home',
    components: {
    },
    data: () => ({
      colors: [
          'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        ],
    }),
  }
</script>
