<template>
  <div class="dashboard">
    <h2 class="text-grey-darken-3"> Dashboard </h2>
    <v-container class="my-5">

      <v-layout class="mb-3">
        <v-btn flat size="small" color="indigo-lighten-4 caption" @click="sortBy('title')" class="mx-4">
          <v-icon icon="mdi-folder"></v-icon>
          <span class="text-lowercase"> By project name</span>
        </v-btn>

        <v-btn flat size="small" color="indigo-lighten-4" @click="sortBy('person')">
          <v-icon icon="mdi-account"></v-icon>
          <span class="text-lowercase"> By person</span>
        </v-btn>
      </v-layout>

      <v-card v-for="project in projects" :key="project.title">
        <v-layout class="d-flex justify-space-between pa-4" :class="`pa-3 project ${project.status}`">
          <v-flex>
          <div class="text-grey">
            Project Title
          </div>
          <div>{{ project.title }}</div>
          </v-flex>
          <v-flex>
            <div class="text-grey">
            Person
            </div>
            <div>{{project.person}}</div>
          </v-flex>
          <v-flex>
            <div class="text-grey">
            Date
            </div>
            <div>{{project.due}}</div>
          </v-flex>
          <v-flex>
            <div >
              <v-chip size="small" :class="`${project.status} my-2 text-white`">
                {{ project.status }}
              </v-chip>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
    
  
</template>

<script>
export default {
  data(){
    return {
      projects: [
        { title: 'Design a new Website', person: 'Rocco T', due:'1st Jan 2023', status:'ongoing'},
        { title: 'Code up the homepage', person: 'Monkey D. Luffy ', due:'10th Jan 2020', status:'complete'},
        { title: 'Design video thumbnails', person: 'Zoro', due:'20th Dec 2018', status:'complete'},
        { title: 'Create a community forum', person: 'Trafalgar Law', due:'22th Oct 2022', status:'overdue'}, 
      ]
    }
    },
    methods: {
      sortBy(prop){
        this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
      }
  }
}
</script>

<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}

.project.ongoing {
  border-left: 4px solid orange;
}

.project.overdue{
  border-left: 4px solid tomato;
}

.v-chip.complete {
  background: #3cd1c2;
}

.v-chip.ongoing {
  background: orange;
}

.v-chip.overdue {
  background: tomato;
}

</style>