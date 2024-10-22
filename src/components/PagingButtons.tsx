import { Button } from "@chakra-ui/react";
import { useState } from "react";

function PagingButton({ handleClick }: { handleClick: (page: number) => void }) {
  const [page, setPage] = useState(1);

  const onClick = (mode: 'prev' | 'next')=> {
    if(mode === 'next') {
        handleClick(page + 1)
        setPage((prev) => prev +1)
    } else if(mode === 'prev' && page > 1) {
        handleClick(page - 1)
        setPage(prev => prev -1)
    }
  }

  return (
    <div className="flex items-center justify-center w-full gap-4">
      <Button
        onClick={()=>onClick('prev')}
        width={150}
        variant="outline"
        disabled={page <= 1}
      >
        Previous
      </Button>
      <span>Page {page}</span>
      <Button
        onClick={() => onClick('next')}
        width={150}
        variant="outline"
      >
        Next
      </Button>
    </div>
  );
}

export default PagingButton;
