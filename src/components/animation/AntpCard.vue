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
    console.log(this.$refs.cardMoveTop.children[0].children);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(entry.target.children[0].children, {
              duration: 2,
              y: 200,
              opacity: 0,
              stagger: 0.3,  
              ease: "power3.out",
            },{
              duration: 2,
              y: 0,
              opacity: 1,
              stagger: 0.3,  
              ease: "power3.out",
            });
            observer.unobserve(entry.target);  
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
 
</style>
