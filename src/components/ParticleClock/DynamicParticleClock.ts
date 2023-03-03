import dynamic from "next/dynamic";

const DynamicParticleClock = dynamic(() => import('components/ParticleClock'), { ssr: false })

export default DynamicParticleClock
