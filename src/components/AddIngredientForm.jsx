import ReactDom from 'react-dom';
import addIngredientForm from '../styles/AddIngredientForm.module.css'
import PropTypes, { func } from 'prop-types'

export default function AddIngredientForm({open, onClose, onSubmit}) {

  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div className={addIngredientForm.overlay} onClick={onClose}>
        <div className={addIngredientForm.window} onClick={e => e.stopPropagation()}>
          Add Ingredient Form
          <button onClick={onSubmit}>Close Form</button>
        </div>
      </div>

    </>,
    document.getElementById('portal')
  )
}

AddIngredientForm.propTypes={
    open: PropTypes.bool,
    onClose: PropTypes.func,
    onSubmit: PropTypes.func,
}
