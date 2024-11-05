
<template >
    
        <div ref="aimgScale" >
            <slot></slot>
        </div>
   
</template>
<script>
import { gsap } from 'gsap';
export default {
    name:"ImgScale",
 
    props:{
        
    },
    mounted(){
       // Create an Intersection Observer to watch the element
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Start the animation when the element is in view
          gsap.fromTo(
            this.$refs.aimgScale,
            { y:-287 }, // Start at a larger scale
            { duration: 2, scale: 1,y: 0, ease: 'power3.out' } // Animate to normal size
          );
          observer.unobserve(this.$refs.aimgScale); // Stop observing after animation starts
        }
      });
    }, { threshold: 0 }); // Trigger when 50% of the element is in view

    observer.observe(this.$refs.aimgScale);
    }
}
</script>
<style  scoped>
    
</style>