import Box, { BoxProps } from "@mui/material/Box";

export interface FullTriangleProps extends BoxProps {}

function FullTriangle(props: FullTriangleProps) {
  return (
    <Box {...props}>
      <svg width="100%" height="100%" viewBox="0 0 1440 64" preserveAspectRatio="none">
        <path d="M1440 0H0L1440 64V0Z" fill="currentColor"></path>
      </svg>
    </Box>
  )
}

export default FullTriangle
