<template lang="html">
   <HeaderComponent/>
   <HeroComponent/>
   <AboutComponent/>
   <WorksComponent/>
   <ServiceComponent/>
   <GlobalComponent/>
   <ProcessComponent/>
   <PlanComponent/>
   <ContactComponent/>
   <FooterComponent/>
 </template>
 <script>
import HeaderComponent from '@/components/Header.vue';
import HeroComponent from '@/components/Hero.vue'; 
import AboutComponent from "@/components/About.vue"
import WorksComponent from "@/components/Works.vue"
import ServiceComponent from "@/components/Services.vue";
import ProcessComponent from "@/components/Process.vue"
import GlobalComponent from "@/components/Global.vue"
import PlanComponent from "@/components/Plan.vue"
import ContactComponent from "@/components/Contact.vue"
import FooterComponent from "@/components/Footer.vue"

 export default {
    name:"HomePage",
    components:{
      HeaderComponent,
      HeroComponent,
      AboutComponent,
      WorksComponent,
      ServiceComponent,
      ProcessComponent,
      PlanComponent,
      GlobalComponent,
      FooterComponent,
      ContactComponent,
    }
 }
 </script>
 <style scoped>
  
 </style>