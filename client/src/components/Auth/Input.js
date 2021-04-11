import React from 'react'

export const Input = ({ type, id, name, value, onChange }) => {
  return (
    <>
       <input 
        className="py-3 px-4 block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 border-gray-300 rounded-md"
        required
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange} 
      />
    </>
  )
}
