<template>
    <span class="md:overflow-hidden leading-[.8] inline-block">
      <span ref="tb" class="inline-block">
        {{ text }}
      </span>
    </span>
  </template>
  
  <script>
  import { gsap } from 'gsap';
  
  export default {
    name: "AnTb",
  
    props: {
      text: {
        type: String,
        required: true,
      },
    },
  
    mounted() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.from(this.$refs.tb, {
              duration: 2,
              y: -200,
              ease: 'power3.out'
            });
            observer.unobserve(this.$refs.tb);
          }
        });
      }, { threshold: 0 });
      observer.observe(this.$refs.tb);
      
    }
  }
  </script>
  
  <style scoped>
  </style>