//accessing the elements
let boxes = document.querySelectorAll('.box');
let message = document.getElementById('msg');

//initializing the default value
let turnO = true;

//array for winning outcomes
const winPatterns = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];


//value for each box
boxes.forEach((box) => {

  box.addEventListener('click', () => {

    if(turnO){
      box.innerHTML = 'O';
      turnO = false;
    }else{
      box.innerHTML = 'X';
      turnO = true;
    }
    box.disabled = true;

    checkWinner ();

  });
});


//function for reset button
const resetPage =  () => {

  window.location.reload();

};


//function for game completion
const gameComplete = () => {

  for(let box of boxes){
    box.disabled = true;
  }
};


//function for winning message
const showWinner = (winner) => {
  message.innerText = `Cheers! Winner is ${winner}`;
}


//function for win game
const checkWinner = () => {

  for (let pattern of winPatterns){
    let pos1Val = boxes[pattern[0]].innerHTML;
    let pos2Val = boxes[pattern[1]].innerHTML;
    let pos3Val = boxes[pattern[2]].innerHTML;

    if(pos1Val != '' && pos2Val != '' && pos3Val != ''){
      if(pos1Val == pos2Val && pos2Val == pos3Val){
        showWinner(pos1Val);
        gameComplete();

      }
    }
  }

};

