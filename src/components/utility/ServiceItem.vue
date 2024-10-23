<template>
    <div class="md:w-[45%] lg:w-[45%] xl:w-[46%] item bg-fourth p-5 group hover:bg-main duration-300 ease-linear">
      <div class="icon relative flex justify-between">
        <!-- Dynamic component usage -->
        <span  class="text-7xl duration-300 ease-linear text-white group-hover:text-secondary"> 
            <CoBrandAnalogue/>
        </span>
        <a
          class="text-4xl opacity-0 group-hover:opacity-100 duration-300 ease-linear text-secondary group-hover:text-secondary"
          :href="link"
        >
          <AkLinkOut />
        </a>
      </div>
      <h4 class="font-clash text-2xl md:text-xl xl:text-4xl text-white pt-14 pb-4 duration-300 ease-linear group-hover:text-secondary font-bold">
        {{ title }}
      </h4>
      <p class="font-clash font-medium text-third duration-300 ease-linear group-hover:text-secondary !leading-normal">
        {{ info }}
      </p>
    </div>
  </template>
  
  <script>
  import { CoBrandAnalogue, AkLinkOut } from '@kalimahapps/vue-icons';

  export default {
    name: "ItemUtility",
    components:{
        CoBrandAnalogue,AkLinkOut
    },
    props: {
      icon: {
        type: [Object, Function], // Accept component functions or objects
        required: true
      },
      linkIcon: {
        type: [Object, Function],
        required: true
      },
      title: {
        type: String,
        required: true
      },
      link: {
        type: String,
        required: true
      },
      info: {
        type: String,
        required: true
      }
    }
    
  };


  </script>
  