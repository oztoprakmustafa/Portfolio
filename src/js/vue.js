import { skills, projects } from "../data/data.js";

Vue.createApp({
  data() {
    return {
      skillsData: skills,
      projectsData: projects,
    };
  },
}).mount("#main");
