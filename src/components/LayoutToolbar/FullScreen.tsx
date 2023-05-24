import Buttons from "components/Buttons";
import Box from "@mui/material/Box";
import useFullScreen from "components/LayoutToolbar/hooks/useFullScreen";

function FullScreen() {
  const { isFullScreen, toggleFullScreen } = useFullScreen()

  return (
    <Box p={2}>
      <Buttons variant="outlined" fullWidth onClick={toggleFullScreen}>
        {isFullScreen ? '关闭全屏' : '开启全屏'}
      </Buttons>
    </Box>
  )
}

export default FullScreen
