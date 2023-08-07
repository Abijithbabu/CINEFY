import { Box } from '@mui/material';
import { styled } from '@mui/styles'
import React from 'react'
const Row = styled(Box)({
    // content: "",
  display: 'table',
  clear: 'both',
});
const Coloun = styled(Box)({
    float: "left",
    width: "50%",
    padding: "10px",
    height: "300px",
})
export default function HomeBan() {
  return (
    <Row>
        <Coloun>
        asfas
        </Coloun>
        <Coloun>
        adfsada
        </Coloun>
    </Row>
  )
}
