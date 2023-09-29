const {createApp}= Vue;

createApp({
  data(){
    return{

      task : [
        {
          text:'Comprare la pizza',
          doneTask : false
        },

        {
          text:'Comprare latte',
          doneTask : false
        },

        {
          text:'Allenamento',
          doneTask : false
        }
      ],

      newTask : {
        text:'',
        doneTask: false
      }
      
      
    }
  },

  
  methods : {
    addTask(){
      this.task.unshift(this.newTask);
      this.newTask.text = '';
      console.log(this.task);
    }
  }

}).mount('#app');