<template>
    <section>
        <div class="container py-5 md:py-20 px-5">
                    <div class="title">
                        <h3 class="font-clash text-4xl text-white font-bold !leading-normal text-center">CONTACT US</h3>
                        <p class="font-clash text-lg pt-3 text-third font-medium text-center">Consign offers a number of pricing plans to help you find one that fits your business needs best</p>
                    </div>
            <div class="md:flex">
                <div class="md:w-1/2">
                    <div class="contact_form pr-5 pt-10 md:pt-40">
                        <form action="#">
                        <div class="flex gap-5">
                            <div class="group w-1/2 mb-2" :class="{ 'has-value': firstName.trim() !== '' }">
                            <label class="font-clash font-normal text-base relative -bottom-5">First Name</label>
                            <input v-model="firstName" type="text" class="w-full font-clash font-normal text-base bg-transparent focus:outline-none border-b p-2 border-main" />
                            </div>
                            <div class="group w-1/2 mb-2" :class="{ 'has-value': lastName.trim() !== '' }">
                            <label class="font-clash font-normal text-base relative -bottom-5">Last Name</label>
                            <input v-model="lastName" type="text" class="w-full font-clash font-normal text-base bg-transparent focus:outline-none border-b p-2 border-main" />
                            </div>
                        </div>
                        <div class="flex gap-5">
                            <div class="group w-1/2 mb-2" :class="{ 'has-value': phoneNumber.trim() !== '' }">
                            <label class="font-clash font-normal text-base relative -bottom-5">Phone Number</label>
                            <input v-model="phoneNumber" type="text" class="w-full font-clash font-normal text-base bg-transparent focus:outline-none border-b p-2 border-main" />
                            </div>
                            <div class="group w-1/2 mb-2" :class="{ 'has-value': email.trim() !== '' }">
                            <label class="font-clash font-normal text-base relative -bottom-5">Email</label>
                            <input v-model="email" type="email" class="w-full font-clash font-normal text-base bg-transparent focus:outline-none border-b p-2 border-main" />
                            </div>
                        </div>
                        <div class="group mb-2" :class="{ 'has-value': subject.trim() !== '' }">
                            <label class="font-clash font-normal text-base relative -bottom-5">Subject</label>
                            <input v-model="subject" type="text" class="w-full font-clash font-normal text-base bg-transparent focus:outline-none border-b p-2 border-main" />
                        </div>
                        <div class="group" :class="{ 'has-value': message.trim() !== '' }">
                            <label class="font-clash font-normal text-base relative -bottom-5">Messages</label>
                            <textarea v-model="message" rows="10" class="w-full resize-none font-clash font-normal text-base bg-transparent focus:outline-none border-b p-2 border-main"></textarea>
                        </div>
                        <button type="submit" class="w-full font-clash font-bold text-lg text-secondary p-4 bg-main">Submit</button>
                        </form>
                    </div>
                </div>
                <div class="md:w-1/2">
                    <img class="ml-auto pt-40 h-full block" src="../assets/images/map.png" alt="">
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name:"ContactComponent",
    data(){
        return {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            subject: '',
            message: '',
        }
    },
    methods:{
        updateHasValueClass() {
        // Add 'has-value' class if the input is not empty initially
            if (this.inputValue.trim() !== '') {
                this.$el.classList.add('has-value');
            } else {
                this.$el.classList.remove('has-value');
            }
        }
    },
    watch: {
    // Watch inputValue and add/remove the 'has-value' class when input changes
    inputValue(newValue) {
      this.updateHasValueClass();
    }
  }
}
</script>
<style scoped>
    .group:focus-within > label{

        bottom: 0;
        transition: bottom .4s linear;
        -webkit-transition: bottom .4s linear;
        -moz-transition: bottom .4s linear;
        -ms-transition: bottom .4s linear;
        -o-transition: bottom .4s linear;
        opacity: .5;
        transform: scale(.3);

    }

.group.has-value > label {
    bottom: 0;
    transition: bottom .4s linear;
    -webkit-transition: bottom .4s linear;
    -moz-transition: bottom .4s linear;
    -ms-transition: bottom .4s linear;
    -o-transition: bottom .4s linear;
    opacity: .5;
    transform: scale(.3);
}

</style>