<template>
    <section id="price">
        <div class="container px-3 md:px-0 py-20">
                    <div class="title pb-20 text-center">
                        <h3 class="font-clash text-4xl text-white font-bold !leading-normal">CHOOSE YOUR PLAN</h3>
                        <p class="font-clash text-lg pt-3 text-third font-medium">Consign offers a number of pricing plans to help you find one that fits your business needs best</p>
                    </div>
            <div class="md:flex space-y-5 md:space-y-0 justify-evenly">
                 <PlanItem price="450" category="Basic" list=" Weekly updates"/>
                 <PlanItem price="980" category="Pro" list=" Weekly updates" :active="true"/>
                 <PlanItem price="250" category="ENTERPRISE" list=" Weekly updates"/>
            </div>
        </div>
    </section>
</template>
<script>
import PlanItem from "./utility/PlanItem.vue"
export default {
    name:"PlanComponent",
    components:{
        PlanItem,
    }
}
</script>
<style scoped>
    
</style>