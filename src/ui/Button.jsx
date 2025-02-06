import React from 'react'

function Button({children,handleOnClick,justify = 'justify-start',bg = 'bg-slate-600',hover='hover:bg-slate-700', text='text-white',width='w-1/2'}    ) {




  return (
    <div  className={`mt-2 flex  ${justify} w-2/3 `}>

    <button onClick={handleOnClick} className={`shadow-lg ${bg} ${text} ${width} uppercase font-semibold rounded-sm py-1 inline-block  
    ${hover} hover:text-white`}
    >{children}</button>
    </div>    // <div>Button</div>
  )
}

export default Button