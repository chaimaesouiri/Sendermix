<template>
    <div  :key="componentId" :class="[componentId + '_container_0']" class="relative bg-gray-900 w-full">
  <div class="relative h-80 overflow-hidden bg-indigo-600 @md:absolute @md:left-0 @md:h-full @md:w-1/3 @lg:w-1/2">
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


          <img :class="[componentId + '_image_' + key]"  class="h-full w-full object-cover"  :src="image.path" :alt="image.title"  alt="">
    </div>

    <svg viewBox="0 0 926 676" aria-hidden="true" class="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]">
      <path fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)" fill-opacity=".4" d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z" />
      <defs>
        <linearGradient id="60c3c621-93e0-4a09-a0e6-4c228a0116d8" x1="926.392" x2="-109.635" y1=".176" y2="321.024" gradientUnits="userSpaceOnUse">
          <stop stop-color="#776FFF" />
          <stop offset="1" stop-color="#FF4694" />
        </linearGradient>
      </defs>
    </svg>
  </div>
  <div class="relative mx-auto max-w-7xl py-24 @sm:py-32 @lg:px-8 @lg:py-40">
    <div class="pl-6 pr-6 @md:ml-auto @md:w-2/3 @md:pl-16 @lg:w-1/2 @lg:pl-24 @lg:pr-0 xl:pl-32">

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

         <h2 :class="[componentId + '_subtitle_' + key]" class="text-base font-semibold leading-7 text-indigo-400"  v-html="subtitle.content"></h2>
        </div>
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
          <p :class="[componentId + '_title_' + key]" class="mt-2 text-3xl font-bold tracking-tight text-white @sm:text-4xl" v-html="title.content"></p>
        </div>
        <div v-for="(paragraphe, key) in settings.paragraphe" class="group hover:outline-dashed rounded relative mt-2">
            <ElementActions 
                        :aiAjaxWorking="aiAjaxWorking" 
                        :actions="['ai', 'edit', 'clone', 'delete']"
                        element="paragraphe"
                        :elementData="paragraphe"
                        :keyElement="key"
                        @edit-component="editComponent" 
                        @init-ai="handleInitAI" 
                        @clone="initClone" 
                        @delete="initDelete" 
                    />
          <p :class="[componentId + '_paragraphe_' + key]" class="mt-6 text-base leading-7 text-gray-300" v-html="paragraphe.content"></p>
        </div>
      <div class="mt-8">
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
        <a :href="button1.path" :class="[componentId + '_button1_' + key]" class="inline-flex rounded-@md bg-white/10 px-3.5 py-2.5 text-@sm font-semibold text-white shadow-@sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" v-html="button1.content"></a>
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