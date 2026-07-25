export default function Button({ children, href = '#signup', className = '', variant = 'primary', ...props }) {
  const base =
    'inline-flex items-center justify-center rounded-full px-7 py-4 text-center font-heading font-semibold text-[17px] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest'
  const variants = {
    primary: 'bg-forest text-white shadow-md shadow-forest/20 hover:bg-[#264a3d]',
    secondary: 'bg-white text-forest border-2 border-forest hover:bg-base/60',
  }
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  )
}
