import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface SpringBox {
	children: ReactNode
	delay?: number
}

const springBoxOptions = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    default: {
      duration: 0.3,
      ease: [0, 0.71, 0.2, 1.01]
    },
    scale: {
      type: 'spring',
      damping: 10,
      stiffness: 1000,
      restDelta: 0.001
    }
  }
}

function SpringBox({ delay = 0.3, children }: SpringBox) {
	return (
		<motion.div
			initial={springBoxOptions.initial}
			animate={springBoxOptions.animate}
			transition={{
				...springBoxOptions.transition,
        delay
			}}
		>
			{children}
		</motion.div>
	)
}

export default SpringBox
