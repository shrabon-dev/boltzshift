
<template >
     <span class="md:overflow-hidden leading-[.8] inline-block">
        <span ref="tl" class="inline-block ">
            {{ text }}
        </span>
     </span>
</template>
<script>
import { gsap } from 'gsap';
export default {
    name:"AnTl",
 
    props:{
        text:{
            type: String,
            required: true,
        }
    },
    mounted(){
        const target = this.$refs.tl;

   

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Trigger GSAP animation
                    gsap.from(target, {
                        duration: 2,
                        x: -200,
                        ease: "power3.out",
                    });

                    // Stop observing after animation triggers
                    observer.unobserve(target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(target);
    }
}
</script>
<style  scoped>
    
</style>