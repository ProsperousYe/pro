<template>
    <div class="pro-count" :class="CountdownStyle">
        {{ hour }} : {{ min }} : {{ sec }}
    </div>
</template>
<script lang="ts" setup>
import "./style/index.less";
import { defineProps, ref, computed } from "vue";
defineOptions({ name: "pro-countdown" });
type CountdownProps = {
  type?: string;
  time: number;
  format: string;
  autoStart: boolean;
  immediate: boolean;
  delay?: number;
  onEnd?: () => void;
  onTick?: (time: number) => void;
  trigger?: () => boolean;
};
const prop = defineProps<CountdownProps>();
let countTime = ref<any>(prop.time);
const count = () => {
    if (prop.immediate) {
        const timer = setInterval(() => {
        countTime.value -= 1000;
        if (countTime.value <= 0) {
            clearInterval(timer);
            prop.onEnd && prop.onEnd();
        } else {
            prop.onTick && prop.onTick(countTime.value);
        }
        }, 1000);
    } else {
        setTimeout(() => {
        const timer = setInterval(() => {
            countTime.value -= 1000;
            if (countTime.value <= 0) {
            clearInterval(timer);
            prop.onEnd && prop.onEnd();
            } else {
            prop.onTick && prop.onTick(countTime.value);
            }
        }, 1000);
        }, prop.delay);
    }
}
const CountdownStyle = computed(()=>{
    return { [`pro-count--${prop.type}`]: prop.type };
})

const hour = computed(()=>{
    return Math.floor(countTime.value/3600000)
})

const min = computed(()=>{
    return Math.floor((countTime.value % 3600000)/60000)
})

const sec = computed(()=>{
    return Math.floor((countTime.value % 60000)/1000)
})

count()
</script>