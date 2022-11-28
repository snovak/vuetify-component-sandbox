<template>
  <v-card class="ma-5 pa-5">
    <v-row>
      <v-col cols="11" sm="5">
        <v-menu
          ref="menu"
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="getTime12"
              label="Picker in menu"
              prepend-icon="mdi-clock-time-four-outline"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-time-picker
            v-if="menu2"
            v-model="time"
            full-width
            @click:minute="$refs.menu.save(time)"
          ></v-time-picker>
        </v-menu>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="11" sm="5">
        <v-dialog ref="dialog" v-model="modal2" persistent width="290px">
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="time"
              label="Picker in dialog"
              prepend-icon="mdi-clock-time-four-outline"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-time-picker v-if="modal2" v-model="time" full-width>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="modal2 = false"> Cancel </v-btn>
            <v-btn text color="primary" @click="$refs.dialog.save(time)">
              OK
            </v-btn>
          </v-time-picker>
        </v-dialog>
      </v-col>
    </v-row>
    <v-row>
      {{ getTime12 }}
    </v-row>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
      menu2: false,
      modal2: false,
    };
  },
  computed: {
    time: {
      get() {
        var hours = this.date.getHours();
        hours = hours < 10 ? "0" + hours : hours;
        var minutes =
          this.date.getMinutes() < 10
            ? "0" + this.date.getMinutes()
            : this.date.getMinutes();
        return `${hours}:${minutes}`;
      },
      set(newTime) {
        var aNewTime = newTime.split(":");
        console.log(aNewTime);
        this.date.setHours(parseInt(aNewTime[0]));
        this.date.setMinutes(parseInt(aNewTime[1]));
        this.date.setSeconds(0);
        console.log(this.date);
      },
    },

    getTime() {
      var hours = this.date.getHours();
      hours = hours < 10 ? "0" + hours : hours;
      var minutes =
        this.date.getMinutes() < 10
          ? "0" + this.date.getMinutes()
          : this.date.getMinutes();
      return `${hours}:${minutes}`;
    },
    getTime12() {
      var hours =
        this.date.getHours() > 12
          ? this.date.getHours() - 12
          : this.date.getHours();
      var am_pm = this.date.getHours() >= 12 ? "PM" : "AM";
      hours = hours < 10 ? "0" + hours : hours;
      var minutes =
        this.date.getMinutes() < 10
          ? "0" + this.date.getMinutes()
          : this.date.getMinutes();
      var time = hours + ":" + minutes + " " + am_pm;
      return time;
    },
  },
};
</script>