<template >
    <section id="services" class="py-20">
        <div class="container">
            
            <div class="md:flex">
                <div class="md:w-1/3">
                    <div class="title pb-5 md:pb-0">
                        <h3 class="font-clash text-xl md:text-4xl text-white font-bold !leading-normal">KNOW OUR <span class="inline-block md:block"> SERVICES</span></h3>
                        <p class="font-clash text-sm md:text-lg md:pt-3 text-third font-medium">Our exceptional design services</p>
                    </div>
                </div>
                <div class="md:w-2/3">
                    <div class="services flex flex-wrap justify-between gap-10">
                  
                           <ItemUtility  :icon="CoBrandAnalogue" :linkIcon="AkLinkOut" title="Branding" info="I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites." link="https://ableproadmin.com/dashboard/index.html#!"/>
                           <ItemUtility  :icon="CoBrandAnalogue" :linkIcon="AkLinkOut" title="Design" info="I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites." link="https://ableproadmin.com/dashboard/index.html#!"/>
                           <ItemUtility  :icon="CoBrandAnalogue" :linkIcon="AkLinkOut" title="Development" info="I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites." link="https://ableproadmin.com/dashboard/index.html#!"/>
                           <ItemUtility  :icon="CoBrandAnalogue" :linkIcon="AkLinkOut" title="Art Direction" info="I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites." link="https://ableproadmin.com/dashboard/index.html#!"/>
                       
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { CoBrandAnalogue, AkLinkOut } from '@kalimahapps/vue-icons';
import ItemUtility from "@/components/utility/ServiceItem.vue"
export default {
    name:"ServiceComponent",
    components:{
        CoBrandAnalogue,AkLinkOut,ItemUtility
    }
}
</script>
<style >
    
</style>