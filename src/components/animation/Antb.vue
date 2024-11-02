
<template >
     <span class="overflow-hidden">
        <span ref="tb" class="inline-block">
            {{ text }}
        </span>
     </span>
</template>
<script>
import { gsap } from 'gsap';
export default {
    name:"AnTb",
 
    props:{
        text:{
            type: String,
            required: true,
        }
    },
    mounted(){
        gsap.from(this.$refs.tb,{
            duration:1,
            y:-200,
            ease:'power3.out'
        })
         
    }
}
</script>
<style  scoped>
    
</style>