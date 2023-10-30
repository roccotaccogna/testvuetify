<template>
      <div class="team">
    <h2 class="text-grey-darken-3"> Team </h2>
    <v-container class="my-5">
      <v-layout class="d-flex flex-wrap">
        <v-flex  v-for="person in team" :key="person.name">
          <v-card class="text-center ma-3 bg-indigo-lighten-4" width="200">
            <v-responsive class="pt-4">
              <v-avatar size="150" class="grey-lighten-2">
                <img :src="person.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="ma-2 text-uppercase">{{ person.name }}</div>
              <div class="font-weight-light">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat class="text-grey-darken-3">
                <v-icon icon="mdi-message" class="mr-1"></v-icon>
                <span> Message </span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {name: 'Rocco T', role: 'Web Developer', avatar: '/public/rok.png'},
        {name: 'Monkey D. Luffy', role: 'Graphic Designer', avatar: '/public/luffy.png'},
        {name: 'Zoro', role: 'Web Developer', avatar: '/public/zoro.jpg'},
        {name: 'Trafalgar Law', role: 'Social Media Manager', avatar: '/public/traf.jpg'},
        {name: 'Ace', role: 'Business Manager', avatar: '/public/ace.jpg'},
      ]
    }
  }
}
</script>