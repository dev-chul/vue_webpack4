<template>
  <div>
    <button @click="show = !show">
      Toggle render
    </button>
    <transition
      enter-active-class="animated headShake"
      leave-active-class="animated bounceOutRight"
    >
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script>
// https://animate.style/에서 참조할 것
// 홈페이지 예시가 animate__shakeY 이면 animated shakeY와 같이 적용하면 된다.
export default {
  name: 'TransitionSample',
  data () {
    return {
      show: false
    }
  }
}
</script>
