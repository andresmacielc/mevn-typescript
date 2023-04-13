<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <router-link to="/" class="navbar-brand">
                Vue Typescript
            </router-link>
            <div>
                <ul class="navbar-nav">
                    <li class="nav-item text-white">
                        <router-link class="nav-link" to="/">tasks</router-link>
                    </li>
                    <li class="nav-item text-white">
                        <router-link class="nav-link" to="/tasks/new">create task</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import {defineComponent} from '@vue/runtime-core'
export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Navbar",
});
</script>