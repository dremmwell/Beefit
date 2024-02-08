import React from 'react';
import { ReactDOM } from 'react-dom';

function AddRecipeForm() {
  return ReactDOM.createPortal(
    <>
        <div>
        
        </div>
    </>,
    document.getElementById('portal')
  )
}

export default AddRecipeForm
