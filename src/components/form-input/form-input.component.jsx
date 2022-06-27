import React from 'react'

import { Group, FormInputLabel, FormInputContainer } from './form-input.styles'

const FormInput = ({ label, ...otherProps }) => {
   return (
      <Group>
         <FormInputContainer {...otherProps} />
         { label &&
            <FormInputLabel className={`${otherProps.value.length ? 'shrink' : ''} form-input-label `} >{label}</FormInputLabel>
         }
      </Group>
   )
}

export default FormInput