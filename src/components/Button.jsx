function Button({children, icon, ...props}) {

  return (
    <button {...props} className="">
        <img src={icon}/>
        {children}</button>
  )
}

export default Button