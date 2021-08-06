<template>
<div>
    <NavbarHealthCenter/>
    <div class="w-full h-full mt-0 font-sans antialiased bg-grey-lighter content-center">
        <div class="w-5/6 p-4 container mx-auto py-8">
            <table class="border lg:w-1/2 mx-auto bg-white rounded shadow">
                <thead >
                    <tr class="bg-gray-50 border-b">
                    
                        <th class="p-2 border-r cursor-pointer text-sm font-thick text-gray-500">
                            <div class="flex items-center justify-center">
                                Card Number
                            </div>
                        </th>
                        <th class="p-2 border-r cursor-pointer text-sm font-thick text-gray-500">
                            <div class="flex items-center justify-center">
                                Name
                            </div>
                        </th>
                        <th class="p-2 border-r cursor-pointer text-sm font-thick text-gray-500">
                            <div class="flex items-center justify-center">
                                Attach Image 
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-gray-100 text-center border-b text-lg text-gray-600" v-for = "patient in patients" :key="patient.card_number">
                        <td class="p-2 border-r"> {{ patient.card_number }}</td>
                        <td class="p-2 border-r"> {{ patient.name }}</td>
                        <td>
                            <input class="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin" type="button" @click="file_selector" value="Attach Image">   
                            <input type="file" id="my_file">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>

<script lang="ts">
    import { defineComponent, reactive } from 'vue'
     import NavbarHealthCenter from '../components/navbarhealthcenter.vue';  
    const patients = [
        {
            card_number : "123",
            name : "John Doe",
        },
        {
            card_number : "124",
            name : "Foo Bar",
        }

    ];
    export default defineComponent ({
        name : "labratory",
         components:{
            NavbarHealthCenter
        },
        methods:{
            file_selector(){
                console.log('button clicked')
                document.getElementById('my_file').click();
            }
        },
        setup(){
            return {
                patients
            };
        }
    })
</script>
<style>
    #my_file {
        display: none;
    }

</style>