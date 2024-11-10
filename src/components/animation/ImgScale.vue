
<template >
    
        <div ref="aimgScale" class="scale-0" >
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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            this.$refs.aimgScale,
            { scale:0 }, 
            { duration: 4, scale: 1,y: 0, ease: 'power3.out' } 
          );
          observer.unobserve(this.$refs.aimgScale); 
        }
      });
    }, { threshold: 0 });  

    observer.observe(this.$refs.aimgScale);
    }
}
</script>
<style scoped>
  .scale-0{
    transform: scale(0);
  }
</style>