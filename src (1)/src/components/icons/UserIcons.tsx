import React from 'react';

interface UserIconProps {
  size?: number;
  className?: string;
}

// User 1 - Person with curly hair
export const User1Icon: React.FC<UserIconProps> = ({ size = 32, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="16" cy="16" r="16" fill="#4DB6AC" />
    <circle cx="16" cy="12" r="6" fill="#FFF3E0" />
    <path
      d="M8 26.5C8 22.5 11.5 19 16 19C20.5 19 24 22.5 24 26.5"
      fill="#FFF3E0"
    />
    {/* Curly hair */}
    <path
      d="M12 8C12 6 13.5 4.5 16 4.5C18.5 4.5 20 6 20 8C20 6.5 21 5.5 22 6.5C21.5 7.5 20.5 8 19.5 8.5C20 9 20.5 9.5 20 10.5C19 10 18 9.5 17 10C18 10.5 18.5 11.5 17.5 12C16.5 11.5 15.5 11 14.5 11.5C15 12 15.5 12.5 15 13C14 12.5 13 12 12 12.5C12.5 11.5 12 10.5 11.5 9.5C11 9 10.5 8.5 11 7.5C11.5 8 12 8.5 12 8Z"
      fill="#8D6E63"
    />
  </svg>
);

// User 2 - Person with straight hair and glasses
export const User2Icon: React.FC<UserIconProps> = ({ size = 32, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="16" cy="16" r="16" fill="#81C784" />
    <circle cx="16" cy="12" r="6" fill="#FFDBCB" />
    <path
      d="M8 26.5C8 22.5 11.5 19 16 19C20.5 19 24 22.5 24 26.5"
      fill="#FFDBCB"
    />
    {/* Straight hair */}
    <path
      d="M10 6C10 4 12 2 16 2C20 2 22 4 22 6V12H20V8C20 7 19 6 18 6H14C13 6 12 7 12 8V12H10V6Z"
      fill="#3E2723"
    />
    {/* Glasses */}
    <circle cx="13" cy="11" r="2.5" fill="none" stroke="#424242" strokeWidth="1" />
    <circle cx="19" cy="11" r="2.5" fill="none" stroke="#424242" strokeWidth="1" />
    <path d="M15.5 11H16.5" stroke="#424242" strokeWidth="1" />
  </svg>
);

// User 3 - Person with ponytail
export const User3Icon: React.FC<UserIconProps> = ({ size = 32, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="16" cy="16" r="16" fill="#C8E6C9" />
    <circle cx="16" cy="12" r="6" fill="#F3E5AB" />
    <path
      d="M8 26.5C8 22.5 11.5 19 16 19C20.5 19 24 22.5 24 26.5"
      fill="#F3E5AB"
    />
    {/* Hair with ponytail */}
    <path
      d="M10 6C10 4 12 2 16 2C20 2 22 4 22 6V10H20V8C20 7 19 6 18 6H14C13 6 12 7 12 8V10H10V6Z"
      fill="#8D6E63"
    />
    {/* Ponytail */}
    <ellipse cx="24" cy="8" rx="3" ry="6" fill="#8D6E63" />
  </svg>
);

// User 4 - Person with short hair and beard
export const User4Icon: React.FC<UserIconProps> = ({ size = 32, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="16" cy="16" r="16" fill="#4DB6AC" />
    <circle cx="16" cy="12" r="6" fill="#D7CCC8" />
    <path
      d="M8 26.5C8 22.5 11.5 19 16 19C20.5 19 24 22.5 24 26.5"
      fill="#D7CCC8"
    />
    {/* Short hair */}
    <path
      d="M11 6C11 4 13 2 16 2C19 2 21 4 21 6V9C21 8 20 7 19 7H13C12 7 11 8 11 9V6Z"
      fill="#5D4037"
    />
    {/* Beard */}
    <path
      d="M12 15C12 16 13 17 14 17H18C19 17 20 16 20 15V14C20 15 19 16 18 16H14C13 16 12 15 12 14V15Z"
      fill="#5D4037"
    />
  </svg>
);

// User 5 - Person with wavy hair
export const User5Icon: React.FC<UserIconProps> = ({ size = 32, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="16" cy="16" r="16" fill="#81C784" />
    <circle cx="16" cy="12" r="6" fill="#EFEBE9" />
    <path
      d="M8 26.5C8 22.5 11.5 19 16 19C20.5 19 24 22.5 24 26.5"
      fill="#EFEBE9"
    />
    {/* Wavy hair */}
    <path
      d="M10 6C10 4 12 2 16 2C20 2 22 4 22 6C22 5 21.5 4.5 21 5C20.5 5.5 20 6 19.5 5.5C19 5 18.5 5.5 18 6C17.5 6.5 17 6 16.5 6.5C16 7 15.5 6.5 15 7C14.5 7.5 14 7 13.5 7.5C13 8 12.5 7.5 12 8C11.5 8.5 11 8 10.5 8.5C10 9 10 8 10 7V6Z"
      fill="#FF7043"
    />
    <path
      d="M10 7V11C10 10 11 9 12 9H20C21 9 22 10 22 11V7C22 8 21 9 20 9H12C11 9 10 8 10 7Z"
      fill="#FF7043"
    />
  </svg>
);

// Export all icons as an array for easy iteration
export const userIcons = [User1Icon, User2Icon, User3Icon, User4Icon, User5Icon];