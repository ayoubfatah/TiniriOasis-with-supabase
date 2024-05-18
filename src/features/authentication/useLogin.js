import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
    const queryClient = useQueryClient()
    const navigate = useNavigate();
    const { mutate, isLoading } = useMutation({
        mutationFn: ({ email, password }) => login({ email, password }),
        onSuccess: (result) => {
            if (result.success) {
                queryClient.setDefaultOptions(["user"] , result?.data)
                navigate("/dashboard" ,{replace: true});
            } else {
                toast.error("Provided email or password are incorrect");
            }
        },
        onError: (err) => {
            console.error('Unexpected error:', err);
            toast.error("The Provided email or password are  incorrect ");
        }
    });
    
    return { mutate, isLoading };
}
