<template>
    <Button type="primary">primary button</Button>
    <Button type="success">success button</Button>
    <Button type="warning">warning button</Button>
    <Button type="danger">danger button</Button>

    <Countdown :time="10000" format="mm:ss" :autoStart="true" :immediate="true" />
    <Countdown :time="15000" format="mm:ss" :autoStart="false" :immediate="false" :delay="800"/>
</template>

<script lang="ts" setup>
import {Button, Countdown} from "@pro/components"
</script>