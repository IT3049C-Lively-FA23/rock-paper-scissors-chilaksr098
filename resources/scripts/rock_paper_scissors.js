class RockPaperScissors {

  constructor(username) {
    this.username = username;
    this.score = {
      user: 0,
      cpu: 0 
    },
    this.gameHistoryLog = [];
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse(){
    const acceptedValues = [ `rock`, `paper`, `scissors` ];
    return acceptedValues[Math.floor(Math.random()*acceptedValues.length)];
  };
  /**
   * returns one of the following values: `win`, `lose`, `tie`
   * tie:
   *     the user selection the same as the CPU
   * win: 
   *    (user is `rock` and cpu is `scissors
   *     OR
   *    (user is `paper` and cpu is `rock`) 
   *     OR 
   *    (user is `scissors` and cpu is `paper`)
   * `lose`:
   *    the opposite case :)
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   * @param {string} cpuSelection computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  determineWinner(userSelection, cpuSelection){
    if (userSelection === cpuSelection) {
      return 'tie';
    } else if (userSelection === 'rock') {
      if (cpuSelection === 'paper') {
        return 'lose';
      } else {
        return 'win';
      }
    } else if (userSelection === 'paper'){
      if (cpuSelection === 'scissors') {
        return 'lose';
      }else {
        return 'win';
      }
    } else if (userSelection === 'scissors') {
      if (cpuSelection === 'rock') {
        return 'lose';
      } else {
        return 'win';
      }
    }
  };

  /**[const | let | var] = function () {} (or () =>
   * 
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
  */
  play(userSelection){
    this.userSelection = userSelection.toLocaleLowerCase();
    console.log(this.userSelection);
   
    this.cpuSelection = this.generateCPUResponse();
    console.log(this.cpuSelection);

    const result = this.determineWinner(this.userSelection, this.cpuSelection);
    if(result === 'tie'){
      this.gameHistoryLog.push(`${this.username} selected ${this.userSelection}, CPU selected ${this.cpuSelection}: tie`);
    } else if(result === 'lose'){
      this.score.cpu ++;
      this.gameHistoryLog.push(`${this.username} selected ${this.userSelection}, CPU selected ${this.cpuSelection}: CUP wins wins`);
    } else if(result === "win"){
      this.score.user ++;
      this.gameHistoryLog.push(`${this.username} selected ${this.userSelection}, CPU selected ${this.cpuSelection}: ${this.username} wins wins`);
    }
  }

}
