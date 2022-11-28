<template>
  <v-list dense>
    <v-subheader>Components</v-subheader>
    <v-list-item-group color="primary">
      <v-list-item @click="$router.push('/addCourse')"> Add Course</v-list-item>
      <v-list-item @click="$router.push('/calendar')"> v-calendar </v-list-item>
      <v-list-item @click="$router.push('/timePicker')">
        Time Picker
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>