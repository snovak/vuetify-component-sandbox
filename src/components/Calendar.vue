<template>
  <v-calendar :events="events" />
</template>
<script>
export default {
  data: () => ({
    events: [],
  }),
  async mounted() {
    var events = await this.makeRequest("ba3.json", "GET");
    this.addEvents(events);
  },
  methods: {
    async makeRequest(url, method) {
      var request = new XMLHttpRequest();
      const result = new Promise(function (resolve, reject) {
        request.onreadystatechange = function () {
          if (request.readyState !== 4) return;

          if (request.status >= 200 && request.status < 300) {
            // If successful
            const json = JSON.parse(request.responseText);
            console.log(json);
            resolve(json);
          } else {
            // If failed
            reject({
              status: request.status,
              statusText: request.statusText,
            });
          }
        };
        request.open(method || "GET", url, true);
        request.send();
      });
      return result;
    },
    addEvents(events) {
      //TODO: sanity check events for name, start, end, color props
      for (let i = 0; i < events.length; i++) {
        if (
          Object.hasOwnProperty.call(events[i], "name") &&
          Object.hasOwnProperty.call(events[i], "color") &&
          Object.hasOwnProperty.call(events[i], "start") &&
          Object.hasOwnProperty.call(events[i], "end")
        ) {
          if (typeof events[i].start == "string") {
            events[i].start = new Date(events[i].start);
            events[i].end = new Date(events[i].end);
          }
          this.events.push(events[i]);
        } else {
          console.error("event not properly formed");
          console.log(events[i]);
        }
      }
    },
  },
};
</script>