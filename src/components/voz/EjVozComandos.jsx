import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const VozOrdenes = () => {

  const [message, setMessage] = useState('')
  const commands = [
    {
      command: 'Me gustaría pedir *',
      callback: (food) => setMessage(`Tu pedido es de: ${food}`)
    },
    {
      command: 'El tiempo está :condition hoy',
      callback: (condition) => setMessage(`Hoy el tiempo está ${condition}`)
    },
    {
      command: 'Mis deportes favoritos son * y *',
      callback: (sport1, sport2) => setMessage(`#1: ${sport1}, #2: ${sport2}`)
    },
    {
      command: 'Pásame la sal (por favor)',
      callback: () => setMessage('Aquí tienes')
    },
    {
      command: ['Hola', 'Holitas'],
      callback: ({ command }) => setMessage(`Hola. Dijiste: "${command}"`),
      matchInterim: true
    },
    {
      command: 'Beijing',
      callback: (command, spokenPhrase, similarityRatio) => setMessage(`${command} and ${spokenPhrase} are ${similarityRatio * 100}% similar`),
      // If the spokenPhrase is "Benji", the message would be "Beijing and Benji are 40% similar"
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.2
    },
    {
      command: 'borrar',
      callback: ({ resetTranscript }) => resetTranscript()
    }
  ]

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition({ commands })
  console.log(transcript)
  if (!browserSupportsSpeechRecognition) {
    return null
  }

   
  
  console.log(message)
  return (
    <div>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <p>{transcript}</p>
      <p>{message}</p>
      
     
    </div>
  )
}
export default VozOrdenes