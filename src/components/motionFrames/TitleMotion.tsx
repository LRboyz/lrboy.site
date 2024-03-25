'use client'
import { LazyMotion, domAnimation, m } from 'framer-motion'

export default function MotionTitle({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        id='jyz-post-list'
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        {children}
      </m.div>
    </LazyMotion>
  )
}
