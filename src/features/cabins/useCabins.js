import { useSearchParams } from 'react-router-dom'
import { getCabins } from '../../services/apiCabins'
import { useQuery } from '@tanstack/react-query'

export default function useCabins() {
    const [searchParams] = useSearchParams()
    const page = searchParams.get("page") || 1

    const {isLoading , data : cabinData, error } =  useQuery({
        queryKey:["cabins" , page],   // this will uniquely identify the data that we will query 
       queryFn:()=>getCabins({page})   //function that is responsible for fetching (function should return a promise)
        })

        return {isLoading , cabinData , error}
}
