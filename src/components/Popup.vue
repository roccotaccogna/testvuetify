<template>
    <v-dialog max-width="600px">
        <template v-slot:activator="{ props }">
        <v-btn flat v-bind="props" class="mt-5">
           Add new project
        </v-btn>
        </template>
        <v-card>
            <v-card-title >
                <h3 class="text-center text-uppercase"> Add a new project </h3>
            </v-card-title>
        </v-card>
    </v-dialog>
</template>

<script>
export default {

}
</script>