<template id='button'>
   <button class="button" v-on:click="action">{{title}}</button>
</template>

<script>
    export default {
      template: '#button',
      props: {
        title: {
          type: String,
          default: 'btn'
        },
        action: {
          type: Function,
          default: () => false
        }
      }
    }
</script>

<style>

  .button{
    align-items: center;
    justify-content: center;
    font-size: 14px;
    border: none;
    text-transform: uppercase;
    color: #fff;
    background-color: #259494;
    cursor: pointer;
    transition: .2s ease;
  }

  .button_delete {
      background-color: #FF5729;
      height: 50px;
      width: 100%;
      margin-top: 5px;
  }

  .button:hover {
      opacity: .7;
  }

  .button:active, .button:focus, .button:hover {
      outline: none;
  }

  .button.active {
    opacity: .7;
    background-color: #00585E;
    pointer-events: none;  
    transform: translateX(-1px) translateY(-1px) scale(1.01);
    box-shadow: 1px 3px 6px 0px #000;
  }

</style>
