import styled from 'styled-components'
import { Link } from '@mui/material'

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

const StyledYellowLink = styled(Link)`
cursor: pointer;
transition: color 250ms;
:hover {
  color: #fad037;
}
`

export { StyledRedLink, StyledTealLink, StyledYellowLink };