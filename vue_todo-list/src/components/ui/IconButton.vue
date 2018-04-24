<!-- 
    you can also send a fontawesome class of icon. 
    e.g. if you want create icon "fa fa-check" You shoud send a "check" in 'icon'-param 
-->

<template class='icon-button'>
   <i v-bind:class="makeClass" v-bind:style="{color}" v-on:click="action"></i> 
</template>

<script>
    export default {
      template: '.icon-button',
      props: {
        color: {
          type: String,
          default: '#000'
        },
        icon: {
          type: String,
          default: 'check'
        },
        action: {
          type: Function,
          default: () => false
        }
      },
      computed: {
        makeClass: function () {
          return `fa fa-${this.icon} task-done-btn btn-icon`
        }
      }
    }
</script>

<style>

  .btn-icon {
    font-size: 20px;
    margin: 0 3px;
    cursor: pointer;
    transition: .2s ease;
  }

  .btn-icon:hover {
      opacity: .7;
  }

</style>
