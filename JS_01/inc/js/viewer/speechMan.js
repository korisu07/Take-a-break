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
  
  // 入力されたテキストをセット
  funcSpeech.text = receivedText;
  // 言語指定：日本語
  funcSpeech.lang = 'ja-JP';
  // 喋ってもらいます★ミ
  speechSynthesis.speak( funcSpeech );

} // end func textSpeech.

SpeechManButton.addEventListener('click', function(){
  
  if( SpeechManInput.value !== '' ){
    SpeechMan( SpeechManInput.value );
    outputText( SpeechManInput.value );

  } else {

    outputText( SpeechManOutput.textContent );
  }
});