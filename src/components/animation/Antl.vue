
<template >
     <span class="md:overflow-hidden leading-[.8] inline-block">
        <span ref="tl" class="inline-block">
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
        var observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    gsap.fromTo(this.$refs.tl,{
                        duration: 2,
                        x: -200,
                        ease: 'power3.out'
                    },{
                        duration: 2,
                        x: 0,
                        ease: 'power3.out'
                    });

                    observer.unobserve(this.$refs.tl)
                }
            })
        },{threshold:.5})
        observer.observe(this.$refs.tl);
    }
}
</script>
<style  scoped>
    .tl{
        transform: translateX(-200px);
    }
</style>