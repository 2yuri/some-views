<template>
  <div class="column justify-center">
    <div class="row items-center q-ma-sm" style="max-height: 40px" v-for="info in infos" :key="info.version" >
      <p style="width: 10%" class="q-ma-none q-mr-sm text-left">{{info.version}}</p>
      <div v-bind:style="{ width: info.size + '%', height: '40px', backgroundColor: '#3CB371', }" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infos: [{
          version: '1.490.01',
          size: 10,
        },
        {
          version: '1.490.01',
          size: 20,
        },
        {
          version: '1.490.01',
          size: 40,
        },
        {
          version: '1.490.01',
          size: 30,
        },
        {
          version: '1.490.01',
          size: 80,
        },
        {
          version: '1.490.01',
          size: 85,
        }
      ]
    };
  }
}
</script>

<style>
.ul-teste {
  width: 200px;
  height: 100px;
}

.li-teste {
  width: 100px;
  height: 50px;
}
</style>
