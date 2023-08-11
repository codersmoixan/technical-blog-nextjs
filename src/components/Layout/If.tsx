/**
 * @author zhengji.su
 * @description If
 */

interface IfProps {
  factor: boolean
  children: JSX.Element
}

function If({ factor, children }: IfProps) {

  return factor ? children : null
}

export default If
