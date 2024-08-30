<template>
    <div :key="componentId" :class="[componentId + '_container_0', 'relative isolate overflow-hidden bg-gray-900 py-24 @sm:py-32 w-full']">
        <img :src="settings.container[0].path" :alt="settings.container[0].title" class="absolute inset-0 -z-10 h-full w-full object-cover object-right @lg:object-center">

        <div class="hidden @sm:absolute @sm:-top-10 @sm:right-1/2 @sm:-z-10 @sm:mr-10 @sm:block @sm:transform-gpu @sm:blur-3xl" aria-hidden="true">
            <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
        </div>
        <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl @sm:top-[-28rem] @sm:ml-16 @sm:translate-x-0 @sm:transform-gpu" aria-hidden="true">
            <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
        </div>
        
        <div class="mx-auto max-w-7xl px-6 @lg:px-8">
            <div class="mx-auto max-w-2xl @lg:mx-0">
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
                    <h2 :class="[componentId + '_headline_' + key]" class="text-4xl font-bold tracking-tight text-white @sm:text-6xl" v-html="headline.content"></h2>
                </div>
                
                <div v-for="(paragraph, key) in settings.paragraph" class="group hover:outline-dashed rounded relative mt-2">
                    <ElementActions 
                        :aiAjaxWorking="aiAjaxWorking" 
                        :actions="['ai', 'edit', 'clone', 'delete']"
                        element="paragraph"
                        :elementData="paragraph"
                        :keyElement="key"
                        @edit-component="editComponent" 
                        @init-ai="handleInitAI" 
                        @clone="initClone" 
                        @delete="initDelete" 
                    />
                    <p :class="[componentId + '_paragraph_' + key]" class="mt-6 text-@lg: leading-8 text-gray-300" v-html="paragraph.content"></p>
                </div>
            </div>
            <div class="mx-auto mt-10 max-w-2xl @lg:mx-0 @lg:max-w-none">
                <div class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white @sm:grid-cols-2 @lg:flex @lg:gap-x-10">
                    <div v-for="(link, key) in settings.link" class="group hover:outline-dashed rounded relative mt-2">
                        <ElementActions 
                            :aiAjaxWorking="aiAjaxWorking" 
                            :actions="['ai', 'edit', 'clone', 'delete']"
                            element="link"
                            :elementData="link"
                            :keyElement="key"
                            @edit-component="editComponent" 
                            @init-ai="handleInitAI" 
                            @clone="initClone" 
                            @delete="initDelete" 
                        />
                        <a :class="[componentId + '_link_' + key]" :href="link.path" v-html="link.content"></a>
                    </div>
                </div>
                <dl class="mt-16 grid grid-cols-1 gap-8 @sm:mt-20 @sm:grid-cols-2 @lg:grid-cols-4">
                    
                    <div v-for="(state, key) in settings.state" :class="[componentId + '_state_' + key]" class="group/parent outline-white hover:outline-dashed rounded flex relative mt-2">
                        <ElementActionsParent 
                            :aiAjaxWorking="aiAjaxWorking" 
                            :actions="['edit', 'clone', 'delete']"
                            :element="'state_'+ key"
                            :cloneParent="true"
                            :elementData="state"
                            :keyElement="key"
                            @edit-component="editComponent" 
                            @init-ai="handleInitAI" 
                            @clone="initClone" 
                            @delete="initDelete" 
                        />

                        <div class="el_container flex flex-col-reverse">
                            

                            <div v-for="(text, keyE) in state.elements.text" class="group hover:outline-dashed rounded flex relative mt-2">
                                <ElementActions 
                                    :aiAjaxWorking="aiAjaxWorking" 
                                    :actions="['edit', 'clone', 'delete']"
                                    :element="'state_'+ key +'_text'"
                                    :elementData="text"
                                    :keyElement="keyE"
                                    @edit-component="editComponent" 
                                    @init-ai="handleInitAI" 
                                    @clone="initClone" 
                                    @delete="initDelete" 
                                />
                                <dt class="text-base leading-7 text-gray-300" :class="['el_text_' + keyE]" v-html="text.content"></dt>
                            </div>

                            <div v-for="(number, keyE) in state.elements.number" class="group hover:outline-dashed rounded flex relative mt-2">
                                <ElementActions 
                                    :aiAjaxWorking="aiAjaxWorking" 
                                    :actions="['edit', 'clone', 'delete']"
                                    :element="'state_'+ key +'_number'"
                                    :elementData="number"
                                    :keyElement="keyE"
                                    @edit-component="editComponent" 
                                    @init-ai="handleInitAI" 
                                    @clone="initClone" 
                                    @delete="initDelete" 
                                />
                                <dd class="text-2xl font-bold leading-9 tracking-tight text-white" :class="['el_number_' + keyE]" v-html="number.content"></dd>
                            </div>
                        </div>
                    </div>
                </dl>
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