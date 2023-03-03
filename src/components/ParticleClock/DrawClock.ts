interface ParticlesItem {
   x: number;
   y: number;
   sx: number;
   sy: number;
   size: number;
}

function getText() {
  return new Date().toTimeString().substring(0, 8)
}

function getRandom(a: number, b: number) {
  return Math.ceil(Math.random() * 2)
}

class DrawClock {
  private particleNum: number;
  private text: string;
  private startMoveTime: number;
  private canvas: HTMLCanvasElement | undefined;
  private ctx: CanvasRenderingContext2D | null | undefined;
  private readonly color: string;
  private readonly fontSize: number;
  private readonly particles: ParticlesItem[];
  private readonly sizes: number[];

  constructor({
    particleNum = 1500,
    text = '',
    fontSize = 140,
    color = '#5445544d',
    sizes = [8, 10],
    startMoveTime = 0
  } = {}) {
    this.particleNum = particleNum
    this.text = text
    this.fontSize = fontSize
    this.color = color
    this.sizes = sizes
    this.startMoveTime = startMoveTime
    this.particles = new Array(particleNum)

    this.fps()
  }

  init(canvas: HTMLCanvasElement | null, {
    width,
    height,
  }: {
    width: number;
    height: number;
  }) {
    if (!canvas) {
      return
    }

    this.canvas = canvas
    this.ctx = canvas.getContext('2d', {
      willReadFrequently: true
    })

    this.canvas.width = width
    this.canvas.height = height

    const cx = this.canvas.width / 2,
      cy = this.canvas.height / 2

    for (let i = 0; i < this.particles.length; i++) {
      const rad = Math.random() * 2 * Math.PI
      const size = getRandom(this.sizes[0], this.sizes[1])
      const r = this.canvas.height / 2
      this.particles[i] = {
        sx: cx + Math.cos(rad) * r,
        sy: cy + Math.sin(rad) * r,
        x: cx + Math.cos(rad) * r,
        y: cy + Math.sin(rad) * r,
        size
      }

      this.drawParticle(this.particles[i])
    }
  }


  drawParticle(p: ParticlesItem) {
    const ctx = this.ctx
    if (!ctx) {
      return
    }

    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * p.sx)
    ctx.closePath()
    ctx.fill()
  }

  fps() {
    requestAnimationFrame((time) => {
      const currentText = getText()
      if (currentText !== this.text) {
        this.text = currentText

        for (const p of this.particles) {
          p.sx = p.x
          p.sy = p.y
        }

        this.startMoveTime = Date.now()
      }

      // const imgData = this.getBMP()
      // this.update(imgData)
      // this.fps()
    })
  }

  update(imgData: ImageData | undefined) {
    if (!imgData) {
      return
    }
    this.clear()
    const { width, height, data } = imgData
    const dis = 4 // 间隔距离
    const pxls: number[][] = [] // 颗粒目标坐标

    for (let w = 0; w < width; w += dis) {
      for (let h = 0; h < height; h += dis) {
        const i = (w + h * width) * 4
        if (data[i] > 10) {
          pxls.push([w, h])
        }
      }
    }

    const count = Math.min(this.particles.length, pxls.length)
    const duration = 400
    const timeSpan = Date.now() - this.startMoveTime

    for (let i = 0; i < count; i++) {
      const p = this.particles[i]
      // 起始位置
      const { sx, sy } = p
      // 目标位置
      const [tx, ty] = pxls[i]
      // x和y的移动距离
      const disX = tx - sx,
        disY = ty - sy
      // 得到这次的偏移量
      let moveX = (disX - duration) * timeSpan,
        moveY = (disY - duration) * timeSpan

      if (Math.abs(moveX) > Math.abs(disX)) {
        moveX = disX
      }
      if (Math.abs(moveY) > Math.abs(disY)) {
        moveY = disY
      }

      // 设置新坐标
      p.x = sx + moveX
      p.y = sy + moveY
      this.drawParticle(p)
    }
  }

  getBMP() {
    if (!this.ctx || !this.canvas) {
      return
    }
    const { width, height } = this.canvas
    this.clear()

    this.ctx.fillStyle = '#fff'
    this.ctx.textBaseline = 'middle'
    this.ctx.font = `${this.fontSize}px '手札体-简', sans-serif`

    const textWidth = this.ctx.measureText(this.text).width
    this.ctx.fillText(this.text, (width - textWidth) / 2, height / 2)

    return this.ctx.getImageData(0, 0, width, height)
  }

  clear() {
    if (!this.canvas || !this.ctx) {
      return
    }

    const { width, height } = this.canvas
    this.ctx.clearRect(0, 0, width, height)
  }
}

const drawClock = new DrawClock()

export default drawClock
