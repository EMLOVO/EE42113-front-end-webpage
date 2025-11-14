declare module 'react-speech-recognition' {
  import * as React from 'react'

  type StartOptions = {
    continuous?: boolean
    language?: string
  }

  export interface UseSpeechRecognitionResult {
    transcript: string
    listening: boolean
    browserSupportsSpeechRecognition: boolean
    isMicrophoneAvailable?: boolean
    finalTranscript?: string
    interimTranscript?: string
    resetTranscript: () => void
  }

  export function useSpeechRecognition(): UseSpeechRecognitionResult

  const SpeechRecognition: {
    startListening: (options?: StartOptions) => void
    stopListening: () => void
  }

  export default SpeechRecognition
}