<template >
    <nav class="py-5">
        <div class="container flex items-center ">
            <div class="w-1/12">
                <img src="../assets/images/Logo.png" alt="logo">
            </div>
            <div class="w-10/12 text-center hidden md:block">
                <ul class="bg-white inline-flex mx-auto p-4 px-2  items-center">
                    <li><a href="#" class="font-clash font-medium py-3 px-5 bg-main duration-300 ease-linear hover:bg-main text-base text-secondary">Home</a></li>
                    <li><a href="#" class="font-clash font-medium py-3 px-5 bg-transparent duration-300 ease-linear hover:bg-main text-base text-secondary">Abouts</a></li>
                    <li><a href="#" class="font-clash font-medium py-3 px-5 bg-transparent duration-300 ease-linear hover:bg-main text-base text-secondary">Works</a></li>
                    <li><a href="#" class="font-clash font-medium py-3 px-5 bg-transparent duration-300 ease-linear hover:bg-main text-base text-secondary">Blog's</a></li>
                    <li><a href="#" class="font-clash font-medium py-3 px-5 bg-transparent duration-300 ease-linear hover:bg-main text-base text-secondary">Contact us</a></li>
                </ul>
            </div>
            <div class="w-1/12">
                <a href="#" class="font-clash font-medium py-3 px-5 bg-main duration-300 ease-linear text-base text-secondary">Get in touch</a>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name:"HeaderComponent"
}
</script>
<style scoped>
    
</style>