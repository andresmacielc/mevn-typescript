<template>
    <ul class="list-group list-group-item-action">
        <li class= "list-group-item" style="cursor: pointer;" v-for="(task, index) in tasks" :key="index" @click="this.$router.push(`/tasks/${task._id}`)">
            {{index + 1}}.
            {{task.title}}    
        </li>
    </ul>

</template>

<script lang="ts">
import { Task } from '@/interfaces/Task';
import { getTasks } from '@/services/TaskService';
import {defineComponent} from 'vue'

export default defineComponent({
    data(){
        return{
            tasks: [] as Task[]
        }
    },
    
    methods: {
        async loadTasks(){
            const res = await getTasks()
            this.tasks = res.data
        }
    },
    
    mounted(){
        console.log('mounted');
    },


})
</script>