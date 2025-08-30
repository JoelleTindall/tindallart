<template>
<div>
  <h2 class="text-3xl text-center">Gallery</h2>
    <div class="flex flex-col md:flex-row py-10">
      <div class="px-2 pb-5  md:w-1/2" v-for="img in images" :key="img.src">
        <img :src="img.src" :alt="img.description" />
        <p class="artdescription">{{ img.description }}</p>
      </div>
    </div>
</div>
<h2>Gallery</h2>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = withDefaults(defineProps<{
  for: string
}>(), {
  for: 'karen',
})

let allImages = {}
const images = ref<any[]>([])

// function addWatermark(imgSrc: string, text = 'Tindallart.com'): Promise<string> {
//   return new Promise((resolve) => {
//     const baseImage = new Image()
//     baseImage.src = imgSrc

//     baseImage.onload = () => {
//       const canvas = document.createElement('canvas')
//       const ctx = canvas.getContext('2d')!

//       canvas.width = baseImage.width
//       canvas.height = baseImage.height

//       // Draw original image
//       ctx.drawImage(baseImage, 0, 0)

//       const canvasWidth=canvas.width-50
//       const canvasHeight=canvas.height-20
//       // Add watermark
//       ctx.font = '75px Arial'
//       ctx.fillStyle = 'rgba(0, 0, 0, 0.5)'
//       ctx.textAlign = 'right'
//       ctx.textBaseline = 'bottom'
//       ctx.fillText(text, canvasWidth, canvasHeight)

//       resolve(canvas.toDataURL('image/jpeg'))
//     }
//   })
//}

switch (props.for) {
  case "dana":
    allImages = import.meta.glob('~/assets/images/dana/*', { eager: true })
    break
  case "karen":
    allImages = import.meta.glob('~/assets/images/karen/*', { eager: true })
    break
}

onMounted(async () => {
  const entries = Object.entries(allImages)
  const processed = await Promise.all(entries.map(async ([path, mod]) => {
    const parts = path.split('/')
    const artist = parts.at(-2) || ''
    const fileName = parts.at(-1) || ''
    const description = fileName.replace(/\.[^/.]+$/, '')

    // const watermarked = await addWatermark((mod as any).default)

    return {
      artist,
      src: (mod as any).default,
      description,
    }
  }))
  images.value = processed
})
</script>

