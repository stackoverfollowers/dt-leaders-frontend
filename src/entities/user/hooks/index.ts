import { useGate, useUnit } from "@lib/effector";
import { userModel } from "../model"

export const useUser = () => {
  useGate(userModel.Gate);

  const { 
    user,
    isLoading
  } = useUnit({
    user: userModel.$user,
    isLoading: userModel.$isLoading
  })


  return ({
    user,
    isLoading
  })
} 