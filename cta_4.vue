<template>
    <div :key="componentId" :class="[componentId + '_container_0']" class="bg-gray-900 py-24 @sm:py-32 w-full">
  <div class="relative isolate">
    <div class="mx-auto max-w-7xl @sm:px-6 @lg:px-8">
      <div class="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 @sm:rounded-3xl @sm:p-8 @lg:mx-0 @lg:max-w-none @lg:flex-row @lg:items-center @lg:py-20 xl:gap-x-20 xl:px-20">
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

                <img :class="[componentId + '_image_' + key]" class="h-96 w-full flex-none rounded-2xl object-cover shadow-xl @lg:aspect-square @lg:h-auto @lg:max-w-@sm"  :src="image.path" :alt="image.title" alt="">
            </div>
        <div class="w-full flex-auto">
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
             
                <h2  :class="[componentId + '_title_' + key]" class="text-3xl font-bold tracking-tight text-white @sm:text-4xl" v-html="title.content"></h2>
            </div>
            <div v-for="(subtitle, key) in settings.subtitle" class="group hover:outline-dashed rounded relative mt-2">
            
                <ElementActions 
                        :aiAjaxWorking="aiAjaxWorking" 
                        :actions="['ai', 'edit', 'clone', 'delete']"
                        element="subtitle"
                        :elementData="subtitle"
                        :keyElement="key"
                        @edit-component="editComponent" 
                        @init-ai="handleInitAI" 
                        @clone="initClone" 
                        @delete="initDelete" 
                    />

            <p :class="[componentId + '_subtitle_' + key]" class="mt-6 text-@lg leading-8 text-gray-300"  v-html="subtitle.content"></p>
            </div>
            <ul role="list" class="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white @sm:grid-cols-2">
                <div v-for="(text1, key) in settings.text1" class="group hover:outline-dashed rounded relative mt-2">
                      
                    <ElementActions 
                            :aiAjaxWorking="aiAjaxWorking" 
                            :actions="['ai', 'edit', 'clone', 'delete']"
                            element="text1"
                            :elementData="text1"
                            :keyElement="key"
                            @edit-component="editComponent" 
                            @init-ai="handleInitAI" 
                            @clone="initClone" 
                            @delete="initDelete" 
                        />
                    <li :class="[componentId + '_text1_' + key]" class="flex gap-x-3" v-html="text1.content">
                     
                    </li>
                </div>
               
              
              
              
          </ul>
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

                <a :href="button1.path" :class="[componentId + '_button1_' + key]" href="#" class="text-@sm font-semibold leading-6 text-indigo-400" v-html="button1.content"> 
                    </a>
            </div>
        </div>
        </div>
      </div>
    </div>
    <div class="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl" aria-hidden="true">
      <div class="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25" style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"></div>
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