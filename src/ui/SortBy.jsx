import { useSearchParams } from "react-router-dom";
import Select from "./Select";

export default function SortBy({options}) {
    const [searchParams , setSearchParams] = useSearchParams()
   const sortBy = searchParams.get("sortBy") || ""
   function handleChange(e){
    const value =e.target.value
    searchParams.set("sortBy",value )
    setSearchParams(searchParams)
    }
  return (
 <Select options={options}  value={sortBy}  onChange={handleChange} type={"white"} />  
)
}
