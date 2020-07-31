<template>
<div class="column justify-center">
  <div class="row items-center q-ma-sm" style="max-height: 40px" v-for="(info, index) in infos" :key="info.places">
    <p style="width: 10%" class="q-ma-none q-mr-sm text-left">{{info.version}}</p>
    <div style="width: 80%">
      <div @mouseover="changeStatusToTrue(index)" @mouseleave="changeStatusToFalse(index)" class="column justify-center text-right" v-bind:style="{ width: getSize(info.places) + '%', height: '40px', backgroundColor: '#3CB371', animation: 'grapichAnimation 1s', opacity: show[index] === true ? 0.76 : 1.0}">
        <p v-if="show[index]" class="non-selectable q-ma-none text-white q-mr-sm">{{info.places}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      show: [],
      infos: [{
          version: '1.490.01',
          places: 1,
        },
        {
          version: '1.490.01',
          places: 2,
        },
        {
          version: '1.490.01',
          places: 15,
        },
        {
          version: '1.490.01',
          places: 3,
        },
        {
          version: '1.490.01',
          places: 8,
        },
        {
          version: '1.490.01',
          places: 9,
        }
      ],

    };
  },
  methods: {
    changeStatusToTrue: function(index) {
      this.$set(this.show, index, true)
    },
    changeStatusToFalse: function(index) {
      this.$set(this.show, index, false)
    },

    getSize(size) {
      let aux = 0;
      let valor = this.infos;

      for (let i in valor) {
        if (valor[i].places > aux) {
          aux = valor[i].places;
        }
      }

      let tot = (size * 100 / aux).toFixed(2);

      return tot
    }
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

@keyframes grapichAnimation {
  from{
    width: 0;
  }

  to{
    width: 1;
  }
}
</style>
