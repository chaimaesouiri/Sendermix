<template>

    <div :key="componentId" :class="[componentId + '_container_0']"
        class="relative isolate overflow-hidden bg-gray-900 py-24 @sm:py-32 ">
        <div v-for="(image1, key) in settings.image1" class="group hover:outline-dashed rounded relative mt-2">
            <ElementActions :aiAjaxWorking="aiAjaxWorking" :actions="['ai', 'edit', 'clone', 'delete']" element="image1"
                :elementData="image1" :keyElement="key" @edit-component="editComponent" @init-ai="handleInitAI"
                @clone="initClone" @delete="initDelete" />
            <img :class="[componentId + '_image1_' + key]"
                class="absolute inset-0 -z-10 h-full w-full object-cover object-right @md:object-center"
                :src="image1.path" :alt="image1.title">
        </div>
        <div
            class="hidden @sm:absolute @sm:-top-10 @sm:right-1/2 @sm:-z-10 @sm:mr-10 @sm:block @sm:transform-gpu @sm:blur-3xl">
            <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
            </div>
        </div>
        <div
            class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl @sm:top-[-28rem] @sm:ml-16 @sm:translate-x-0 @sm:transform-gpu">
            <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
            </div>
        </div>
        <div class="mx-auto max-w-7xl px-6 @lg:px-8">
            <div class="mx-auto max-w-2xl @lg:mx-0">
                <div v-for="(title, key) in settings.title" class="group hover:outline-dashed rounded relative mt-2">
                    <ElementActions :aiAjaxWorking="aiAjaxWorking" :actions="['ai', 'edit', 'clone', 'delete']"
                        element="title" :elementData="title" :keyElement="key" @edit-component="editComponent"
                        @init-ai="handleInitAI" @clone="initClone" @delete="initDelete" />


                    <h2 :class="[componentId + '_title_' + key]"
                        class="text-4xl font-bold tracking-tight text-white @sm:text-6xl" v-html="title.content"></h2>
                </div>
                <div v-for="(paragraphe1, key) in settings.paragraphe1"
                    class="group hover:outline-dashed rounded relative mt-2">
                    <ElementActions :aiAjaxWorking="aiAjaxWorking" :actions="['ai', 'edit', 'clone', 'delete']"
                        element="paragraphe1" :elementData="paragraphe1" :keyElement="key"
                        @edit-component="editComponent" @init-ai="handleInitAI" @clone="initClone"
                        @delete="initDelete" />
                    <p :class="[componentId + '_paragraphe1_' + key]" class="mt-6 text-@lg leading-8 text-gray-300"
                        v-html="paragraphe1.content"></p>
                </div>
            </div>
            <div
                class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 @sm:mt-20 @lg:mx-0 @lg:max-w-none @lg:grid-cols-3 @lg:gap-8">
                <div class="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
                    <div v-for="(   svg1, key) in settings.svg1"
                        class="group hover:outline-dashed rounded relative mt-2">
                        <ElementActions :aiAjaxWorking="aiAjaxWorking" :actions="['ai', 'edit', 'clone', 'delete']"
                            element="svg1" :elementData="svg1" :keyElement="key" @edit-component="editComponent"
                            @init-ai="handleInitAI" @clone="initClone" @delete="initDelete" />
                        <svg :class="[componentId + '_svg1_' + key]" class="h-7 w-5 flex-none text-indigo-400"
                            viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" v-html="svg1.content">

                        </svg>
                    </div>
                    <div class="text-base leading-7">
                        <div v-for="(title1, key) in settings.title1"
                            class="group hover:outline-dashed rounded relative mt-2">
                            <ElementActions :aiAjaxWorking="aiAjaxWorking" :actions="['ai', 'edit', 'clone', 'delete']"
                                element="title1" :elementData="title1" :keyElement="key" @edit-component="editComponent"
                                @init-ai="handleInitAI" @clone="initClone" @delete="initDelete" />
                            <h3 :class="[componentId + '_title1_' + key]" class="font-semibold text-white"
                                v-html="title1.content"></h3>
                        </div>
                        <div v-for="(title2, key) in settings.title2"
                            class="group hover:outline-dashed rounded relative mt-2">
                            <ElementActions :aiAjaxWorking="aiAjaxWorking" :actions="['ai', 'edit', 'clone', 'delete']"
                                element="title2" :elementData="title2" :keyElement="key" @edit-component="editComponent"
                                @init-ai="handleInitAI" @clone="initClone" @delete="initDelete" />
                            <p :class="[componentId + '_title2_' + key]" class="mt-2 text-gray-300"
                                v-html="title2.content"></p>
                        </div>
                    </div>
                </div>
                <div class="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">

                    <div v-for="(svg2, key) in settings.svg2" class="group hover:outline-dashed rounded relative mt-2">


                        <ElementActions :aiAjaxWorking="aiAjaxWorking" :actions="['ai', 'edit', 'clone', 'delete']"
                            element="svg2" :elementData="svg2" :keyElement="key" @edit-component="editComponent"
                            @init-ai="handleInitAI" @clone="initClone" @delete="initDelete" />
                        <svg :class="[componentId + '_svg2_' + key]" class="h-7 w-5 flex-none text-indigo-400"
                            viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" v-html="svg2.content">
                        </svg>
                    </div>

                    <div class="text-base leading-7">
                        <div v-for="(title3, key) in settings.title3"
                            class="group hover:outline-dashed rounded relative mt-2">
                            <ElementActions :aiAjaxWorking="aiAjaxWorking" :actions="['ai', 'edit', 'clone', 'delete']"
                                element="title3" :elementData="title3" :keyElement="key" @edit-component="editComponent"
                                @init-ai="handleInitAI" @clone="initClone" @delete="initDelete" />
                            <h3 :class="[componentId + '_title3_' + key]" class="font-semibold text-white"
                                v-html="title3.content"></h3>
                        </div>

                        <div v-for="(title4, key) in settings.title4"
                            class="group hover:outline-dashed rounded relative mt-2">
                            <ElementActions :aiAjaxWorking="aiAjaxWorking" :actions="['ai', 'edit', 'clone', 'delete']"
                                element="title4" :elementData="title4" :keyElement="key" @edit-component="editComponent"
                                @init-ai="handleInitAI" @clone="initClone" @delete="initDelete" />
                            <p :class="[componentId + '_title4_' + key]" class="mt-2 text-gray-300 "
                                v-html="title4.content"></p>
                        </div>
                    </div>
                </div>
                <div class="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">

                    <div v-for="(svg3, key) in settings.svg3" class="group hover:outline-dashed rounded relative mt-2">

                        <ElementActions :aiAjaxWorking="aiAjaxWorking" :actions="['ai', 'edit', 'clone', 'delete']"
                            element="svg3" :elementData="svg3" :keyElement="key" @edit-component="editComponent"
                            @init-ai="handleInitAI" @clone="initClone" @delete="initDelete" />
                        <svg :class="[componentId + '_svg3_' + key]" class="h-7 w-5 flex-none text-indigo-400"
                            viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" v-html="svg3.content">

                        </svg>

                    </div>

                    <div class="text-base leading-7">
                        <div v-for="(title5, key) in settings.title5"
                            class="group hover:outline-dashed rounded relative mt-2">
                            <ElementActions :aiAjaxWorking="aiAjaxWorking" :actions="['ai', 'edit', 'clone', 'delete']"
                                element="title5" :elementData="title5" :keyElement="key" @edit-component="editComponent"
                                @init-ai="handleInitAI" @clone="initClone" @delete="initDelete" />
                            <h3 :class="[componentId + '_title5_' + key]" class="font-semibold text-white"
                                v-html="title5.content"></h3>

                        </div>

                        <div v-for="(title6, key) in settings.title6"
                            class="group hover:outline-dashed rounded relative mt-2">
                            <ElementActions :aiAjaxWorking="aiAjaxWorking" :actions="['ai', 'edit', 'clone', 'delete']"
                                element="title6" :elementData="title6" :keyElement="key" @edit-component="editComponent"
                                @init-ai="handleInitAI" @clone="initClone" @delete="initDelete" />
                            <p :class="[componentId + '_title6_' + key]" class="mt-2 text-gray-300"
                                v-html="title6.content"></p>
                        </div>
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
    emit("openSettings", data.element, props.position, data.elementKey, data.elementPath, data.cloneParent);
}

const initClone = function (data) {
    emit("cloneComponent", data.element, props.position, data.elementKey, data.elementPath, data.cloneParent);
}

const initDelete = function (data) {
    emit("removeComponent", data.element, props.position, data.elementKey, data.elementPath, data.cloneParent);
}

const handleInitAI = async function (el) {
    await initAI(el.data, aiAjaxWorking);
}

onMounted(() => {
    updateStyles(componentId, props, generateCss, componentId);
});

watch(() => props.settings, (newSettings, oldSettings) => {
    const oldStyleElement = document.querySelector("style[" + componentId + "_previewMode='true']");
    if (oldStyleElement) {
        oldStyleElement.remove();
    }
    console.log(newSettings);
    updateStyles(componentId, props, generateCss, componentId);
}, { deep: true });
</script>