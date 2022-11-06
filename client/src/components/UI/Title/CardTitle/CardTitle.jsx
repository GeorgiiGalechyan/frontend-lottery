import cl from './CardTitle.module.css'

export const CardTitle = ({ children, ...props }) => {
  return (
    <h1 className={cl.CardTitle} {...props}>
      {children}
    </h1>
  )
}
