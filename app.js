angular.module('theBall', [])
  .controller('MainCtrl', [function(){
    this.prediction = function(){
      if(this.question) {
        this.answer = answers[Math.floor(Math.random() * (answers.length))];
      } 
    };
    var answers = [
      'It looks good', 
      'Not so much',
      'kill me', 
    ];
  }]);
