<template>
  <div id="projects">
    <Header title="Projects" subtitle="Programming projects I've partaken in"/>
    
    <div id="projectList">
      <div v-for="project in projects" :key="project.title">
        <ProjectRow
                 :title="project.title"
                 :image="project.image"
                 :description="project.description"
                 :github="project.github"
                 />
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header';
  import ProjectRow from '@/components/ProjectRow';
  
  export default {
    name: "Projects",
    data() {
      return {
        projects: [
          {
            title: "MC Interactive",
            description: "A Java Plugin for Minecraft Servers that connects and integrates "
              + "Twitch IRC capabilities",
            image: "mci.jpg",
            github: "https://github.com/ManelNavola/MCInteractive",
          },
          {
            title: "Space Station 14",
            description: "Contributing to the open-source C# remake of the videogame Space Station 13",
            image: "ss14.jpg",
            github: "https://github.com/space-wizards/space-station-14/",
          }
        ]
      }
    },
    components: {
      Header, ProjectRow
    },
    methods: {
      handleScroll() {
        this.$parent.$refs.toolbar.handleScroll();
      }
    },
    mounted() {
      this.$el.addEventListener('scroll', this.handleScroll);
      for (var i = 1; i < 10; i++) {
        setTimeout(this.handleScroll, i*100);
      }
      this.handleScroll();
    },
    destroyed() {
      this.$el.removeEventListener('scroll', this.handleScroll);
    },
    metaInfo: {
      title: 'Projects'
    }
  }
</script>

<style lang="sass">
  @use '@/base'

  #projectList
    display: grid
    grid-template-columns: 1fr
    grid-gap: 1vmax
    width: 100%
    @media #{base.$widescreen}
      grid-template-columns: 1fr 1fr
      
</style>