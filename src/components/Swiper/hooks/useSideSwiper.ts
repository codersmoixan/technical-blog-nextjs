import { useMemo, useRef, useState, useEffect } from "react";
import throttle from "lodash/throttle";
import useMount from "hooks/effect/useMount";
import type { EmptyObject } from "@/src/tb.types";

interface UseSideSwiperProps {
  sideCount: number;
  sideSize?: number;
}

const useSideSwiper = ({ sideCount, sideSize: propSideSize }: UseSideSwiperProps) => {
  const [step, setStep] = useState(0)
  const [sideRect, setSideRect] = useState<EmptyObject>({})
  const [swiperRect, setSwiperRect] = useState<EmptyObject>({})
  const [containerRect, setContainerRect] = useState<EmptyObject>({})
  const [prevDisabled, setPrevDisabled] = useState(true)
  const [nextDisabled, setNextDisabled] = useState(false)
  const [showTrigger, setShowTrigger] = useState(true)

  const sideRef = useRef(null)
  const swiperRef = useRef(null)
  const containerRef = useRef(null)

  const { containerSize, sideSize } = useMemo(() => {
    return ({
      swiperSize: swiperRect.width ?? 0,
      containerSize: containerRect.width ?? 0,
      sideSize: propSideSize ?? sideRect.width,
    })
  }, [swiperRect, containerRect, sideRect, propSideSize])

  useMount(() => windowResize())

  useEffect(() => {
    window.addEventListener('resize', throttle(windowResize, 500))

    return () => window.removeEventListener('resize', windowResize)
  }, [])

  useEffect(() => {
    if (sideCount * sideRect.width <= containerRect.width) {
      setShowTrigger(false);
    }
  }, [sideCount, sideRect, containerRect]);

  function windowResize() {
    setSideRect(() => (sideRef.current as any)?.getBoundingClientRect() ?? {})
    setSwiperRect(() => (swiperRef.current as any)?.getBoundingClientRect() ?? {})
    setContainerRect(() => (containerRef.current as any)?.getBoundingClientRect() ?? {})
  }

  const scroll = (space: number) => {
    const swiperTarget = swiperRef.current as any

    if (!swiperTarget) return

    swiperTarget.style.transform = `translateX(${space}px)`
  }

  const onPrev = () => {
    let count = step
    count --
    const space = count * sideSize

    setStep(count)
    setNextDisabled(false)
    setPrevDisabled(count <= 0)

    scroll(-space)
  }

  const onNext = () => {
    let count = step
    count ++
    const space = count * sideSize

    const maxOffsetX = (sideCount * sideSize - (space + containerSize)) < 0
    setNextDisabled(maxOffsetX)
    setPrevDisabled(false)
    setStep(count)

    scroll(-space)
  }

  return {
    sideRect,
    swiperRect,
    containerRect,
    showTrigger,
    sideRef,
    swiperRef,
    containerRef,
    prevDisabled,
    nextDisabled,
    onPrev,
    onNext,
  }
}

export default useSideSwiper
