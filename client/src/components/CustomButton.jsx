import React from 'react'

const CustomButton = ({type, title, handleClick, customStyles}) =>
{
  const generateStyles = (type) => {
    if(type == "filled") {
      return {
        backgroundColor: "#000",
        color: "#fff",

      }
    }
  }


  return (
<button
className = {'px-2 py-1.5 flex-1 rounded-md ${customStyles}'}
style={generateStyles(type)}
>
{title}
</button>
    )
}

export default CustomButton;