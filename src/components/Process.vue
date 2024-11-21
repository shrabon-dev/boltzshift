<template>
    <section id="process" class="py-20">
        <div class="container">
            <div class="title">
            <h3 class="font-clash text-4xl text-white font-bold text-center !leading-normal">
                <AnTl text="O"/>
                <AnTl text="U"/>
                <AnTl text="R"/>
                <AnTl text="P"/>
                <AnTl text="R"/>
                <AnTl text="O"/>
                <AnTl text="C"/>
                <AnTl text="E"/>
                <AnTl text="S"/>
                <AnTl text="S"/>
            </h3>
        </div>
        <AnTpCard>
        <div class="md:flex gap-10 space-y-5 md:space-y-0  pt-20">
            <div class="md:w-1/3 opacity-0">
                    <div class="process bg-main/10 p-5 h-full">
                        <h5 class="font-clash text-7xl text-main">01</h5>
                        <h2 class="font-clash text-4xl text-white pt-3 md:pt-14 pb-4 duration-300 ease-linear group-hover:text-secondary font-medium">Research & Plan</h2>
                        <p class="font-clash font-medium text-third duration-300 ease-linear text-base group-hover:text-secondary !leading-normal">Design process is critical for gathering information, requirements, and other data you need in order to make informed decisions later.</p>
                    </div>
            </div>
            <div class="md:w-1/3 opacity-0">
                    <div class="process bg-main/10 p-5 h-full">
                        <h5 class="font-clash text-7xl text-main">02</h5>
                        <h2 class="font-clash text-4xl text-white pt-3 md:pt-14 pb-4 duration-300 ease-linear group-hover:text-secondary font-medium">Mock Up</h2>
                        <p class="font-clash font-medium text-third duration-300 ease-linear text-base group-hover:text-secondary !leading-normal">Design process is critical for gathering information, requirements, and other data you need in order to make informed decisions later.Design process is critical for gathering information, requirements, and other data you need in order to make informed decisions later.</p>
                    </div>
            </div>
            <div class="md:w-1/3 opacity-0">
                    <div class="process bg-main/10 p-5 h-full">
                        <h5 class="font-clash text-7xl text-main">03</h5>
                        <h2 class="font-clash text-4xl text-white pt-3 md:pt-14 pb-4 duration-300 ease-linear group-hover:text-secondary font-medium">Build </h2>
                        <p class="font-clash font-medium text-third duration-300 ease-linear text-base group-hover:text-secondary !leading-normal">Design process is critical for gathering information, requirements, and other data you need in order to make informed decisions later.</p>
                    </div>
                </div>
            </div>
        </AnTpCard>
        </div>
    </section>
</template>
<script>
import AnTpCard from './animation/AntpCard.vue';
import AnTl from './animation/Antl.vue';
export default {
    name:"ProcessComponent",
    components: {
        AnTpCard,AnTl
    }

    
}
</script>
<style>
    
</style>