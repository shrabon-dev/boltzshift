
<template >
      <span class="overflow-hidden leading-[.7] inline-block">
        <span ref="tp" class=" inline-block">
            {{ text }}
        </span>
     </span>
</template>
<script>
import { gsap } from 'gsap';
export default {
    name:"AnTp",
 
    props:{
        text:{
            type: String,
            required: true,
        }
    },
    mounted(){
        gsap.from(this.$refs.tp, {
            duration: 2,
            y: 200,
            ease: 'power3.out'
            });
    }
}
</script>
<style  scoped>
    
</style>