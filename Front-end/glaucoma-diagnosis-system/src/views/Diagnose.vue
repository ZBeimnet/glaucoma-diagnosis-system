<template>
    <div class="w-full h-full mt-0 font-sans antialiased bg-grey-lighter ">
        <div class="w-full bg-grey-lightest mt-0 " style="padding-top: 4rem;">
            <div class="container mx-auto py-8">
                <div v-for = "patient in patients" :key="patient.card_number">
                    <div class="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow ">
                        <div class="py-4 px-8 content-center">
                            <div class="flex mb-4 justify-center">
                                <div class="w-1/2 mr-1">
                                    <label class="text-grey-darker text-sm font-bold mb-2" for="card_number">Card Number</label>
                                    <p class="float-right" id="card_number"> {{patient.card_number}} </p>
                                </div>
                            </div>

                            <div class="flex mb-4 justify-center">
                                <div class="w-1/2 mr-1 ">
                                    <label class="text-grey-darker text-sm font-bold mb-2 " for="name">Name</label>
                                    <p class="float-right" id="name"> {{patient.name}} </p>
                                </div>
                            </div>
                            <div class="flex mb-4 justify-center">
                                <div class="w-1/2 mr-1">
                                    <label class="text-grey-darker text-sm font-bold mb-2" for="gender">Gender</label>
                                    <p class="float-right" id="gender"> {{patient.gender}} </p>
                                </div>
                            </div>
                            <div class="flex mb-4 justify-center">
                                <div class="w-1/2 mr-1">
                                    <label class="text-grey-darker text-sm font-bold mb-2" for="computer_usage">Computer Usage</label>
                                    <p class="float-right" id="computer_usage"> {{patient.computer_usage}} hour/day </p>
                                </div>
                            </div>
                            <div class="flex mb-4 justify-center">
                                <div class="w-1/2 mr-1">
                                    <button class="w-1/3 bg-blue-500  rounded text-white mr">
                                        Open Image
                                    </button>
                                    <button class="w-1/2 bg-blue-500  rounded text-white float-right">
                                        Patient's History
                                    </button>
                                </div>
                            </div>
                            <div class="relative text-gray-700 mt-10">
                                <button class="bg-blue-500 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                    Diagnose
                                </button>
                                <button class="bg-blue-500 text-white font-bold py-2 px-4 border border-blue-700 rounded float-right">
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, reactive } from 'vue'
    const patients = [
        {
            card_number: "12",
            name: "John Doe",
            age: 42,
            gender: "M",
            computer_usage: 4,
            image: "file://dir"
        }
    ];
    export default defineComponent ({
        name: "Diagnose",
        methods:{

        },
        setup(){
            return {
                patients
            };
        }
    })
</script>
