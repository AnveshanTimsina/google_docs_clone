import { useEffect, useRef } from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'

export default function TextEditor() {
  const wrapperRef = useRef(null)
  const quillRef = useRef(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    wrapper.innerHTML = ''

    const editor = document.createElement('div')
    wrapper.appendChild(editor)

    quillRef.current = new Quill(editor, { theme: 'snow' })

    return () => {
      quillRef.current = null
      wrapper.innerHTML = ''
    }
  }, [])

  return <div ref={wrapperRef} />
}