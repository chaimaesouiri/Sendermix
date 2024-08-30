<template>
    <div :key="componentId" :class="[componentId + '_container_0']" class="relative isolate overflow-hidden bg-gray-900 py-24 @sm:py-32 w-full">
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
          
            <img :class="[componentId + '_image1_' + key]" src="" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-right @md:object-center" :src="image1.path" :alt="image1.title">
        </div>
  <div class="hidden @sm:absolute @sm:-top-10 @sm:right-1/2 @sm:-z-10 @sm:mr-10 @sm:block @sm:transform-gpu @sm:blur-3xl" aria-hidden="true">
    <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
  </div>
  <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl @sm:top-[-28rem] @sm:ml-16 @sm:translate-x-0 @sm:transform-gpu" aria-hidden="true">
    <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
  </div>
  <div class="mx-auto max-w-7xl px-6 @lg:px-8">
    <div class="mx-auto max-w-2xl @lg:mx-0">
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

            <h2 :class="[componentId + '_title_' + key]" class="text-4xl font-bold tracking-tight text-white @sm:text-6xl" v-html="title.content"></h2>
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
          <p  :class="[componentId + '_subtitle_' + key]" class="mt-6 text-@lg leading-8 text-gray-300" v-html="subtitle.content"></p>
        </div>
        </div>
    <div class="mx-auto mt-10 max-w-2xl @lg:mx-0 @lg:max-w-none">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white @sm:grid-cols-2 @md:flex @lg:gap-x-10">
        <div v-for="(step1, key) in settings.step1" class="group hover:outline-dashed rounded relative mt-2">

            <ElementActions 
                            :aiAjaxWorking="aiAjaxWorking" 
                            :actions="['ai', 'edit', 'clone', 'delete']"
                            element="step1"
                            :elementData="step1"
                            :keyElement="key"
                            @edit-component="editComponent" 
                            @init-ai="handleInitAI" 
                            @clone="initClone" 
                            @delete="initDelete" 
                        />

              <a :href="step1.path" :class="[componentId + '_step1_' + key]" href="#" v-html="step1.content"></a>
        </div>
        <div v-for="(step2, key) in settings.step2" class="group hover:outline-dashed rounded relative mt-2">

            <ElementActions 
                            :aiAjaxWorking="aiAjaxWorking" 
                            :actions="['ai', 'edit', 'clone', 'delete']"
                            element="step2"
                            :elementData="step2"
                            :keyElement="key"
                            @edit-component="editComponent" 
                            @init-ai="handleInitAI" 
                            @clone="initClone" 
                            @delete="initDelete" 
                        />
          <a :href="step2.path" :class="[componentId + '_step2_' + key]" href="#" v-html="step2.content"></a>
        </div>
        <div v-for="(step3, key) in settings.step3" class="group hover:outline-dashed rounded relative mt-2">


            <ElementActions 
                            :aiAjaxWorking="aiAjaxWorking" 
                            :actions="['ai', 'edit', 'clone', 'delete']"
                            element="step3"
                            :elementData="step3"
                            :keyElement="key"
                            @edit-component="editComponent" 
                            @init-ai="handleInitAI" 
                            @clone="initClone" 
                            @delete="initDelete" 
                        />
           <a :href="step3.path" :class="[componentId + '_step3_' + key]" href="#" v-html="step3.content"></a>
        </div>
        <div v-for="(step4, key) in settings.step4" class="group hover:outline-dashed rounded relative mt-2">

            <ElementActions 
                            :aiAjaxWorking="aiAjaxWorking" 
                            :actions="['ai', 'edit', 'clone', 'delete']"
                            element="step4"
                            :elementData="step4"
                            :keyElement="key"
                            @edit-component="editComponent" 
                            @init-ai="handleInitAI" 
                            @clone="initClone" 
                            @delete="initDelete" 
                        />
            <a :href="step4.path" :class="[componentId + '_step4_' + key]" href="#" v-html="step4.content"></a>
        </div>
      </div>
      <dl class="mt-16 grid grid-cols-1 gap-8 @sm:mt-20 @sm:grid-cols-2 @lg:grid-cols-4">
        <div class="flex flex-col-reverse">
            <div v-for="(offer1, key) in settings.offer1" class="group hover:outline-dashed rounded relative mt-2">

                <ElementActions 
                            :aiAjaxWorking="aiAjaxWorking" 
                            :actions="['ai', 'edit', 'clone', 'delete']"
                            element="offer1"
                            :elementData="offer1"
                            :keyElement="key"
                            @edit-component="editComponent" 
                            @init-ai="handleInitAI" 
                            @clone="initClone" 
                            @delete="initDelete" 
                        />

                <dt :class="[componentId + '_offer1_' + key]" class="text-base leading-7 text-gray-300" v-html="offer1.content"></dt>
            </div>
            <div v-for="(number1, key) in settings.number1" class="group hover:outline-dashed rounded relative mt-2">

                <ElementActions 
                            :aiAjaxWorking="aiAjaxWorking" 
                            :actions="['ai', 'edit', 'clone', 'delete']"
                            element="number1"
                            :elementData="number1"
                            :keyElement="key"
                            @edit-component="editComponent" 
                            @init-ai="handleInitAI" 
                            @clone="initClone" 
                            @delete="initDelete" 
                        />
                <dd :class="[componentId + '_number1_' + key]" class="text-2xl font-bold leading-9 tracking-tight text-white" v-html="numbr1.content"></dd>
            </div>
        </div>
        <div class="flex flex-col-reverse">
            <div v-for="(offer2, key) in settings.offer2" class="group hover:outline-dashed rounded relative mt-2">

                <ElementActions 
                            :aiAjaxWorking="aiAjaxWorking" 
                            :actions="['ai', 'edit', 'clone', 'delete']"
                            element="offer2"
                            :elementData="offer2"
                            :keyElement="key"
                            @edit-component="editComponent" 
                            @init-ai="handleInitAI" 
                            @clone="initClone" 
                            @delete="initDelete" 
                        />
               <dt  :class="[componentId + '_offer2_' + key]" class="text-base leading-7 text-gray-300" v-html="offer2.content"></dt>
            </div>
            <div v-for="(number2, key) in settings.number2" class="group hover:outline-dashed rounded relative mt-2">

                
                <ElementActions 
                            :aiAjaxWorking="aiAjaxWorking" 
                            :actions="['ai', 'edit', 'clone', 'delete']"
                            element="number2"
                            :elementData="number2"
                            :keyElement="key"
                            @edit-component="editComponent" 
                            @init-ai="handleInitAI" 
                            @clone="initClone" 
                            @delete="initDelete" 
                        />
                <dd :class="[componentId + '_number2_' + key]" class="text-2xl font-bold leading-9 tracking-tight text-white" v-html="number2.content"></dd>
            </div>  
          
        </div>
        <div class="flex flex-col-reverse">
            <div v-for="(offer3, key) in settings.offer3" class="group hover:outline-dashed rounded relative mt-2">

                <ElementActions 
                            :aiAjaxWorking="aiAjaxWorking" 
                            :actions="['ai', 'edit', 'clone', 'delete']"
                            element="offer3"
                            :elementData="offer3"
                            :keyElement="key"
                            @edit-component="editComponent" 
                            @init-ai="handleInitAI" 
                            @clone="initClone" 
                            @delete="initDelete" 
                        />
                <dt :class="[componentId + '_offer3_' + key]" class="text-base leading-7 text-gray-300" v-html="offer3.content"></dt>
            </div>
            <div v-for="(number3, key) in settings.number3" class="group hover:outline-dashed rounded relative mt-2">
                <ElementActions 
                            :aiAjaxWorking="aiAjaxWorking" 
                            :actions="['ai', 'edit', 'clone', 'delete']"
                            element="number3"
                            :elementData="number3"
                            :keyElement="key"
                            @edit-component="editComponent" 
                            @init-ai="handleInitAI" 
                            @clone="initClone" 
                            @delete="initDelete" 
                        />
              <dd  :class="[componentId + '_number3_' + key]" class="text-2xl font-bold leading-9 tracking-tight text-white" v-html="number3.content"></dd>
            </div>
        </div>
        <div class="flex flex-col-reverse">
            <div v-for="(offer4, key) in settings.offer4" class="group hover:outline-dashed rounded relative mt-2">
                <ElementActions 
                            :aiAjaxWorking="aiAjaxWorking" 
                            :actions="['ai', 'edit', 'clone', 'delete']"
                            element="offer4"
                            :elementData="offer4"
                            :keyElement="key"
                            @edit-component="editComponent" 
                            @init-ai="handleInitAI" 
                            @clone="initClone" 
                            @delete="initDelete" 
                        />
                <dt :class="[componentId + '_offer4_' + key]" class="text-base leading-7 text-gray-300" v-html="offer4.content"></dt>
            </div>
            <div v-for="(number4, key) in settings.number4" class="group hover:outline-dashed rounded relative mt-2">
 
                <ElementActions 
                            :aiAjaxWorking="aiAjaxWorking" 
                            :actions="['ai', 'edit', 'clone', 'delete']"
                            element="number4"
                            :elementData="number4"
                            :keyElement="key"
                            @edit-component="editComponent" 
                            @init-ai="handleInitAI" 
                            @clone="initClone" 
                            @delete="initDelete" 
                        />
               <dd :class="[componentId + '_number4_' + key]" class="text-2xl font-bold leading-9 tracking-tight text-white" v-html="number4.content"></dd>
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