import { HiArrowRightOnRectangle } from "react-icons/hi2"
import ButtonIcon  from "../../ui/ButtonIcon"
import { useLogout } from "./useLogout"
import SpinnerMini from "../../ui/SpinnerMini"
import Spinner from "../../ui/Spinner"

export default function Logout() {
    const{isLoading , logoutFun} = useLogout()
    if(isLoading) return <Spinner />
  return (
  <ButtonIcon disabled={isLoading} onClick={logoutFun}>  <HiArrowRightOnRectangle /> </ButtonIcon>
)
}

