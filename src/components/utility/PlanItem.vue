<template>
    <div class="md:w-[48%] lg:w-[30%]">
        <div :class="`plan  p-10 ${active == true ? 'bg-main':'bg-white'} duration-300 ease-linear hover:bg-main group`">
            <h6 :class="`font-clash font-medium text-2xl pb-5 uppercase text-secondary`">{{category}}</h6>
            <h2 class="font-clash font-bold text-6xl text-secondary">${{price}}</h2>
            <button :class="`${active == true ? 'bg-secondary text-white':'bg-main text-secondary'} duration-300 ease-linear group-hover:text-white group-hover:bg-secondary font-clash font-medium my-10 text-xl w-full py-5`">Get Start  </button>
            <ul class="space-y-4">
                <li class=""><a href="" class="font-clash font-medium text-lg text-secondary "><AkCircleCheckFill class="inline-block text-base text-secondary mr-2"/> {{ list }}</a></li>
                <li class=""><a href="" class="font-clash font-medium text-lg text-secondary "><AkCircleCheckFill class="inline-block text-base text-secondary mr-2"/> {{ list }}</a></li>
                <li class=""><a href="" class="font-clash font-medium text-lg text-secondary "><AkCircleCheckFill class="inline-block text-base text-secondary mr-2"/> {{ list }}</a></li>
                <li class=""><a href="" class="font-clash font-medium text-lg text-secondary "><AkCircleCheckFill class="inline-block text-base text-secondary mr-2"/> {{ list }}</a></li>
                <li class=""><a href="" class="font-clash font-medium text-lg text-secondary "><AkCircleCheckFill class="inline-block text-base text-secondary mr-2"/> {{ list }}</a></li>
 
            </ul>
        </div>
    </div>
</template>
<script>
import { AkCircleCheckFill } from '@kalimahapps/vue-icons';
export default {
    name:"PlanItem",
    components:{
        AkCircleCheckFill,
    },
    props:{
        active:{
            type: String,
            required: true
         },
        price:{
            type: String,
            required: true
         },
        category:{
            type: String,
            required: true
         },
        list:{
            type: String,
            required: true
         },
     
    }
}
</script>
<style lang="">
    
</style>