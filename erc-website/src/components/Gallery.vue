<template>
  <Galleria
    ref="galleria"
    :value="images"
    v-model:activeIndex="activeIndex"
    :numVisible="5"
    containerStyle="max-width: 640px"
    :containerClass="galleriaClass"
    :showThumbnails="showThumbnails"
    :showItemNavigators="true"
    :showItemNavigatorsOnHover="true"
    :circular="true"
    :autoPlay="true"
    :transitionInterval="3000"
  >
    <template #item="slotProps">
      <img
        class="custom-galleria-image"
        :src="slotProps.item.itemImageSrc"
        :alt="slotProps.item.alt"
        :style="[
          {
            width: !fullScreen ? '100%' : '50%',
            display: !fullScreen ? 'block' : ''
          }
        ]"
      />
    </template>
    <template #thumbnail="slotProps">
      <div class="p-grid p-nogutter p-justify-center">
        <img
          :src="slotProps.item.thumbnailImageSrc"
          :alt="slotProps.item.alt"
          style="display: block;"
        />
      </div>
    </template>
    <template #caption>
      <div class="custom-galleria-caption">
        <span v-if="images" class="title-container">
          <span class="title">{{ images[activeIndex].title }}</span
          ><br />
          <span>{{ images[activeIndex].alt }}</span>
        </span>
      </div>
    </template>
    <template #footer>
      <div class="custom-galleria-footer">
        <!-- <Button icon="pi pi-list" @click="onThumbnailButtonClick" /> -->
        <!-- <span v-if="images" class="title-container">
          <span>{{ activeIndex + 1 }}/{{ images.length }}</span>
          <span class="title">{{ images[activeIndex].title }}</span>
          <span>{{ images[activeIndex].alt }}</span>
        </span> -->
        <Button
          :icon="fullScreenIcon"
          @click="toggleFullScreen"
          class="fullscreen-button"
        />
      </div>
    </template>
  </Galleria>
</template>

<script>
import Galleria from 'primevue/galleria'
import Button from 'primevue/button'
export default {
  name: 'Gallery',
  components: {
    Galleria,
    Button
  },

  data() {
    return {
      activeIndex: 0,
      showThumbnails: false,
      fullScreen: false,
      images: [
        {
          itemImageSrc: require('../assets/images/gallery/arduino.png'),
          thumbnailImageSrc: require('../assets/images/logo/logo-main.jpg'),
          alt: 'Description for Image 1',
          title: 'Title 1'
        },
        {
          itemImageSrc: require('../assets/images/logo/logo-main.jpg'),
          thumbnailImageSrc: require('../assets/images/logo/logo-main.jpg'),
          alt: 'Description for Image 2',
          title: 'Title 2'
        },
        {
          itemImageSrc: require('../assets/images/logo/logo-main.jpg'),
          thumbnailImageSrc: require('../assets/images/logo/logo-main.jpg'),
          alt: 'Description for Image 3',
          title: 'Title 3'
        },
        {
          itemImageSrc: require('../assets/images/logo/logo-main.jpg'),
          thumbnailImageSrc: require('../assets/images/logo/logo-main.jpg'),
          alt: 'Description for Image 4',
          title: 'Title 4'
        }
      ],
      responsiveOptions: [
        {
          breakpoint: '1024px',
          numVisible: 5
        },
        {
          breakpoint: '768px',
          numVisible: 3
        },
        {
          breakpoint: '560px',
          numVisible: 1
        }
      ]
    }
  },
  mounted() {
    this.bindDocumentListeners()
  },
  methods: {
    onThumbnailButtonClick() {
      this.showThumbnails = !this.showThumbnails
    },
    toggleFullScreen() {
      if (this.fullScreen) {
        this.closeFullScreen()
      } else {
        this.openFullScreen()
      }
    },
    onFullScreenChange() {
      this.fullScreen = !this.fullScreen
    },
    openFullScreen() {
      let elem = this.$refs.galleria.$el
      if (elem.requestFullscreen) {
        elem.requestFullscreen()
      } else if (elem.mozRequestFullScreen) {
        /* Firefox */
        elem.mozRequestFullScreen()
      } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen()
      } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
        elem.msRequestFullscreen()
      }
    },
    closeFullScreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
    },
    bindDocumentListeners() {
      document.addEventListener('fullscreenchange', this.onFullScreenChange)
      document.addEventListener('mozfullscreenchange', this.onFullScreenChange)
      document.addEventListener(
        'webkitfullscreenchange',
        this.onFullScreenChange
      )
      document.addEventListener('msfullscreenchange', this.onFullScreenChange)
    },
    unbindDocumentListeners() {
      document.removeEventListener('fullscreenchange', this.onFullScreenChange)
      document.removeEventListener(
        'mozfullscreenchange',
        this.onFullScreenChange
      )
      document.removeEventListener(
        'webkitfullscreenchange',
        this.onFullScreenChange
      )
      document.removeEventListener(
        'msfullscreenchange',
        this.onFullScreenChange
      )
    }
  },
  computed: {
    galleriaClass() {
      return ['custom-galleria', { fullscreen: this.fullScreen }]
    },
    fullScreenIcon() {
      return `pi ${
        this.fullScreen ? 'pi-window-minimize' : 'pi-window-maximize'
      }`
    }
  }
}
</script>

<style lang="scss" scoped>
@use './styles/gallery';
</style>
