<template>
  <div class="home">
    <HeroComponent />
    <ListNftComponent />
    <FooterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroComponent from "@/components/HeroComponent.vue";
import ListNftComponent from "@/components/ListNftComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "HomeView",
  components: {
    HeroComponent,
    ListNftComponent,
    FooterComponent,
  },
};
</script>
