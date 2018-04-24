<template id='heder'>
  <h1 class="page-header"><slot></slot></h1>
</template>

<script>
    export default {
      tempalate: '#heder'
    }
</script>


<style>

    .page-header {
        margin: 0;
        padding: 20px 0;
        color: #f5f2dc;
        text-align: center;
        text-transform: uppercase;
        font-size: 26px;
        font-weight: 300;
        background-color: #454445;    
    }

</style>
