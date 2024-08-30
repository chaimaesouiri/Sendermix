<template>
    <div :key="componentId" :class="[componentId + '_container_0']" class="bg-white px-6 py-24 sm:py-32 lg:px-8 w-full">
        <div class="mx-auto max-w-2xl text-center">
            <div v-for="(headline, key) in settings.headline" class="group hover:outline-dashed rounded relative mt-2">
                <ElementActions 
                    :aiAjaxWorking="aiAjaxWorking" 
                    :actions="['ai', 'edit', 'clone', 'delete']"
                    element="headline"
                    :elementData="headline"
                    :keyElement="key"
                    @edit-component="editComponent" 
                    @init-ai="handleInitAI" 
                    @clone="initClone" 
                    @delete="initDelete" 
                />

                <h2 :class="[componentId + '_headline_' + key]" class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl" v-html="headline.content"></h2>
            </div>

            <div v-for="(subheadline, key) in settings.subheadline" class="group hover:outline-dashed rounded relative mt-2">
                <ElementActions 
                    :aiAjaxWorking="aiAjaxWorking" 
                    :actions="['ai', 'edit', 'clone', 'delete']"
                    element="subheadline"
                    :elementData="subheadline"
                    :keyElement="key"
                    @edit-component="editComponent" 
                    @init-ai="handleInitAI" 
                    @clone="initClone" 
                    @delete="initDelete" 
                />

                <p :class="[componentId + '_subheadline_' + key]" class="mt-6 text-lg leading-8 text-gray-600" v-html="subheadline.content"></p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { generateCss, updateStyles, initAI, updateCssRule } from '../editor/functions'
    import { ref, onMounted, watch } from 'vue';
    import ElementActions from '../editor/ElementActions'
    import ElementActionsParent from '../editor/ElementActionsParent'
    
    const props = defineProps(['settings', 'position', 'componentName']);
    const emit = defineEmits(["openSettings", "cloneComponent", "removeComponent"]);

    const componentId = props.componentName + '_' + props.position;
    const aiAjaxWorking = ref(false)

    const editComponent = function (data) {
        emit("openSettings", data.element, props.position ,data.elementKey, data.elementPath, data.cloneParent);
    }

    const initClone = function (data) {
        emit("cloneComponent", data.element, props.position ,data.elementKey, data.elementPath, data.cloneParent);
    }

    const initDelete = function (data) {
        emit("removeComponent", data.element, props.position ,data.elementKey, data.elementPath, data.cloneParent);
    }

    const handleInitAI = async function (el) {
        await initAI(el.data, aiAjaxWorking);
    }

    onMounted(() => {
        updateStyles(componentId, props, generateCss, componentId);
    });

    watch(() => props.settings, (newSettings, oldSettings) => {
        const oldStyleElement = document.querySelector("style["+ componentId +"_previewMode='true']");
        if (oldStyleElement) {
            oldStyleElement.remove();
        }
        console.log(newSettings);
        updateStyles(componentId, props, generateCss, componentId);
    }, { deep: true });
</script>