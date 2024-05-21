import React from 'react'
import ButtonIcon from "../ui/ButtonIcon"
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'
import { useDarkMode } from '../contextApi/DarkModeContext'
export default function DarkModeToggle() {
    const {isDarkMode, toggleDarkMode} = useDarkMode()
  return (
    <ButtonIcon onClick={toggleDarkMode}>
        {isDarkMode? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  )
}
