import dynamic  from 'next/dynamic'

const DynamicShareEditor = dynamic(() => import('containers/Editor'), { ssr: false })

export default DynamicShareEditor
