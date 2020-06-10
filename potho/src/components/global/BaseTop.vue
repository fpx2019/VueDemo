<template>
  <div>
    <img
      class="back_to_top"
      v-show="showTop"
      src="/static/image/arrow.png"
      @click="scrollToY(0, 1500, 'easeInOutQuint')"
    />
  </div>
</template>

<script>
window.requestAnimFrame = (function() {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();
export default {
  name: "BackToTop",
  data() {
    return {
      scrollTop: 0
    };
  },
  methods: {
    scrollToY(scrollTargetY, speed, easing) {
      // scrollTargetY:窗口的目标scrollY属性
      //速度: 时间(像素 / 秒);
      // easing:使用easing方程

      let scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollTargetY = scrollTargetY || 0;
      speed = speed || 2000;
      easing = easing || "easeOutSine";
      let currentTime = 0;
      // min time .1, max time .8 seconds
      let time = Math.max(
        0.1,
        Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8)
      );

      //从https://github.com/danro/easing-js/blob/master/easing.js解方程
      let easingEquations = {
        easeOutSine: function(pos) {
          return Math.sin(pos * (Math.PI / 2));
        },
        easeInOutSine: function(pos) {
          return -0.5 * (Math.cos(Math.PI * pos) - 1);
        },
        easeInOutQuint: function(pos) {
          if ((pos /= 0.5) < 1) {
            return 0.5 * Math.pow(pos, 5);
          }
          return 0.5 * (Math.pow(pos - 2, 5) + 2);
        }
      };

      //添加动画循环
      function tick() {
        currentTime += 1 / 60;

        let p = currentTime / time;
        let t = easingEquations[easing](p);

        if (p < 1) {
          window.requestAnimFrame(tick);
          window.scrollTo(0, scrollY + (scrollTargetY - scrollY) * t);
        } else {
          window.scrollTo(0, scrollTargetY);
        }
      }

      tick();
    },
    getScrollTop() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    }
  },
  computed: {
    showTop: function() {
      return this.scrollTop > 500;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.getScrollTop);
  }
};
</script>
<style scoped>
.back_to_top {
  position: fixed;
  z-index: 999;
  bottom: 1.8rem;
  right: 0.26rem;
  width: 40px;
  height: 40px;
  overflow: hidden;
}
</style>
