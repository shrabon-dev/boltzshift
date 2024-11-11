
<template>
    <section id="works">
        <div class="container py-20">
             <div class="title pb-20">
                <h3 class="font-clash text-4xl text-white font-bold text-center">
                    <Antb text="S" />
                    <Antp text="E" />
                    <Antb text="L" />
                    <Antp text="E" />
                    <Antb text="C" />
                    <Antp text="T" />
                    <Antb text="E" />
                    <Antp text="D" />
                    <span> </span>
                    <Antb text="W" />
                    <Antp text="O" />
                    <Antb text="R" />
                    <Antp text="K" />
                </h3>
                <p class="font-clash text-lg pt-3 text-third font-medium text-center">
                    <TextFly text="Our exceptional design services" />
                </p>
             </div>
            <div class="flex flex-wrap justify-between">
                <div v-for="(item, index) in items" :key="index" class="w-[45%] mb-5">
                    <div class="item">
                       <a href="#">
                            <div class="img overflow-hidden group">
                                <ImgRevel>
                                    <img class="w-full group-hover:scale-125 duration-300 ease-linear" :src="item.image" alt="work image">
                                </ImgRevel>
                            </div>
                            <div class="info py-5">
                                <h4 class="font-medium font-clash text-white text-lg md:text-3xl">
                                    <Antb :text="item.title" />
                                </h4>
                                <h6 class="font-medium font-clash pt-2 text-third text-sm md:text-lg">
                                    <Antl :text="item.subTitle" />
                                </h6>
                            </div>
                       </a>
                    </div>
                </div>
            </div>
            <p class="text-center pt-10"> <a href="#" class="font-clash font-medium py-3 px-5 bg-main duration-300 ease-linear text-base text-secondary">View More</a></p>
        </div>
    </section>
</template>
<script>
import ImgRevel from './animation/ImgRevel.vue';
import Antb from './animation/Antb.vue';
import Antl from './animation/Antl.vue';
import Antp from './animation/Antp.vue';
import TextFly from './animation/TextFly.vue';
export default {
    name:"WorksComponent",
    components:{ImgRevel, Antb, Antl, Antp, TextFly},
    data(){
        return{
         items:[
                {
                    title: 'Fortknox Chat Application',
                    subTitle: 'Branding & Design',
                    image: `../assets/images/img3.png`,
                    link: 'link one',
                },
                {
                    title: 'Bsoston RealEstate App',
                    subTitle: 'Branding & Ui',
                    image: 'src/assets/images/img4.png',
                    link: 'link two',
                },
                {
                    title: 'Boltzshift - Portfolio',
                    subTitle: 'Branding & Ui',
                    image: 'src/assets/images/img5.png',
                    link: 'link three',
                },
                {
                    title: 'Croma - Agency',
                    subTitle: 'Branding & Ui',
                    image: 'src/assets/images/img6.png',
                    link: 'link four',
                },
            ]
        }
    }
}

</script>
<style>
    
</style>

