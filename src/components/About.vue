<template >
    <section id="about" class="md:py-40">
        <div class="container">
            <div class="md:flex">
                <div class="md:w-1/2">
                    <p class="text-lg md:text-3xl font-clash font-bold !leading-normal text-white">  <AnTl text="ABOUT THE" />
                      <br>  <AnTb text="BOLTZSHIFT AGENCY" /> </p>
                        <span class="text-main drop-shadow-2xl text-7xl inline-block mt-10 drop-main">
                            <ImgScale>
                                <FlFilledStarCheckmark/>
                            </ImgScale>
                        </span>
                    </div>
                <div class="md:w-1/2">
                    <p class="font-clash text-lg md:text-2xl font-medium !leading-normal text-third">Boltzshift is a distinguished design and development agency based in the United Kingdom, known for our commitment to crafting exceptional digital experiences. 
                     <br><br><br>   Since  2018 Boltzshift has been reshaping the web & mobile apps with top-notch design and the power of no code.</p>
                </div>
            </div>
        </div>
        <div class="container my-5 mt-20 ">
            <ImgScale>
            <div class="rounded-tr-full h-[740px] rounded-tl-full  overflow-hidden">
                    <div class="img w-full">
                        <img class="w-full block" src="../assets/images/img7.png" alt="">
                    </div>
                </div>
            </ImgScale>
        </div>
        <div class="container">
            <div class="md:flex  ">
                <div class="md:w-1/2">
                    <p class="text-xl md:text-3xl font-clash font-bold !leading-normal text-white"> <AnTl text="GET AQUANTED WITH" /> <br> <AnTl text="OUR KEY FACTS" />  </p>
                </div>
                <div class="md:w-1/2 space-y-5 md:space-y-0 md:flex justify-between pt-5 md:pt-0">
                    <div class="count text-center">
                        <span class="font-clash text-5xl md:text-2xl lg:text-5xl text-white font-normal md:font-semibold"> <AnTp text="82.5"/> <span class="text-main"><AnTb text="k" /></span></span>
                        <p class="font-clash text-base md:text-sm lg:text-xl font-medium !leading-normal text-third"><AnTl text="Trusted Users" /></p>
                    </div>
                    <div class="count text-center">
                        <span class="font-clash text-5xl md:text-2xl lg:text-5xl text-white font-normal md:font-semibold"><AnTp text="2105"/><span class="text-main"><AnTb text="+"/></span></span>
                        <p class="font-clash text-base md:text-sm lg:text-xl font-medium !leading-normal text-third"><AnTl text="Project Completed"/> </p>
                    </div>
                    <div class="count text-center">
                        <span class="font-clash text-5xl md:text-2xl lg:text-5xl text-white font-normal md:font-semibold"><AnTb text="89"/><span class="text-main"><AnTp text="%"/></span></span>
                        <p class="font-clash text-base md:text-sm lg:text-xl font-medium !leading-normal text-third"><AnTl text="Client Satisfaction"/></p>
                    </div>
                   
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { FlFilledStarCheckmark } from '@kalimahapps/vue-icons';
import ImgScale from "@/components/animation/ImgScale.vue"
import AnTl  from '@/components/animation/Antl.vue'
import AnTb  from '@/components/animation/Antb.vue'
import AnTp  from '@/components/animation/Antp.vue'
import Antl from '@/components/animation/Antl.vue';
export default {
    name:"AboutComponent",
    components:{
        FlFilledStarCheckmark,ImgScale,AnTl,AnTb,AnTp,
    }
}
</script>
<style scoped>
    
</style>