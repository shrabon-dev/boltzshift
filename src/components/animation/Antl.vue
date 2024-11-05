
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
        gsap.from(this.$refs.tl, {
            duration: 2,
            x: -200,
            ease: 'power3.out'
            });
 
    }
}
</script>
<style  scoped>
    
</style>