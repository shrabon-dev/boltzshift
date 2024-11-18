<template>
  <div ref="cardMoveTop">
    <slot></slot>    
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "AnTpCard",
  props: {
    text: {
      type: String,
      required: true,
    },
  },

  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.from(this.$refs.cardMoveTop, {
              duration: 2,
              y: 200,
              opacity:0,
              ease: "power3.out",
            });
            observer.unobserve(this.$refs.cardMoveTop);
          }
        });
      },
      { threshold: 0 }
    );
    observer.observe(this.$refs.cardMoveTop);
  },
};
</script>

<style scoped>
/* Add any styles you need here */
</style>
