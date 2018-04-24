<template>
  <div id="app"> 

    <!-- Page header -->
    <page-header>{{pageTitle}}</page-header>

    <section class="wrapper">

      <!-- Task header -->
      <div class="task-header">
        <input type="text" v-model="taskName" placeholder="enter task..." v-on:keyup.13="addTask">
        <custom-button title="create" v-bind:action="addTask"></custom-button>
      </div>  

      <ul v-if="sort.length > 0" class="task-list">

        <!-- Task list -->
        <transition-group name="fade">

          <li class="task" v-for="(task, index) in sort" 
              v-bind:key="index"  
              v-bind:class="{success: task.isSuccess}">
            
            <span>{{task.name}}</span>

            <div class="btn-wrapper"> 
              
              <!-- Button done task -->
              <icon-button 
                v-bind:color="task.isSuccess ? '#454445' : '#009494'" 
                v-bind:icon="task.isSuccess ? 'times' : 'check'" 
                v-bind:action="()=> doneTask(index)">
              </icon-button>

              <!-- Button delete task -->
              <icon-button 
                color="#FF5729" 
                icon="ban" 
                v-bind:action="()=> deleteTask(index)">
              </icon-button>

            </div>
          </li>

        </transition-group>

      </ul>

      <!-- if nothing show this block show -->
      <div v-else class="alert-show">Nothing Show</div>
    
      <!-- Conted tasks -->
      <div class="number-block-wrapper">
        <number-block title="All tasks:" v-bind:count="getAllTask.length"></number-block>
        <number-block title="Success task:" v-bind:count="getSuccessTask.length"></number-block>
        <number-block title="Current task:" v-bind:count="getCurrentTask.length"></number-block>
      </div>

      <!-- Switch buttons -->
      <footer class="button-block">
        <custom-button v-bind:class="sortBy === 'all' ? 'active' : ''" title="show all" v-bind:action="()=> filter('all')"></custom-button>
        <custom-button v-bind:class="sortBy === 'success' ? 'active' : ''" title="show success" v-bind:action="()=> filter('success')"></custom-button>
        <custom-button v-bind:class="sortBy === 'current' ? 'active' : ''" title="show current" v-bind:action="()=> filter('current')"></custom-button>        
      </footer>
      
      <!-- Delete succes tasks button -->
      <transition name="fade">
        <custom-button 
          v-show="getSuccessTask.length" 
          class="button_delete" 
          title="delete success tasks" 
          v-bind:action="deleteSuccesTasks">
        </custom-button>
      </transition>
    </section>

  </div>
</template>

<script>

import PageHeader from './components/PageHeader'
import IconButton from './components/ui/IconButton'
import NumberBlock from './components/ui/NumberBlock'
import CustomButton from './components/ui/Button'

export default {
  name: 'app',
  data () {
    return {
      pageTitle: 'TODO list application',
      taskName: '',
      tasks: [{
        name: 'first',
        isSuccess: false
      },
      {
        name: 'second',
        isSuccess: true
      }],
      sortBy: 'all'
    }
  },

  components: {
    PageHeader,
    IconButton,
    NumberBlock,
    CustomButton
  },

  methods: {
    addTask: function () {
      if (this.taskName) {
        this.tasks.push({name: this.taskName, isSuccess: false})
        this.taskName = ''
      } else {
        alert('Write a task pls')
        return false
      }
    },
    doneTask: function (index) {
      this.tasks[index].isSuccess = !(this.tasks[index].isSuccess)
    },
    deleteTask: function (index) {
      return this.tasks.splice(index, 1)
    },
    deleteSuccesTasks: function () {
      let tasks = []

      this.tasks.map((task) => {
        if (task.isSuccess === false) {
          tasks.push(task)
        }
      })
      this.tasks = tasks
    },
    filter: function (type) {
      this.sortBy = type
    }
  },

  computed: {
    getAllTask: function () {
      return this.tasks
    },
    getSuccessTask: function () {
      return this.tasks.filter((task) => {
        return task.isSuccess === true
      })
    },
    getCurrentTask: function () {
      return this.tasks.filter((task) => {
        return task.isSuccess === false
      })
    },
    sort: function () {
      switch (this.sortBy) {
        case 'success':
          return this.tasks.filter((task) => {
            return task.isSuccess === true
          })
        case 'current':
          return this.tasks.filter((task) => {
            return task.isSuccess === false
          })
        case 'all':
          return this.tasks
        default:
          return false
      }
    }
  }
}
</script>

<style>

  *{
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    margin: 0;
    padding: 0;
  }

  .wrapper {
    margin: 50px auto;
    max-width: 350px;
    box-shadow: 0 0 4px 0px #454445;
  }
  
  .task-header {
    position: relative;
    border-bottom: 1px solid #e4e4e4;
  }

  .task-header input {
    width: 100%;
    height: 40px;
    padding: 5px 85px 5px 10px;
    background-color: #fff;
    color: #454445;
    border: none;
    box-shadow: none;
    outline: none;
    font-size:  16px; 
  }

  .task-header button {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    width: 70px;
    height: 100%;
    z-index: 2;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0
  }

  .task {
    position: relative;
    padding: 0;
  }

  .task:not(:last-child){
    border-bottom: 1px solid #e4e4e4;
  }

  .task span {
    display: flex;
    align-items: center;
    height: 40px;
    padding: 5px 60px 5px 10px;
    font-size: 16px;
    color: #454445;
    background-color: #f5f2dc;
    transition: .3s ease;
  }


  .task.success span{
    opacity: 0.3;
  }

  .btn-wrapper {
    position: absolute;    
    top: 50%;
    transform: translateY(-50%);
    right: 5px;
  }

  .number-block-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .number-block-wrapper .number-block {
    width:  33.333%;
  }

  .button-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #e4e4e4;
  }

  .button-block .button {
    height: 50px;
    width:  33.33%;
  }

  .button-block .button:not(:last-child) {
    border-right: 1px solid #e4e4e4;
  }

  .alert-show {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    font-size: 30px;
    background-color: #fff;
    font-weight: 300;
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .3s ease;
    transition: opacity .7s;
  }

  .fade-enter, .fade-leave-to{
    transition: all .3s ease;
    opacity: 0;
  }

  
</style>
