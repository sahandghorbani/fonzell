<template>
  <div>
    <h2>video player</h2>
    <vue-plyr :options="options">
      <video controls crossorigin playsinline :data-poster="test">
        <source
          size="480"
          type="video/mp4"
          src="https://dl.aryaland.ir/480p.mp4"
        />
        <source
          size="720"
          type="video/mp4"
          src="https://dl.aryaland.ir/720p.mp4"
        />
        <source
          size="1080"
          type="video/mp4"
          src="https://dl.aryaland.ir/1080p.mp4"
        />
        <track
          default
          srclang="en"
          kind="captions"
          label="انگلیسی"
          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt"
        />
        <track
          srclang="fr"
          kind="captions"
          label="فارسی"
          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt"
        />
        <a
          download=""
          href="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4"
        >
          Download
        </a>
      </video>
    </vue-plyr>
  </div>
</template>

<script>
import test from '../../assets/imgs/test.jpg'
import 'vue-plyr/dist/vue-plyr.css'
import VuePlyr from 'vue-plyr'
export default {
    name: 'Video',
    components: { VuePlyr },
    data() {
        return {
            options: { quality: { default: '480' } },
            test,
        }
    },
}
</script>

<style>
.plyr {
  border-radius: 1rem;
}
.plyr--full-ui input[type="range"] {
  color: #e14e1d;
}

.plyr__controls__item.plyr__volume {
  display: none;
}

.plyr__control--overlaid {
  background: rgba(YourRGBColor, 0.8);
}

.plyr--video .plyr__control.plyr__tab-focus,
.plyr--video .plyr__control:hover,
.plyr--video .plyr__control[aria-expanded="true"] {
  background: #e14e1d;
}

.plyr__control.plyr__tab-focus {
  box-shadow: 0 0 0 5px rgba(#eb9128, 0.5);
}

.plyr__menu__container
  .plyr__control[role="menuitemradio"][aria-checked="true"]::before {
  background: #e14e1d;
}

@media screen and (min-width: 640px) {
  .plyr__controls__item.plyr__volume {
    display: flex;
  }
}
</style>

