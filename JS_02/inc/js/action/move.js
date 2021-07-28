'use strict';

const 
  moveElem = document.getElementById('js-moveElem'),
  moveElemCSS = getComputedStyle(moveElem, null);


function inputKeyboard(keyEvent){

  // キーボード設定
  const keySetting = [
      {keyboard : 'w', direction : 'up'},
      {keyboard : 'a', direction : 'left'},
      {keyboard : 's', direction : 'down'},
      {keyboard : 'd', direction : 'right'},
      {keyboard : 'ArrowUp', direction : 'up'},
      {keyboard : 'ArrowLeft', direction : 'left'},
      {keyboard : 'ArrowDown', direction : 'down'},
      {keyboard : 'ArrowRight', direction : 'right'}
    ];

  // 押されたキーに一致するものを検索
  const result = keySetting.filter(setting => {
    return setting.keyboard === keyEvent;
  });

  // 一致した場合のみ、設定名を呼び出し、
  // それ以外の場合は falseを返す
  return result.length > 0 ? result[0].direction : false;
} // end function inputKeyboard.


// 移動させる数値を計算する関数
function calcMoveDistance(keyEvent, widthRenge, heightRenge, moveSpeed = 10){

  let
    // 現在のCSS:topプロパティの値を取得 -> 数値だけ取得
    widthSetting = moveElemCSS.getPropertyValue('left').replace('px', ''),
    // 現在のCSS:leftプロパティの値を取得 -> 数値だけ取得
    heightSetting = moveElemCSS.getPropertyValue('top').replace('px', '');

    // 取得した数値を計算可能な状態に変換
    widthSetting = Number(widthSetting);
    heightSetting = Number(heightSetting);


    // 操作設定
    const PlayerOperationSettings = [
      
      { // 上へ移動するための設定
        settingName : 'up',
        action : function(){ 
          const 
            moveToTop = heightSetting - moveSpeed;

          return moveToTop > 0 ? moveToTop : 0;
        } // end function.
      }, // end up setting.

      { // 左へ移動するための設定
        settingName: 'left',
        action : function(){
          const
            moveToLeft = widthSetting - moveSpeed;

          return moveToLeft > 0 ? moveToLeft : 0;
        } // end function.
      }, // end left setting.

      { // 下へ移動するための設定
        settingName : 'down',
        action : function(){
          const
            moveToBottom = heightSetting + moveSpeed;

          return moveToBottom < heightRenge ? moveToBottom : heightRenge;
        } // end function.
      }, // end down setting.

      { // 右へ移動するための設定
        settingName : 'right',
        action : function(){
          const
            moveToRight = widthSetting + moveSpeed;

          return moveToRight < widthRenge ? moveToRight : widthRenge;
          }// end function
      } // end right setting.
    ]; // end PlayerOperationSettings.
    

    // 押されたキーと一致する設定があるかを検索
    const result = PlayerOperationSettings.filter(action => {
      return action.settingName === keyEvent;
    });

    // 一致するものがある場合、関数を実行する
    return result.length > 0 ? result[0].action() : false;

} // end function calcMoveDistance.


// キーが押されたら実行
document.body.addEventListener('keydown', function( event ){

  // 押されたキーと設定で一致するものがあれば発動
  if( inputKeyboard(event.key) ) {
    console.log(
      // 要素を動かす処理
      calcMoveDistance(
    
        // 押されたキーボードキーの値を受け渡す
        // また、右に移動できる上限と、下に移動できる上限を指定
        inputKeyboard(event.key), 615, 475
    
      )); // Finishes executing the "moveEvent" function.
  } // end if.

}); // end addEventListener.