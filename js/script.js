const {createApp}= Vue;

createApp({
  data(){
    return{

      task : [
        {
          text:'Fare la spesa',
          doneTask : true
        },

        {
          text:'Pagare Assicurazione',
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
      this.task.unshift({...this.newTask});
      this.newTask.text = '';
      console.log(this.task);
    },
    removeTask(index){
      this.task.splice(index,1)
    }
  }

}).mount('#app');