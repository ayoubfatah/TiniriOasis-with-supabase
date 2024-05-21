import { useSearchParams } from 'react-router-dom'
import { getCabins } from '../../services/apiCabins'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { PAGE_SIZE } from '../../utils/const'

export default function useCabins() {
    const [searchParams] = useSearchParams()
    // pagination 
    const page = +searchParams.get("page") || 1
    const queryClient = useQueryClient()
    const {isLoading , data , error } =  useQuery({
        queryKey:["cabins" , page],   // this will uniquely identify the data that we will query 
       queryFn:()=>getCabins({page })   //function that is responsible for fetching (function should return a promise)
        })
        const {count , data:cabinData} = data ?? {}
            // prefetching 
     const pageCount = Math.ceil(count/PAGE_SIZE)
    if(page< pageCount){
        queryClient.prefetchQuery({
            queryKey:["cabins" , page +1],   // this will uniquely identify the data that we will query 
            queryFn:()=>getCabins({page: page +1 }) })
    }
    if(page > 1){
        queryClient.prefetchQuery({
            queryKey:["cabins" , page -1],   // this will uniquely identify the data that we will query 
            queryFn:()=>getCabins({page: page - 1 }) })
    }   
        return {isLoading , count, cabinData ,data , error}
}
