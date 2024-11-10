<template>
    <span ref="textRevel" class="text-reveal">
      {{ text }}
    </span>
  </template>
  
  <script>
  import { gsap } from 'gsap';
  
  export default {
    name: "TextRevel",
    props: {
      text: {
        type: String,
        required: true,
      }
    },
    mounted() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(this.$refs.textRevel, {
              duration: 2,
              opacity: 1,
              scale: 1,
              ease: 'power3.out'
            });
  
            observer.unobserve(this.$refs.textRevel);
          }
        });
      },{threshold:.5});
      observer.observe(this.$refs.textRevel);
    }
  };
  </script>
  
  <style scoped>
  .text-reveal {
    perspective: 1000px;
    transform: rotate(0deg) skew(13deg, 0deg) scale(1.8); 
    opacity: 0;    
    display: inline-block;      
  }
  </style>
  