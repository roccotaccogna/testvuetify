<template>
      <div class="projects">
    <h2 class="text-grey-darken-3"> Projects </h2>
    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel variant="inset" v-for="project in myProjects" :key="project.title">
        <v-expansion-panel-title class="font-weight-bold"> {{ project.title }}</v-expansion-panel-title>
        <v-expansion-panel-text> {{ project.content }}</v-expansion-panel-text>
        <v-expansion-panel-text class="font-weight-light"> {{ project.due }}</v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
export default {
  data(){
    return {
      projects: [
        { title: 'Design a new Website', person: 'Rocco T', due:'1st Jan 2023', content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'},
        { title: 'Code up the homepage', person: 'Monkey D. Luffy ', due:'10th Jan 2020', content: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.'},
        { title: 'Design video thumbnails', person: 'Zoro', due:'20th Dec 2018',content: 'emporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.'},
        { title: 'Create a community forum', person: 'Trafalgar Law', due:'22th Oct 2022', content: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'}, 
      ]
    }
  },
    computed: {
      myProjects(){
        return this.projects.filter(project => {
          return project.person === 'Rocco T'
        })
      }
    }
  
}
</script>

<style>
.v-expansion-panel-title:hover{
  background-color: #C5CAE9;
}
</style>