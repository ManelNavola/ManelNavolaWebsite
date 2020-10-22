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
            image: "mci.png",
            github: "https://github.com/ManelNavola/MCInteractive",
            //releaseDate: "October 17, 2020",
            //spotify: "https://open.spotify.com/album/4U28P52jpvmanqEqDv9z2N?si=frqf-aiaTzCBjEMyZBKLDQ",
            //appleMusic: "https://music.apple.com/us/album/static-ep/1532336523?uo=4",
            //youtube: "https://www.youtube.com/watch?v=p61t-4SjGyU&list=PL0LkLyIcBERYgtQQL_s7xCPkmqqwkDNXN"
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
    grid-gap: 5em
    margin-bottom: 6vmin
    width: 100%
    @media #{base.$widescreen}
      grid-template-columns: 1fr 1fr
    div
      
</style>