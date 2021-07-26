'use strict';

const 
  moveElem = document.getElementById('js-moveElem'),
  moveElemCSS = getComputedStyle(moveElem, null);


function moveEvent(keyEvent, topCSS, leftCSS, moveSpeed = 10){

  let
    widthSetting = leftCSS.replace('px', ''),
    heightSetting = topCSS.replace('px', '');

    widthSetting = Number(widthSetting);
    heightSetting = Number(heightSetting);

  // キーを判別
  switch(keyEvent){

    // Wキーもしくは上方向キーが押された場合
    case 'w':
    case 'ArrowUp': 

    let
      moveToTop = heightSetting - moveSpeed;

      if(moveToTop < 0){
        moveToTop = 0;
      }

      moveElem.style.top = `${moveToTop}px`;
    break;
    
    // Aキーもしくは左方向キーが押された場合
    case 'a':
    case 'ArrowLeft': 

    let
      moveToLeft = widthSetting - moveSpeed;

      if(moveToLeft < 0){
        moveToLeft = 0;
      }

      moveElem.style.left = `${moveToLeft}px`;
    break;

    // Sキーもしくは下方向キーが押された場合
    case 's':
    case 'ArrowDown': 
    
    let
      moveToBottom = heightSetting + moveSpeed;

      if(moveToBottom > 475){
        moveToBottom = 475;
      }

    moveElem.style.top = `${moveToBottom}px`;
    break;

    // Dキーもしくは右方向キーが押された場合
    case 'd':
    case 'ArrowRight': 

    let
      moveToRight = widthSetting + moveSpeed;
      
      if(moveToRight > 615){
        moveToRight = 615;
      }

    moveElem.style.left = `${moveToRight}px`;
    break;
  } //end switch
}

document.body.addEventListener('keydown', function( event ){

  // 要素を動かす処理
  moveEvent(

    // 押されたキーボードキーの値を受け渡す
    event.key, 

    // 現在のCSS:topプロパティの値を取得
    moveElemCSS.getPropertyValue('top'),
    // 現在のCSS:leftプロパティの値を取得
    moveElemCSS.getPropertyValue('left')

  ); // Finishes executing the "moveEvent" function.
}); //end addEventListener.