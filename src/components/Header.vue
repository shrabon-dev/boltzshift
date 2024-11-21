<template>
    <nav class="py-5 animate">
        <div class="container flex items-center justify-between">
            <div class="w-1/3 md:w-[16%] lg:w-1/12">
                <img src="../assets/images/Logo.png" alt="logo">
            </div>
            <div  :class="`  w-10/12 text-center ${menu ? 'block':'hidden'} md:block`">
                <ul class="bg-white md:inline-flex mx-auto m_menu p-4 px-2  items-center">
                    <li><a href="#" class="font-clash font-medium mb-2 md:mb-0 w-full md:w-auto inline-block py-3 px-3 lg:px-5 bg-main duration-300 ease-linear hover:bg-main md:text-sm lg:text-base text-secondary">Home</a></li>
                    <li><a href="#" class="font-clash font-medium mb-2 md:mb-0 w-full md:w-auto inline-block py-3 px-3 lg:px-5 bg-transparent duration-300 ease-linear hover:bg-main md:text-sm lg:text-base text-secondary">Abouts</a></li>
                    <li><a href="#" class="font-clash font-medium mb-2 md:mb-0 w-full md:w-auto inline-block py-3 px-3 lg:px-5 bg-transparent duration-300 ease-linear hover:bg-main md:text-sm lg:text-base text-secondary">Works</a></li>
                    <li><a href="#" class="font-clash font-medium mb-2 md:mb-0 w-full md:w-auto inline-block py-3 px-3 lg:px-5 bg-transparent duration-300 ease-linear hover:bg-main md:text-sm lg:text-base text-secondary">Blog's</a></li>
                    <li><a href="#" class="font-clash font-medium mb-2 md:mb-0 w-full md:w-auto inline-block py-3 px-3 lg:px-5 bg-transparent duration-300 ease-linear hover:bg-main md:text-sm lg:text-base text-secondary">Contact us</a></li>
                </ul>
            </div>
            <div class=" md:w-[18%] lg:w-1/12 text-right">
                <a href="#" class="font-clash hidden md:block font-medium py-3 px-5 bg-main duration-300 ease-linear text-base text-center md:text-sm lg:text-base text-secondary">Get in touch</a>
                <button @click="toggleMenu" class="bg-main block md:hidden px-4 py-2 text-2xl text-secondary"> <CgMenuRight/> </button>
            </div>
        </div>
    </nav>
</template>
<script>
import { CgMenuRight } from '@kalimahapps/vue-icons';
import AntpCard from './animation/AntpCard.vue';
export default {
    name:"HeaderComponent",
    components:{
        CgMenuRight,AntpCard
    },
    data(){
        return {
            menu : false,
        }
    },
    methods:{
        toggleMenu(){
            this.menu = !this.menu
            console.log(this.menu)
        }
    }
}
</script>
<style scoped>
    @media screen and (max-width:768px) {
        .m_menu{
            position: absolute;
            z-index: 999999;
            width: 95%;
            left: 50%;
            transform: translateX(-50%);
            top: 80px;
        }
    }
    .animate{
        animation: navbar .8s forwards linear;
        position: relative;
    }
    @keyframes navbar {
        0%{
            top: -100px;
            opacity: 0;
        }
        100%{
            opacity: 1;
            top: 20px;
        }
    }
</style>