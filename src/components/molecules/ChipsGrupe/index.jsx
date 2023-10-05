import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


export default function ChipsGrupe({list}){
    return(
        <Stack direction="row" spacing={1}>
        {list && list.map((item , index)=><Chip key={index} label={item } />)}
      </Stack>
    )
}