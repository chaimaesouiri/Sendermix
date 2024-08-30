<template>
    <div  :key="componentId" :class="[componentId + '_container_0']"  class="bg-white w-full">
        <div class="mx-auto max-w-7xl py-24 @sm:px-6 @sm:py-32 @lg:px-8">
            <div class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl @sm:rounded-3xl @sm:px-16">



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


                    <h2 :class="[componentId + '_headline_' + key]" class="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white @sm:text-4xl" v-html="headline.content"></h2>

                </div>

                <div v-for="(subheadline, key) in settings.subheadline" class="group hover:outline-dashed rounded relative mt-2">

                    <ElementActions 
                        :aiAjaxWorking="aiAjaxWorking" 
                        :actions="['ai', 'edit', 'clone', 'delete']"
                        element=" subheadline"
                        :elementData=" subheadline"
                        :keyElement="key"
                        @edit-component="editComponent" 
                        @init-ai="handleInitAI" 
                        @clone="initClone" 
                        @delete="initDelete" 
                    />

                  <p :class="[componentId + '_ subheadline_' + key]"  class="mx-auto mt-6 max-w-xl text-@@lg leading-8 text-gray-300" v-html=" subheadline.content"></p>
                </div>

            <div class="mt-10 flex items-center justify-center gap-x-6">
                <div v-for="(button1, key) in settings.button1" class="group hover:outline-dashed rounded relative mt-2">
                    <ElementActions 
                        :aiAjaxWorking="aiAjaxWorking" 
                        :actions="['ai', 'edit', 'clone', 'delete']"
                        element=" button1"
                        :elementData=" button1"
                        :keyElement="key"
                        @edit-component="editComponent" 
                        @init-ai="handleInitAI" 
                        @clone="initClone" 
                        @delete="initDelete" 
                    />

                   <a :href="button1.path" :class="[componentId + '_button1_' + key]" class="rounded-@md bg-white px-3.5 py-2.5 text-@sm font-semibold text-gray-900 shadow-@sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" v-html="button1.content"></a>
                </div>

                <div v-for="(button2, key) in settings.button2" class="group hover:outline-dashed rounded relative mt-2">

                    <ElementActions 
                        :aiAjaxWorking="aiAjaxWorking" 
                        :actions="['ai', 'edit', 'clone', 'delete']"
                        element=" button2"
                        :elementData=" button2"
                        :keyElement="key"
                        @edit-component="editComponent" 
                        @init-ai="handleInitAI" 
                        @clone="initClone" 
                        @delete="initDelete" 
                    />

                <a :href="button2.path" :class="[componentId + '_button2_' + key]" class="text-@sm font-semibold leading-6 text-white" v-html="button2.content"> </a>
                </div>
            </div>
            <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" aria-hidden="true">
                <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fill-opacity="0.7" />
                <defs>
                <radialgradient id="827591b1-ce8c-4110-b064-7cb85a0b1217"> 
                    <stop stop-color="#7775D6" />
                    <stop offset="1" stop-color="#E935C1" />
                </radialgradient>
                </defs>
            </svg>
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