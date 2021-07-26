'use strict';

const 
  moveElem = document.getElementById('js-moveElem');


// // 読み込み時に、elementの位置をリセット
// window.addEventListener("DOMContentLoaded", function(){

//   // elementを左下へ リセット
//   moveElem.style.inset = 'auto auto 0px 0px';
  
// });


// 返された配列の数によって、指定する配列の順番を変える処理
function arrayNumberSwitch(length){
  switch(length){
    case 1:
      return {'top': 0, 'left' : 0, 'bottom' : 0, 'right' : 0};
    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
  }
}

function moveEvent(keyEvent, insetSetting){

  const 
    setting = insetSetting.split(' ');
  console.log(setting);

  // キーを判別
  switch(keyEvent){
    case 'w': 

    let
      topSetting = setting[0].replace(/auto|px/m, '');
      topSetting = Number(topSetting);
      topSetting = topSetting - 10;

      if(topSetting < 0){
        topSetting = 0;
      }

      console.log(topSetting);
      moveElem.style.top = `${topSetting}px`;
    break;
    

    case 'a': 

    let
      leftSetting = setting[1].replace(/auto|px/m, '');
      leftSetting = Number(leftSetting);
      leftSetting = leftSetting - 10;

      if(leftSetting < 0){
        leftSetting = 0;
      }

      moveElem.style.left = `${leftSetting}px`;
    break;


    case 's': 
    
    let
      bottomSetting = setting[2].replace(/auto|px/m, '');
      bottomSetting = Number(bottomSetting);
      bottomSetting = bottomSetting - 10;

      if(bottomSetting < 0){
        bottomSetting = 0;
      }

    moveElem.style.bottom = `${bottomSetting}px`;
    break;


    case 'd': 

    let 
      rightSetting = setting[3].replace(/auto|px/m, '');
      rightSetting = Number(rightSetting);
      rightSetting = rightSetting - 10;
      
      if(rightSetting < 0){
        rightSetting = 0;
      }

    moveElem.style.right = `${rightSetting}px`;
    break;
  };
}

document.body.addEventListener('keydown', function( event ){
  moveEvent(event.key, getComputedStyle(moveElem, null).getPropertyValue('inset'));
});

// *test*
console.log(getComputedStyle(moveElem).getPropertyValue('inset'));
