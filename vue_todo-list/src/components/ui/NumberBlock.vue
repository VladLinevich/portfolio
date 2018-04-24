<template id='number-block'>
   <section class="number-block">
       <div class="number-block__title">{{title}}</div>
       <div class="number-block__count">{{count}}</div>
    </section>
</template>

<script>
    export default {
      template: '#number-block',
      props: {
        title: {
          type: String,
          default: 'title'
        },
        count: {
          type: Number,
          default: 2
        }
      }
    }
</script>

<style>

  .number-block {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: 50px;
      font-size: 14px;
      color: #fff;
      background-color: #00585E;
  }
  
  .number-block:not(:last-child) {
      border-right: 1px solid #454445;
  }  

  .number-block__title {
    text-transform: uppercase;
  }  

  .number-block__count {
    font-weight: 800;
    margin-top: 5px      
  }
  
</style>
