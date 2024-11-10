
<template >
      <span class="md:overflow-hidden leading-[.8] inline-block">
        <span ref="tp" class=" inline-block">
            {{ text }}
        </span>
     </span>
</template>
<script>
import { gsap } from 'gsap';
export default {
    name:"ImgScale",
 
    props:{
        text:{
            type: String,
            required: true,
        }
    },
    mounted(){
        let observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    gsap.from(this.$refs.tp, {
                    duration: 2,
                    y: 200,
                    ease: 'power3.out'
                    });

                    observer.unobserve(this.$refs.tp)
                }
            })
        })
        observer.observe(this.$refs.tp)

    }
}
</script>
<style  scoped>
    
</style>