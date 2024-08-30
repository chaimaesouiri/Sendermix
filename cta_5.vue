<template>
    <div :key="componentId" :class="[componentId + '_container_0']" class="overflow-hidden bg-white py-32">
        <div class="mx-auto max-w-7xl px-6 @lg:flex @lg:px-8">
            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 @lg:mx-0 @lg:min-w-full @lg:max-w-none @lg:flex-none @lg:gap-y-8">
            <div class="@lg:col-end-1 @lg:w-full @lg:max-w-lg @lg:pb-8">
                <div v-for="(title, key) in settings.title" class="group hover:outline-dashed rounded relative mt-2">
                    <ElementActions 
                        :aiAjaxWorking="aiAjaxWorking" 
                        :actions="['ai', 'edit', 'clone', 'delete']"
                        element="title"
                        :elementData="title"
                        :keyElement="key"
                        @edit-component="editComponent" 
                        @init-ai="handleInitAI" 
                        @clone="initClone" 
                        @delete="initDelete" 
                    />
                    <h2  :class="[componentId + '_title_' + key]" class="text-3xl font-bold tracking-tight text-gray-900 @@sm:text-4xl" v-html="title.content" ></h2>
                </div>

                <div v-for="(paragraphe1, key) in settings.paragraphe1" class="group hover:outline-dashed rounded relative mt-2">
                    <ElementActions 
                        :aiAjaxWorking="aiAjaxWorking" 
                        :actions="['ai', 'edit', 'clone', 'delete']"
                        element="paragraphe1"
                        :elementData="paragraphe1"
                        :keyElement="key"
                        @edit-component="editComponent" 
                        @init-ai="handleInitAI" 
                        @clone="initClone" 
                        @delete="initDelete" 
                    />
                    <p :class="[componentId + '_paragraphe1_' + key]" class="mt-6 text-xl leading-8 text-gray-600" v-html="paragraphe1.content"></p>
                </div>

                <div v-for="(paragraphe2, key) in settings.paragraphe2" class="group hover:outline-dashed rounded relative mt-2">
                    <ElementActions 
                        :aiAjaxWorking="aiAjaxWorking" 
                        :actions="['ai', 'edit', 'clone', 'delete']"
                        element="paragraphe2"
                        :elementData="paragraphe2"
                        :keyElement="key"
                        @edit-component="editComponent" 
                        @init-ai="handleInitAI" 
                        @clone="initClone" 
                        @delete="initDelete" 
                    />
                    <p :class="[componentId + '_paragraphe2_' + key]" class="mt-6 text-base leading-7 text-gray-600" v-html="paragraphe2.content" ></p>
                </div>


                <div class="mt-10 flex">
                    <div v-for="(button1, key) in settings.button1" class="group hover:outline-dashed rounded relative mt-2">
                        <ElementActions 
                            :aiAjaxWorking="aiAjaxWorking" 
                            :actions="['ai', 'edit', 'clone', 'delete']"
                            element="button1"
                            :elementData="button1"
                            :keyElement="key"
                            @edit-component="editComponent" 
                            @init-ai="handleInitAI" 
                            @clone="initClone" 
                            @delete="initDelete" 
                        />
                        <a :href="button1.path" :class="[componentId + '_button1_' + key]"  href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-@sm font-semibold text-white shadow-@sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" v-html="button1.content"> </a>
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap items-start justify-end gap-6 @sm:gap-8 @lg:contents">
                <div class="w-0 flex-auto @lg:ml-auto @lg:w-auto @lg:flex-none @lg:self-end">
                    <div v-for="(image1, key) in settings.image1" class="group hover:outline-dashed rounded relative mt-2">
                        <ElementActions 
                            :aiAjaxWorking="aiAjaxWorking" 
                            :actions="['ai', 'edit', 'clone', 'delete']"
                            element="image1"
                            :elementData="image1"
                            :keyElement="key"
                            @edit-component="editComponent" 
                            @init-ai="handleInitAI" 
                            @clone="initClone" 
                            @delete="initDelete" 
                        />
                        <img  :class="[componentId + '_image1_' + key]"  class="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover" :src="image1.path" :alt="image1.title">
                    </div>
                </div>
                <div class="contents @lg:col-span-2 @lg:col-end-2 @lg:ml-auto @lg:flex @lg:w-[37rem] @lg:items-start @lg:justify-end @lg:gap-x-8">
                <div class="order-first flex w-64 flex-none justify-end self-end @lg:w-auto">
                    <div v-for="(image2, key) in settings.image2" class="group hover:outline-dashed rounded relative mt-2">
                        <ElementActions 
                            :aiAjaxWorking="aiAjaxWorking" 
                            :actions="['ai', 'edit', 'clone', 'delete']"
                            element="image2"
                            :elementData="image2"
                            :keyElement="key"
                            @edit-component="editComponent" 
                            @init-ai="handleInitAI" 
                            @clone="initClone" 
                            @delete="initDelete" 
                        />
                        <img :class="[componentId + '_image2_' + key]"  class="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover" :src="image2.path" :alt="image2.title">
                    </div>
                </div>
                <div class="flex w-96 flex-auto justify-end @lg:w-auto @lg:flex-none">
                    <div v-for="(image3, key) in settings.image3" class="group hover:outline-dashed rounded relative mt-2">
                        <ElementActions 
                            :aiAjaxWorking="aiAjaxWorking" 
                            :actions="['ai', 'edit', 'clone', 'delete']"
                            element="image3"
                            :elementData="image3"
                            :keyElement="key"
                            @edit-component="editComponent" 
                            @init-ai="handleInitAI" 
                            @clone="initClone" 
                            @delete="initDelete" 
                        />

                        <img  :class="[componentId + '_image3_' + key]"  class="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover" :src="image3.path" :alt="image3.title">
                    </div>
                </div>
                <div class="hidden @sm:block @sm:w-0 @sm:flex-auto @lg:w-auto @lg:flex-none">
                    <div v-for="(image4, key) in settings.image4" class="group hover:outline-dashed rounded relative mt-2">
                        <ElementActions 
                            :aiAjaxWorking="aiAjaxWorking" 
                            :actions="['ai', 'edit', 'clone', 'delete']"
                            element="image4"
                            :elementData="image4"
                            :keyElement="key"
                            @edit-component="editComponent" 
                            @init-ai="handleInitAI" 
                            @clone="initClone" 
                            @delete="initDelete" 
                        />

                        <img :class="[componentId + '_image4_' + key]"   class="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover" :src="image4.path" :alt="image4.title">
                    </div>
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