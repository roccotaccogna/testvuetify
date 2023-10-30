<template>
    <nav>
        <v-toolbar flat class="bg-white">
            <v-app-bar-nav-icon @click="drawer=!drawer">
            </v-app-bar-nav-icon>
                
                <v-toolbar-title class="text-uppercase">
                    <span class="font-weight-light"> Test </span>
                    <span> Vuetify </span>
                </v-toolbar-title>
                <v-spacer> </v-spacer>

                <v-menu>
                    <template v-slot:activator="{ props}">
                        <v-btn flat v-bind="props">
                        <v-icon color="grey" icon="mdi-arrow-down-thick"></v-icon>
                        <span class="text-grey"> Menu </span>
                        </v-btn>
                    </template>
                        <v-list>
                            <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                                <v-list-item-title class="font-weight-regular"> {{ link.text }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    
                        
                </v-menu>
                <v-btn color="grey" class="px-7">
                    <span> Sign Out </span>
                    <v-icon icon="mdi-logout" class="ml-1"/> 
                </v-btn> 
        </v-toolbar>

        <v-navigation-drawer v-model="drawer"  color="#C5CAE9">
            <v-layout class="ml-5">
                <v-flex class="mt-5 ml-3">
                    <v-avatar size="150" class="ml-4">
                        <img src="/public/rok.png">
                    </v-avatar>
                    <p class="mt-6 ml-14 text-uppercase"> Rocco T </p>
                    <v-flex>
                        <Popup/> 
                    </v-flex>
                </v-flex>
                
                
            </v-layout>
            
            <v-list>
                <v-list-item class="my-3 mx-3" v-for="link in links" :key="link.text" 
                router :to="link.route">
                    <v-icon class="px-5" :icon="link.icon"> </v-icon>
                        {{ link.text }}
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import Popup from './Popup'

export default {
    components: { Popup },
    data() {
        return {
            drawer: false,
            links: [
                { icon: 'mdi-dialpad', text: 'Dashboard', route: '/'},
                { icon: 'mdi-folder', text: 'My Projects', route: '/projects'},
	            { icon: 'mdi-account', text: 'Team', route: '/team'},
            ],
        }
    }
}
</script>