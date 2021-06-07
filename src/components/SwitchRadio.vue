<template>
    <div>
      <a-radio-group v-model="value" @change="onChange">
        <a-radio-button value="table">
          Table View
        </a-radio-button>
        <a-radio-button value="graph">
          Graph View
        </a-radio-button>
      </a-radio-group>
    </div>
</template>

<script>
export default {
  data() {
    return {
      value: 'table',
    };
  },
  methods: {
    onChange(e) {
      console.log(e.target.value);
    },
  },
};
</script>
<style scoped>

</style>
