<template>
    <div class="col-md-4 offset-md-4">
        <h1 class="text-center h3 mb-3"></h1>
        <form @submit.prevent="handleUpdate()">
        <input type="text" v-model="currentTask.title" class="form-control mb-3"/>

        <textarea rows="3" v-model="currentTask.description" class="form-control mb-3"></textarea>

        <button class="btn btn-primary text-center">Update</button>
    </form>
    <div class="text-center">
        <button @click="handleDelete()" class="btn btn-danger">Delete</button>
    </div>
    
    </div>
</template>

<script lang="ts">
import { Task } from "@/interfaces/Task";
import { deleteTask, getTask, updateTask } from "@/services/TaskService";
import { defineComponent } from "vue";


export default defineComponent({
    data(){
        return{
            currentTask: {} as Task
        }
    },
    methods:{
        async loadTask(id: string){
            const res = await getTask(id);
            this.currentTask = res.data
        },
        async handleUpdate(){
            if(typeof this.$route.params.id === 'string'){
            const res = await updateTask(this.$route.params.id, this.currentTask);
            console.log(res);
            this.$router.push("/");
            }
        },
        async handleDelete(){
            if(typeof this.$route.params.id === 'string'){
            const res = await deleteTask(this.$route.params.id);
            console.log(res);
            this.$router.push("/");
        }
        }
    }, 
    mounted(){
        if(typeof this.$route.params.id === 'string'){
            this.loadTask(this.$route.params.id)
        }
    },
})
</script>