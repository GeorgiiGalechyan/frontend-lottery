import cl from './ScreenTitle.module.css'

export const ScreenTitle = ({ children, ...props }) => {
  return (
    <h1 className={cl.ScreenTitle} {...props}>
      {children}
    </h1>
  )
}
