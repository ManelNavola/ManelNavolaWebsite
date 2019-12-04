<template>
    <div class="links">
      <socialButton
                    background_color="#1DB954"
                    button_name="Spotify"
                    button_image="spotify_icon.png"
                    border_color="#1EBA55"
                    button_handle="Manel Navola"
                    button_link="https://open.spotify.com/artist/27oD8wnfY7BRFQsMLeNeXR"
                    />
      <socialButton
                    background_color="#DD6892"
                    button_name="Apple Music"
                    button_image="apple_music_icon.png"
                    border_color="#DE6993"
                    button_handle="Manel Navola"
                    button_link="https://music.apple.com/es/artist/manel-navola/1403947082"
                    />
      <socialButton
                    background_color="#fe0000"
                    button_name="Youtube"
                    button_image="youtube_icon.png"
                    border_color="#ff0000"
                    button_handle="Manel Navola"
                    button_link="https://youtube.com/manelnavola"
                    />
      <socialButton
                    background_color="#1da1f2"
                    button_name="Twitter"
                    button_image="twitter_icon.png"
                    border_color="#1ea2f3"
                    button_handle="@manelnavola"
                    button_link="https://twitter.com/manelnavola"
                    class="col2"
                    />
    </div>
</template>

<script>
  import SocialButton from '../components/SocialButton'
  export default {
    name: 'Links',
    components: {
      SocialButton
    }
  }
</script>

<style>
  .links {
    display: grid;
    max-width: 1024px;
    grid-row-gap: 38px;
  }
  .col2 {
    grid-column: 2 / 3;
  }
  .home p {
    font-family: Arial;
  }
</style>