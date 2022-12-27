import styled from 'styled-components'
import { Link, Button } from '@mui/material'

const StyledRedLink = styled(Link)`
cursor: pointer;
transition: color 250ms;
:hover {
  color: #f25641;
}
`
const StyledTealLink = styled(Link)`
cursor: pointer;
transition: color 250ms;
:hover {
  color: #72dbd1;
}
`

const StyledTealButton = styled(Button)`
width: 200px;
color: #000000;
background-color: #72dbd1;
:hover {
  background-color: #4e938d;
}
`;

const StyledYellowLink = styled(Link)`
cursor: pointer;
transition: color 250ms;
:hover {
  color: #fad037;
}
`

const StyledYellowButton = styled(Button)`
width: 150px;
color: #fff;
background-color: #fad037;
&:hover {
  background-color: #4e938d;
}
`;
export { StyledRedLink, StyledTealLink, StyledYellowLink, StyledTealButton, StyledYellowButton};