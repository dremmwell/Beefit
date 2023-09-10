import React from 'react'
import addIngredientForm from '../styles/AddIngredientForm.module.css'
import PropTypes from 'prop-types';

export default function AddIngredientForm({open, onClose}) {
    if (!open) return null

  return (
    <div>
      Add Ingredient Form
      <button onClick={onClose}>Close Form</button>
    </div>
  )
}

AddIngredientForm.propTypes={
    open: PropTypes.bool,
}
