import { Button } from '@chakra-ui/react'

interface Props {
    display: number;
    handlePrevious: () => void;
    handleNext: () => void;
}


function PagingButton({ display, handlePrevious, handleNext }: Props) {

    return <div className='w-full flex justify-center gap-4'>
        <Button onClick={handlePrevious} width={300} variant='outline'>
            Previous
        </Button>
        Page {display}

        <Button onClick={handleNext} width={300} variant='outline'>
            Next
        </Button>
    </div>

}

export default PagingButton