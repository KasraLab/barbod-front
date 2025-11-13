export function Logo({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) {
  const sizes = {
    small: { container: 'w-7 h-7', text: 'text-base' },
    default: { container: 'w-9 h-9', text: 'text-xl' },
    large: { container: 'w-12 h-12', text: 'text-2xl' }
  };

  const { container, text } = sizes[size];

  return (
    <div className="flex items-center gap-3">
      {/* Logo Icon */}
      <div className={`${container} relative rounded-[var(--radius-md)] bg-brand-gradient flex items-center justify-center shadow-[var(--shadow-md)] angular-cut`}>
        {/* B letter with geometric design */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[60%] h-[60%]"
        >
          {/* Shield outline */}
          <path
            d="M12 2L4 6V11C4 16 7 20.5 12 22C17 20.5 20 16 20 11V6L12 2Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Biometric fingerprint detail */}
          <path
            d="M12 9C13.1 9 14 9.9 14 11C14 12.1 13.1 13 12 13"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.8"
          />
          <path
            d="M10 11C10 9.3 11.3 8 13 8"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.6"
          />
        </svg>
      </div>
      
      {/* Logo Text */}
      <div className="flex flex-col leading-none">
        <span className={`${text} tracking-tight`}>باربُد</span>
        <span className="text-[10px] text-[color:var(--text-tertiary)] tracking-wider">BARBOD</span>
      </div>
    </div>
  );
}
