import {useState} from "react";

const useFullScreen = () => {
  const [isFullScreen, setIsFullScreen] = useState(false)

  const openFullScreen = () => {
    const dom = document.documentElement
    if (dom.requestFullscreen) {
      setIsFullScreen(true)
      return dom.requestFullscreen()
    }
  }

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen().then(() => {
        setIsFullScreen(false)
      })
    }
  }

  const toggleFullScreen = () => isFullScreen ? exitFullscreen() : openFullScreen()

  return {
    isFullScreen,
    openFullScreen,
    exitFullscreen,
    toggleFullScreen
  }
}

export default useFullScreen
