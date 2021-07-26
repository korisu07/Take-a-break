'use strict';


const 
  // 入力されたテキストを取得
  SpeechManInput = document.getElementById('js-Speechman-text'),
  // ボタンを取得
  SpeechManButton = document.getElementById('js-Speechman-btn'),

  // テキストを表示する部分を取得
  SpeechManOutput = document.getElementById('js-Speechman-Output');


// テキストを出力
function outputText( speechText ){
  SpeechManOutput.textContent = speechText;
}

// Speechmanに喋らせる関数
function SpeechMan( receivedText ){

  // スピーチマン 起動★
  const 
    funcSpeech = new SpeechSynthesisUtterance();
  
    // テキストが入力されている場合に発動
    if( SpeechManInput.value !== '' ){

      // 入力されたテキストをセット
      funcSpeech.text = receivedText;
      // 言語指定：日本語
      funcSpeech.lang = 'ja-JP';
      // 喋ってもらいます★ミ
      speechSynthesis.speak( funcSpeech );

      // 入力された内容を表示
      outputText( receivedText );

    } //end if.

} // end func textSpeech.


// 「しゃべる！」ボタンを押した場合に発動
SpeechManButton.addEventListener('click', function(){
  
  // しゃべるよ！
  SpeechMan( SpeechManInput.value );

}); // end addEventListener.


// Enterkeyを押しても発動
document.body.addEventListener('keydown', function( event ){
  // Enterkeyが押された場合に発動
  if(event.key === 'Enter'){

    console.log('yeah');
    // しゃべるよ！
    SpeechMan( SpeechManInput.value );
  } // end if.

}); // end addEventListener.