import type { EmptyObject } from "@/src/tb.types"

const setupBroadcastChannel = (): any => {
  let channel = null

  if (typeof window !== 'undefined' && typeof BroadcastChannel !== 'undefined') {
    channel = new BroadcastChannel('channel')
  }

  return channel
}

const channel = setupBroadcastChannel()

const useBroadcastChannel = () => {
  const sendBroadcast = (name: string, options: EmptyObject) => {
    channel.postMessage({
      name,
      options
    })
  }

  const listenBroadcast = (callback: (options: any) => void) => {
    function changeChannel(op: EmptyObject) {
      if (callback) {
        callback(op.data)
      }
    }
    channel.addEventListener('message', changeChannel)

    return () => channel.removeEventListener('message', changeChannel)
  }

  return {
    sendBroadcast,
    listenBroadcast
  }
}

export default useBroadcastChannel
