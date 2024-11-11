
<template >
    <section >
        <div class="container relative ">
            <div class="bg">
                <span class="w-20 md:w-96 left-1/2 top-1/2 -translate-y-[60%] -z-0 -translate-x-[25%] h-[700px] md:rotate-45 blur-[120px] bg-main/30 inline-block absolute"> </span>
                <div class="content py-40 text-center">
                    <h2 class="flex flex-col md:flex-row font-clash font-bold text-6xl lg:text-9xl uppercase items-center justify-center gap-5 text-center overflow-hidden md:overflow-auto"><span class="overflow-hidden"><AnTl text="W"/><AnTb text="e"/>
                    <span class="pl-5 md:pl-0 lg:block lg:text-[106px] lg:-ml-2 lg:-mt-7"> <AnTp :key="a" text="A"/><AnTb :key="r" text="r"/> <AnTp text="e"/> </span></span> 
                    <ImgLeft>
                        <img class="w-32 lg:rotate-90 lg:w-[200px]" src="../assets/images/img.png" alt="img">
                    </ImgLeft>
                    <span class="block md:inline-block overflow-hidden">
                        <AnTp text="C" />
                        <AnTb text="r" />
                        <AnTp text="e" />
                        <AnTb text="a" />
                        <AnTp text="t" />
                        <AnTb text="i" />
                        <AnTp text="v" />
                        <AnTb text="e" />
                    </span>
                    </h2>
                    <h4 class="flex flex-col md:flex-row font-clash font-normal text-xl lg:text-8xl uppercase justify-center items-center gap-5 text-center pt-10">
                       <span>
                        <AnTl text="A" />
                        <AnTb text="g" />
                        <AnTl text="e" />
                        <AnTp text="n" />
                        <AnTl text="c" />
                        <AnTb text="i" />
                        <AnTl text="e" />
                        <AnTp text="s" />
                       </span>
                        <button class="bg-white rounded-full flex items-center justify-between overflow-hidden w-32 lg:w-auto"><span class="bg-main w-24 flex items-center text-secondary justify-center rounded-full h-14 lg:h-24 text-xl lg:text-7xl"><FlFilledPlayMultiple/></span><img class="w-1/2" src="../assets/images/img2.png" alt=""></button> <span class="text-base lg:text-2xl text-third font-medium max-w-full  md:max-w-72">
                            <AnTp text="Award-winning studio" />
                            <span class="block md:inline-block">
                            <AnTb text=" Based in San Francisco" />
                            </span></span></h4>
                    <p class="font-clash text-base text-white font-normal py-10">
                        <TextFly text="Boltzshift Studio is a design & develop agency of the future with 120+ successful projects in their portfolio."/>
                        </p>
                    <p><a href="#" class="font-clash font-medium py-3 px-5 bg-main duration-300 ease-linear text-base text-secondary"> <AnTp text="Book a demo" /> <FlArrowCircleRight class="inline-block text-xl"/></a></p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { FlFilledPlayMultiple,FlArrowCircleRight } from '@kalimahapps/vue-icons';
import AnTl  from '@/components/animation/Antl.vue'
import AnTb  from '@/components/animation/Antb.vue'
import AnTp  from '@/components/animation/Antp.vue'
import TextFly  from '@/components/animation/TextFly.vue'
export default {
    name:"HeroComponent",
    components:{
        FlFilledPlayMultiple,FlArrowCircleRight,AnTl,AnTb,AnTp,TextFly,
    },
 
    mounted(){
        
    }
}
</script>
<style  scoped>
    
</style>