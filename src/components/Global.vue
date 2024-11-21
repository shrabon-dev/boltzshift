<template>
    <section id="grlobal" class="py-20">
         <div class="container">
            <div class="title">
                <p class="font-clash text-lg pt-3 text-third font-medium text-center"><AnTb text="Proudly serving some of the top global companies" /></p>
            </div>
            <div class="content pt-20">
                <AntpCard>
                    <div class=" flex flex-wrap md:flex-nowrap justify-evenly">
                        <div class="w-1/2 pb-5 md:w-1/3 lg:w-1/6">
                            <img class="md:w-1/2 mx-auto block" src="../assets/images/wavefun.png" alt="wavefun.png">
                        </div>
                        <div class="w-1/2 pb-5 md:w-1/3 lg:w-1/6">
                            <img class="md:w-1/2 mx-auto block" src="../assets/images/convertkit.png" alt="wavefun.png">
                        </div>
                    
                        <div class="w-1/2 pb-5 md:w-1/3 lg:w-1/6">
                            <img class="md:w-1/2 mx-auto block" src="../assets/images/doradesign.png" alt="wavefun.png">
                        </div>
                        <div class="w-1/2 pb-5 md:w-1/3 lg:w-1/6">
                            <img class="md:w-1/2 mx-auto block" src="../assets/images/Sisila.png" alt="wavefun.png">
                        </div>
                        <div class="w-1/2 pb-5 md:w-1/3 lg:w-1/6">
                            <img class="md:w-1/2 mx-auto block" src="../assets/images/proline.png" alt="wavefun.png">
                        </div>
                        <div class="w-1/2 pb-5 md:w-1/3 lg:w-1/6">
                            <img class="md:w-1/2 mx-auto block" src="../assets/images/doradesign.png" alt="wavefun.png">
                        </div>
                    </div>
                </AntpCard>
            </div>
         </div>
    </section>
</template>
<script>
import AnTb from './animation/Antb.vue';
import AntpCard from './animation/AntpCard.vue';

export default {
    name:"GlobalComponent",
    components:{
        AnTb,AntpCard
    }
}
</script>
<style scoped>
    
</style>