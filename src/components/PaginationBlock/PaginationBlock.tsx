import './PaginationBlock.scss'
import { Pagination } from "@mui/material"
import { Stack } from "@mui/system"

type Props = {
  numberOfPages: number,
  getCurrentPage: (a:string) => void
}
export const PaginationBlock:React.FC<Props> = ({ 
  numberOfPages,
  getCurrentPage, 
}) => {

  const handleCurrentPage = (event: React.ChangeEvent<unknown>, value: number) => {
    getCurrentPage(value.toString());
  };

    return (
      <div className='pagination-container'>
        {!!numberOfPages && (
          <Stack spacing={2}>
            <Pagination count={numberOfPages} shape="rounded" onChange={handleCurrentPage}/>
          </Stack>
        )}

      </div>
  )
}
