<template>
    <span ref="textFly" class="inline-block relative">
      <span 
        v-for="(letter, index) in letters" 
        :key="index" 
        :class="{'letter-wrapper': letter !== ' ', 'space': letter === ' '}"
      >
        <span v-if="letter !== ' '" class="letter">
          {{ letter }}
        </span>
        <span v-else>&nbsp;</span>
      </span>
    </span>
  </template>
  
  <script>
  import { gsap } from 'gsap';
  
  export default {
    name: "TextFly",
  
    props: {
      text: {
        type: String,
        required: true,
      }
    },
  
    computed: {
      letters() {
        return this.text.split(""); 
      }
    },
  
    mounted() {
      let  observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
          if(entry.isIntersecting){
            gsap.fromTo(
              this.$refs.textFly.children,
              {
                opacity: 0,
                x: () => Math.random() * 300 - 150,  
                y: () => Math.random() * 200 - 100,  
              },
              {
                opacity: 1,
                duration: 3,
                x: 0,
                y: 0,
                ease: 'power3.out',
              //  stagger: 0.05,  
              }
            );
            observer.unobserve(this.$refs.textFly)
          }
        })
      })
      observer.observe( this.$refs.textFly);
    
    }
  };
  </script>
  
  <style scoped>
  .inline-block {
    display: inline-block;
  }
  .relative {
    position: relative;
  }
  .letter-wrapper {
    position: relative; /* Keeps each letter in its original space */
    display: inline-block;
  }
  .letter {
    position: relative; /* Allows animation to start from different positions */
    display: inline-block;
  }
  .space {
    display: inline-block; /* Keeps space between words without animation */
  }
  </style>
  