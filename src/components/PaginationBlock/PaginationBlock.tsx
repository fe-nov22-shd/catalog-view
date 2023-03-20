import './PaginationBlock.scss'
import { Pagination } from "@mui/material"
import { Stack } from "@mui/system"

type Props = {
  numberOfPages: number,
  getCurrentPage: (a:string) => void,
  currentPage:string
}
export const PaginationBlock:React.FC<Props> = ({
  numberOfPages,
  getCurrentPage,
  currentPage
}) => {

  const handleCurrentPage = (event: React.ChangeEvent<unknown>, value: number) => {
    getCurrentPage(value.toString());
  };

    return (
      <div className='pagination-container'>
        {!!numberOfPages && (
          <Stack spacing={2}>
            <Pagination
              sx={{borderRadius: '0'}}
              defaultPage={1}
              page={+currentPage}
              count={numberOfPages}
              shape="rounded"
              variant='outlined'
              onChange={handleCurrentPage}/>
          </Stack>
        )}

      </div>
  )
}
