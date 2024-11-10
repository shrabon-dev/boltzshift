<template>
    <div class="relative">
      <div ref="imgRevel" class="overlay w-full h-full bg-white absolute z-10 top-0"></div>
      <div ref="imgZoomOut" class="scale-125">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  import { gsap } from 'gsap';
  
  export default {
    name: "ImgRevel",
  
    mounted() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(this.$refs.imgRevel, {
              duration: 1,
              width: 0,
              ease: 'power3.out'
            });
            observer.unobserve(this.$refs.imgRevel);
          }
        });
      }, { threshold: 0.3 });  
  
      observer.observe(this.$refs.imgRevel);
  
      const observerZoom = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(this.$refs.imgZoomOut, {
              duration: 1,
              delay: 0.2,
              scale: 1,
              ease: 'power3.out'
            });
            observerZoom.unobserve(this.$refs.imgZoomOut);
          }
        });
      }, { threshold: 0.3 });  
  
      observerZoom.observe(this.$refs.imgZoomOut);
    }
  }
  </script>
  
  <style scoped>
  .overlay {
    width: 100%;
    transform-origin: left;  
  }
  </style>
  