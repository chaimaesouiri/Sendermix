<template>
    <div :key="componentId" :class="[componentId + '_container_0']" class="bg-white w-full">
        <div class="mx-auto max-w-7xl py-24 @sm:px-6 @sm:py-32 @lg:px-8">
            <div class="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl @sm:rounded-3xl @sm:px-16 @md:pt-24 @lg:flex @lg:gap-x-20 @lg:px-24 @lg:pt-0">
            <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] @sm:left-full @sm:-ml-80 @lg:left-1/2 @lg:ml-0 @lg:-translate-x-1/2 @lg:translate-y-0" aria-hidden="true">
                <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
                <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                    <stop stop-color="#7775D6" />
                    <stop offset="1" stop-color="#E935C1" />
                </radialGradient>
                </defs>
            </svg>
            <div class="mx-auto max-w-md text-center @lg:mx-0 @lg:flex-auto @lg:py-32 @lg:text-left">

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

                    <h2 :class="[componentId + '_headline_' + key]" class="text-3xl font-bold tracking-tight text-white @sm:text-4xl" v-html="headline.content"></h2>

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

                    <p :class="[componentId + '_subheadline_' + key]" class="mt-6 text-lg leading-8 text-gray-300" v-html="subheadline.content"></p>

                </div>
                


                
                <div class="mt-10 flex items-center justify-center gap-x-6 @lg:justify-start">

                    <div v-for="(cta1, key) in settings.cta1" class="group hover:outline-dashed rounded relative mt-2">

                        <ElementActions 
                            :aiAjaxWorking="aiAjaxWorking" 
                            :actions="['ai', 'edit', 'clone', 'delete']"
                            element="cta1"
                            :elementData="cta1"
                            :keyElement="key"
                            @edit-component="editComponent" 
                            @init-ai="handleInitAI" 
                            @clone="initClone" 
                            @delete="initDelete" 
                        />

                        <a :href="cta1.path" :class="[componentId + '_cta1_' + key]" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" v-html="cta1.content"></a>

                    </div>

                    <div v-for="(cta2, key) in settings.cta2" class="group hover:outline-dashed rounded relative mt-2">

                        <ElementActions 
                            :aiAjaxWorking="aiAjaxWorking" 
                            :actions="['ai', 'edit', 'clone', 'delete']"
                            element="cta2"
                            :elementData="cta2"
                            :keyElement="key"
                            @edit-component="editComponent" 
                            @init-ai="handleInitAI" 
                            @clone="initClone" 
                            @delete="initDelete" 
                        />

                        <a :href="cta2.path" :class="[componentId + '_cta2_' + key]" class="text-sm font-semibold leading-6 text-white" v-html="cta2.content"></a>
                    </div>

                    
                    
                </div>
            </div>
            <div class="relative mt-16 h-80 @lg:mt-8">
                <div v-for="(image, key) in settings.image" class="group hover:outline-dashed rounded relative mt-2">

                    <ElementActions 
                        :aiAjaxWorking="aiAjaxWorking" 
                        :actions="['ai', 'edit', 'clone', 'delete']"
                        element="image"
                        :elementData="image"
                        :keyElement="key"
                        @edit-component="editComponent" 
                        @init-ai="handleInitAI" 
                        @clone="initClone" 
                        @delete="initDelete" 
                    />

                    <img :class="[componentId + '_image_' + key]" class="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10" :src="image.path" :alt="image.title" width="1824" height="1080">

                </div>
                
            </div>
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