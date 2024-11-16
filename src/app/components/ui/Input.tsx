import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={`rounded border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none ${className}`}
      {...props}
    />
  )
}

export default Input