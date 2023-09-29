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
      },
      isError : false,   
    }
  },

  
  methods : {
    addTask(){
      if(this.newTask.text.length < 5){
        this.isError = true;
        this.timer = setInterval(() =>{
          clearInterval(this.timer);
          this.isError = false;
      },3000)
      }else{
        this.isError = false
        this.task.unshift({...this.newTask});
        this.newTask.text = '';
      }
    },
    removeTask(index){
      if (this.task[index].doneTask === true){
        this.task.splice(index,1);
      }else{
        alert('You have to finish the activity as a turn to cancel it!');
      }
    }
  }

}).mount('#app');