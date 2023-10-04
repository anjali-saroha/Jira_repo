import Button from '@mui/material/Button';

const CustomButton = ({title,onClick}) => {
 return(
    <Button variant="outlined" onClick={onClick}>{title}</Button>
 )
}

export default CustomButton