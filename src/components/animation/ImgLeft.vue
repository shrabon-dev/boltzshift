
<template >
    
        <div ref="aimgl" class="">
            <slot></slot>
        </div>
   
</template>
<script>
import { gsap } from 'gsap';
export default {
    name:"ImgLeft",
 
    props:{
        
    },
    mounted(){
        gsap.from(this.$refs.aimgl,{
                duration: 4,
                opacity:0,
                ease: 'power3.out'
            });
    }
}
</script>
<style  scoped>
    
</style>