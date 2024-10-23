<template >
    <section id="about" class="md:py-40">
        <div class="container">
            <div class="md:flex">
                <div class="md:w-1/2">
                    <p class="text-lg md:text-3xl font-clash font-bold !leading-normal text-white">ABOUT THE 
                      <br>  BOLTZSHIFT AGENCY</p>
                    <span class="text-main drop-shadow-2xl text-7xl inline-block mt-10 drop-main"><FlFilledStarCheckmark/></span>
                </div>
                <div class="md:w-1/2">
                    <p class="font-clash text-lg md:text-2xl font-medium !leading-normal text-third">Boltzshift is a distinguished design and development agency based in the United Kingdom, known for our commitment to crafting exceptional digital experiences. 
                     <br><br><br>   Since  2018 Boltzshift has been reshaping the web & mobile apps with top-notch design and the power of no code.</p>
                </div>
            </div>
        </div>
        <div class="img w-full py-10">
            <img class="w-full block" src="../assets/images/img7.png" alt="">
        </div>
        <div class="container">
            <div class="md:flex  ">
                <div class="md:w-1/2">
                    <p class="text-xl md:text-3xl font-clash font-bold !leading-normal text-white">GET AQUANTED WITH <br> OUR KEY FACTS</p>
                </div>
                <div class="md:w-1/2 space-y-5 md:space-y-0 md:flex justify-between pt-5 md:pt-0">
                    <div class="count text-center">
                        <span class="font-clash text-5xl md:text-2xl lg:text-5xl text-white font-normal md:font-semibold">82.5<span class="text-main">k</span></span>
                        <p class="font-clash text-base md:text-sm lg:text-xl font-medium !leading-normal text-third">Trusted Users</p>
                    </div>
                    <div class="count text-center">
                        <span class="font-clash text-5xl md:text-2xl lg:text-5xl text-white font-normal md:font-semibold">2105<span class="text-main">+</span></span>
                        <p class="font-clash text-base md:text-sm lg:text-xl font-medium !leading-normal text-third">Project Completed </p>
                    </div>
                    <div class="count text-center">
                        <span class="font-clash text-5xl md:text-2xl lg:text-5xl text-white font-normal md:font-semibold">97<span class="text-main">%</span></span>
                        <p class="font-clash text-base md:text-sm lg:text-xl font-medium !leading-normal text-third">Client Satisfaction</p>
                    </div>
                   
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { FlFilledStarCheckmark } from '@kalimahapps/vue-icons';
export default {
    name:"AboutComponent",
    components:{
        FlFilledStarCheckmark
    }
}
</script>
<style scoped>
    
</style>