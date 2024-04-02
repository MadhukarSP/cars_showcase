"use client";

import Image from 'next/image';
import { MouseEventHandler } from 'react';

export interface CustomButtonProps {
  title: string;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

const CustomButton = ({ title, btnType = 'button', containerStyles, textStyles, rightIcon, isDisabled, handleClick }: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>
        {title}
      </span>
      {rightIcon && (
        <div className='relative w-6 h-6'>
          <Image src={rightIcon} alt="right icon" fill className='object-contain' />
        </div>
      )}
    </button>
  )
}

export default CustomButton