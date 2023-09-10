import ReactDom from 'react-dom';
import addIngredientForm from '../styles/AddIngredientForm.module.css'
import PropTypes, { func } from 'prop-types'
import { useState } from 'react';

export default function AddIngredientForm({open, onClose, onSubmit}) {

  const [selectedFrom,setSelectedForm] = useState('1');

  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div className={addIngredientForm.overlay} onClick={onClose}>
        <div className={addIngredientForm.window} onClick={e => e.stopPropagation()}>
            <div className={addIngredientForm.title}>Add a New Ingredient
            </div>
            <form action="" className={addIngredientForm.form} id="addIngredientForm">
                <div className={addIngredientForm.name}>
                  <label htmlFor={addIngredientForm.nameInput}>Name</label>
                  <input
                        className={addIngredientForm.nameInput} type="text"
                        id="name"
                        placeholder="Ingredient"
                        required
                        maxLength="50"
                  />
                </div>
                <div className={addIngredientForm.per}>
                  <label htmlFor={addIngredientForm.perSelector}>per</label>
                  <select
                    value={selectedFrom}
                    onChange={e => setSelectedForm(e.target.value)}
                    className={addIngredientForm.perSelector}
                  >
                    <option value="1">100g</option>
                    <option value="2">item</option>
                  </select>
                </div>
                {selectedFrom == "1" &&  
                    <>
                      <div className={addIngredientForm.numbers}>
                          <input
                          className={addIngredientForm.numberInput} type="number"
                          id="calories"
                          placeholder="Calories per 100g"
                          required
                          maxLength="5"
                        />
                        <input
                          className={addIngredientForm.numberInput} type="number"
                          id="proteins"
                          placeholder="Proteins per 100g"
                          required
                          maxLength="5"
                        />
                        <input
                          className={addIngredientForm.numberInput} type="number"
                          id="carbs"
                          placeholder="Carbohydrates per 100g"
                          required
                          maxLength="5"
                        />
                        <input
                          className={addIngredientForm.numberInput} type="number"
                          id="fats"
                          placeholder="Fats per 100g"
                          required
                          maxLength="5"
                        />
                      </div>
                    </>
                }
                {selectedFrom == "2" &&   
                    <>
                      <div className={addIngredientForm.gramsPerItem}>
                        <input
                          className={addIngredientForm.gramsPerItemInput} type="number"
                          id="gramsPerItem"
                          placeholder="grams per item"
                          required
                          maxLength="10"
                        /> 
                      </div>
                      <div className={addIngredientForm.numbers}>
                        <input
                          className={addIngredientForm.numberInput} type="number"
                          id="calories"
                          placeholder="Calories per item"
                          required
                          maxLength="5"
                        />
                        <input
                          className={addIngredientForm.numberInput} type="number"
                          id="proteins"
                          placeholder="Proteins per item"
                          required
                          maxLength="5"
                        />
                        <input
                          className={addIngredientForm.numberInput} type="number"
                          id="carbs"
                          placeholder="Carbohydrates per item"
                          required
                          maxLength="5"
                        />
                        <input
                          className={addIngredientForm.numberInput} type="number"
                          id="fats"
                          placeholder="Fats per item"
                          required
                          maxLength="5"
                        />
                      </div>
                    </>
                }
            </form>
            <button className={addIngredientForm.closeButton} onClick={() => {onSubmit();onClose()}} type="submit" form="addIngredientForm">Add</button>
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