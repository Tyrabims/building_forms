import React, { FormEvent, useState } from 'react'
import { useForm } from "react-hook-form";

export const Form = () => {
  const { register, handleSubmit, formState:{} } = useForm();
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input 
          {...register('name', { required: true, minLength: 3 })}
            id="name" 
            type="text" 
            className="form-control" />
            { <p>The name field is required.</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input value={person.age}
          {...register} 
            id="age" type="number" className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  )
}