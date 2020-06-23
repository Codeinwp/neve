/* global wp */
import PropTypes from 'prop-types'

const { Tooltip, Dashicon } = wp.components
const { useState } = wp.element
const { __ } = wp.i18n

const MultiSelect = ({ control }) => {
  const { choices } = control.params
  const [value, setValue] = useState(control.setting.get())

  const addable = Object.keys(choices).filter(choice => !value.includes(choice)).map(slug => {
    return (
      <Tooltip key={slug} text={__('Add item', 'neve')}>
        <button
          type='button'
          className='token'
          onClick={() => {
            const newVal = [...value, slug]
            setValue(newVal)
            control.setting.set(newVal)
          }}
        >
          <span className='title'>{choices[slug]}</span>
          <Dashicon icon='plus-alt' />
        </button>
      </Tooltip>
    )
  })
  const values = value.filter(slug => choices[slug]).map(slug => {
    return (
      <Tooltip key={slug} text={__('Remove Item', 'neve')}>
        <button
          className='token'
          type='button'
          onClick={() => {
            const newVal = [...value].filter(v => v !== slug)
            setValue(newVal)
            control.setting.set(newVal)
          }}
        >
          <span className='title'>{choices[slug]}</span>
          <Dashicon icon='dismiss' />
        </button>
      </Tooltip>
    )
  })

  return (
    <div className='neve-white-background-control neve-multiselect'>
      <span className='customize-control-title'>{control.params.label}</span>
      <div className='selected-options'>
        {values.length ?
          values :
          <span className='placeholder'>
            {__('Add items by clicking the ones below.', 'neve')}
          </span>}
      </div>
      <div className='available-options'>
        {addable.length > 0 ?
          addable :
          <span className='placeholder'>
            {__('All items are already selected.', 'neve')}
          </span>}
      </div>
    </div>
  )
}

MultiSelect.propTypes = {
  control: PropTypes.object.isRequired
}

export default MultiSelect
