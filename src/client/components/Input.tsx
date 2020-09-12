import React from 'react'

interface Props {
  placeholder: string
  onChange: (value: string) => void
}

const Input: React.FC<Props> = ({ placeholder, onChange }) => {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value)
  }

  return (
    <input onChange={handleChange} className='form-control' placeholder={placeholder} />
  )
}

export default Input
