import TableOperations from "../ui/TableOperations"
import Filter from "../ui/Filter"

export default function CabinTabelOperations() {
  return (
  <TableOperations>
    <Filter name={"discount"}  options={[{name:"All", value: "all" },{name:"No discount", value: "no-discount" },{name:"With discount" , value:"with-discount" }]}  />
  </TableOperations>
  )
}
