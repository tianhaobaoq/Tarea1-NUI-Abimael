import React from 'react';
//npm i react-speech-recognition
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

//Ejemplo en el que se transcribe lo que dice la persona
//cuando encendemos el micro
function EjVoz(){
  
      const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition();
    
      if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
      }
    
      return (
        <div>
          <p>Microphone: {listening ? 'on' : 'off'}</p>
          <button onClick={SpeechRecognition.startListening}>Start</button>
          {/*Si queremos que se escuche continuamente:
          <button onClick={() => SpeechRecognition.startListening({continuous: true})}>Start</button>*/}
          <button onClick={SpeechRecognition.stopListening}>Stop</button>
          <button onClick={resetTranscript}>Reset</button>
          <p>{transcript}</p>
        </div>
      );
    };
    

export default EjVoz;