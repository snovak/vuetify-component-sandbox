<template>
  <v-card dark class="ma-5 pa-5 primary darken-1">
    <v-row class="pa-0" style="color: white">
      <v-col>
        <h2>New Course</h2>
        <v-text-field
          dark
          v-model="courseTitle"
          label="Course Title"
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-card
          @click="chooseImage"
          outlined
          class="pa-6 elevation-0 primary text-center border-white outlined"
          ><v-icon large>mdi-image-outline</v-icon></v-card
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card outlined class="elevation-0 primary">
          <v-card-title> Add Lesson </v-card-title>
          <v-card-text>
            <v-row>
              <v-col><v-text-field label="Lesson Title"></v-text-field></v-col>
              <v-col>
                <v-text-field
                  v-model="addLesson.skill"
                  @change="addSkill"
                  append-icon="mdi-plus"
                  label="Add Skill"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-chip
                  class="ma-1 primary darken-1"
                  v-for="skill in addLesson.skills"
                  :key="skill"
                  >{{ skill }}</v-chip
                >
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-btn class="primary darken-2">Add Lesson</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card outlined class="elevation-0 border-white outlined" light>
          <v-card-title> Lessons </v-card-title>

          <v-card-text class="d-flex justify-space-between">
            <v-row>
              <v-col v-for="lesson in lessons" :key="lesson.id" sm="4">
                <v-card>
                  <v-card-title>{{ lesson.title }}</v-card-title>
                  <v-card-text>
                    <v-chip
                      v-for="skill in lesson.skills"
                      :key="skill"
                      class="ma-2"
                      >{{ skill }}</v-chip
                    >
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-card-actions>
      <v-btn class="primary darken-2">Add Course</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    courseTitle: "",
    lessons: [],
    addLesson: {
      id: "",
      title: "",
      skill: "",
      skills: ["test"],
    },
  }),
  methods: {
    chooseImage() {
      console.log("chooseImage");
    },
    addSkill() {
      if (this.addLesson.skill) {
        this.addLesson.skills.push(this.addLesson.skill);
        this.addLesson.skill = "";
      }
    },
  },
  mounted() {
    for (let i = 1; i < 10; i++) {
      this.lessons.push({
        id: i,
        title: `Lesson ${i}`,
        skills: ["Skill 1", "Skill 2", "Skill 3"],
      });
    }
  },
};
</script>