
import { getAllCabins, getCabins } from '../../services/apiCabins'
import { useQuery, useQueryClient } from '@tanstack/react-query'


export default function useAllCabins() {
    const {isLoading , data :allCabins, error } =  useQuery({
    queryKey:["allCabins"],  
       queryFn:()=> getAllCabins()  
        })
        

        return {isLoading , allCabins  , error}
}
