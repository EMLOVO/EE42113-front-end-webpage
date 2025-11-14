interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
  const sizes = {
    sm: { icon: 32, text: 'text-sm' },
    md: { icon: 48, text: 'text-base' },
    lg: { icon: 64, text: 'text-lg' }
  };

  const { icon: iconSize, text: textSize } = sizes[size];

  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      {/* Circular Logo Icon */}
      <div className="relative">
        <svg width={iconSize} height={iconSize} viewBox="0 0 48 48" className="drop-shadow-sm">
          {/* Outer circle */}
          <circle
            cx="24"
            cy="24"
            r="22"
            fill="#4DB6AC"
            stroke="#81C784"
            strokeWidth="2"
          />
          
          {/* Inner design elements */}
          <circle
            cx="24"
            cy="24"
            r="18"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1"
            opacity="0.3"
          />
          
          {/* Central design - books/study elements */}
          <g transform="translate(24, 24)">
            {/* Book stack */}
            <rect x="-8" y="-3" width="16" height="2" fill="#ffffff" rx="1" />
            <rect x="-6" y="-1" width="12" height="2" fill="#ffffff" rx="1" opacity="0.8" />
            <rect x="-4" y="1" width="8" height="2" fill="#ffffff" rx="1" opacity="0.6" />
            
            {/* Connection lines */}
            <path d="M-12 -6 Q-8 -8 0 -8 Q8 -8 12 -6" fill="none" stroke="#ffffff" strokeWidth="1.5" opacity="0.4" />
            <path d="M-12 6 Q-8 8 0 8 Q8 8 12 6" fill="none" stroke="#ffffff" strokeWidth="1.5" opacity="0.4" />
          </g>
          
          {/* Small accent dots */}
          <circle cx="12" cy="12" r="1.5" fill="#C8E6C9" />
          <circle cx="36" cy="36" r="1.5" fill="#C8E6C9" />
          <circle cx="36" cy="12" r="1" fill="#ffffff" opacity="0.6" />
          <circle cx="12" cy="36" r="1" fill="#ffffff" opacity="0.6" />
        </svg>
      </div>
      
      {/* Text */}
      {showText && (
        <div className={`text-center ${textSize}`}>
          <div className="font-semibold text-primary leading-tight">
            Study 2Gather
          </div>
        </div>
      )}
    </div>
  );
}