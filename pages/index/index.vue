<template>
  <TresCanvas clear-color="#82DBC5" window-size>
    <TresPerspectiveCamera :position="[3, 3, 3]" :look-at="[0, 0, 0]" />
    <TresMesh>
      <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
      <TresMeshBasicMaterial color="orange" />
    </TresMesh>

    <TresAmbientLight :intensity="1" />
  </TresCanvas>
</template>
<script setup>
import axios from "@nuxtjs/axios";
import * as THREE from 'three' //3D库
import { TresCanvas } from '@tresjs/core'
import { Mesh, BoxGeometry, MeshBasicMaterial } from 'three'
// 场景
// const scene = new THREE.Scene()
// // 创建一个BoxGeometry，宽度为1，高度和深度都为1
// const geometry = new BoxGeometry(1, 1, 1)
// // 创建一个MeshBasicMaterial，颜色为0x00ff00（绿色）
// const material = new MeshBasicMaterial({ color: 0x00ff00 })

// 创建一个Mesh，使用上面创建的geometry和material
// const meshWithMaterial = new Mesh(geometry, material)
// scene.add(meshWithMaterial)
// let res = await useFetch('/data/list.json')
const { data: abc } = await useFetch('/api/abc')
console.log(abc)
console.log(axios);
</script>
<style scoped></style>
