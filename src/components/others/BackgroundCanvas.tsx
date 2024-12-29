import { useEffect, useRef, ReactNode } from 'react'
import { Container } from '@mui/material'

interface BackgroundCanvasProps {
    children: ReactNode
    maxWidth?: string | false
}

interface Star {
    x: number
    y: number
    size: number
    speed: number
    opacity: number
    z: number
}

const BackgroundCanvas = ({ children, maxWidth }: BackgroundCanvasProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const starsRef = useRef<Star[]>([])
    const mousePosition = useRef({ x: 0, y: 0 })
    const nebulaClouds = useRef<Array<{ x: number, y: number, radius: number, color: string, angle: number, speed: number }>>([])
    const hue = useRef(0)
    const animationFrameId = useRef<number>()

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            createNebulaClouds()
            createStars()
        }

        const createStars = () => {
            const stars: Star[] = []
            for (let i = 0; i < 200; i++) {
                stars.push({
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    size: Math.random() * 1.8 + 1.1,
                    speed: Math.random() * 0.2,
                    opacity: Math.random() * 0.7 + 0.3,
                    z: Math.random() * 2 + 1
                })
            }
            starsRef.current = stars
        }

        const createNebulaClouds = () => {
            nebulaClouds.current = Array(5).fill(null).map(() => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 200 + 100,
                color: `hsla(${Math.random() * 360}, 70%, 50%, 0.1)`,
                angle: Math.random() * Math.PI * 2,
                speed: Math.random() * 0.2 + 0.1
            }))
        }

        const drawBackground = () => {
            const time = Date.now() * 0.0005; // Slower animation
            const pulse = Math.sin(time) * 0.15 + 0.85;

            // Deep space background
            const baseGradient = ctx.createRadialGradient(
                canvas.width / 2,
                canvas.height / 2,
                0,
                canvas.width / 2,
                canvas.height / 2,
                canvas.width
            );

            // Deep space colors
            baseGradient.addColorStop(0, '#000000');
            baseGradient.addColorStop(0.3, '#090418');
            baseGradient.addColorStop(0.6, '#0C0521');
            baseGradient.addColorStop(1, '#000000');

            ctx.fillStyle = baseGradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // First nebula layer
            const nebulaGradient1 = ctx.createRadialGradient(
                canvas.width * 0.3,
                canvas.height * 0.4,
                0,
                canvas.width * 0.3,
                canvas.height * 0.4,
                canvas.width * 0.8 * pulse
            );

            nebulaGradient1.addColorStop(0, 'rgba(75, 19, 79, 0.0)');
            nebulaGradient1.addColorStop(0.3, 'rgba(43, 12, 86, 0.05)');
            nebulaGradient1.addColorStop(0.6, 'rgba(29, 46, 99, 0.02)');
            nebulaGradient1.addColorStop(1, 'transparent');

            ctx.fillStyle = nebulaGradient1;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Second nebula layer
            const nebulaGradient2 = ctx.createRadialGradient(
                canvas.width * 0.7,
                canvas.height * 0.6,
                0,
                canvas.width * 0.7,
                canvas.height * 0.6,
                canvas.width * 0.6 * pulse
            );

            nebulaGradient2.addColorStop(0, 'rgba(41, 11, 75, 0.0)');
            nebulaGradient2.addColorStop(0.3, 'rgba(25, 29, 108, 0.03)');
            nebulaGradient2.addColorStop(0.6, 'rgba(12, 15, 77, 0.02)');
            nebulaGradient2.addColorStop(1, 'transparent');

            ctx.fillStyle = nebulaGradient2;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Cosmic dust effect
            const dustGradient = ctx.createRadialGradient(
                canvas.width * 0.5,
                canvas.height * 0.5,
                canvas.width * 0.2,
                canvas.width * 0.5,
                canvas.height * 0.5,
                canvas.width * pulse
            );

            dustGradient.addColorStop(0, 'rgba(32, 38, 57, 0.01)');
            dustGradient.addColorStop(0.4, 'rgba(63, 76, 119, 0.01)');
            dustGradient.addColorStop(0.7, 'rgba(23, 36, 52, 0.01)');
            dustGradient.addColorStop(1, 'transparent');

            ctx.fillStyle = dustGradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        const drawStars = () => {
            const ctx = canvasRef.current?.getContext('2d')
            if (!ctx) return

            starsRef.current.forEach(star => {
                // Move stars slowly from right to left
                star.x -= star.speed * star.z

                // Reset star position when it goes off screen
                if (star.x < 0) {
                    star.x = window.innerWidth
                    star.y = Math.random() * window.innerHeight
                }

                ctx.beginPath()
                ctx.arc(star.x, star.y, star.size / star.z, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
                ctx.fill()
            })
        }

        const drawNebula = (time: number) => {
            nebulaClouds.current.forEach(cloud => {
                // Constant smooth movement
                cloud.angle += cloud.speed * 0.001
                cloud.x += Math.cos(cloud.angle) * 0.2
                cloud.y += Math.sin(cloud.angle) * 0.2

                // Screen wrapping
                if (cloud.x > canvas.width + cloud.radius) cloud.x = -cloud.radius
                if (cloud.x < -cloud.radius) cloud.x = canvas.width + cloud.radius
                if (cloud.y > canvas.height + cloud.radius) cloud.y = -cloud.radius
                if (cloud.y < -cloud.radius) cloud.y = canvas.height + cloud.radius

                const mouseDistance = Math.hypot(
                    mousePosition.current.x - cloud.x,
                    mousePosition.current.y - cloud.y
                )

                // Reduced interaction effect
                const distanceEffect = Math.max(0, 1 - mouseDistance / 1000) * 0.3
                const wobble = 10 + distanceEffect * 10

                // Subtle size variation
                const sizePulse = 1 + Math.sin(time / 4000 + cloud.angle) * 0.08
                const currentRadius = cloud.radius * sizePulse * 0.6

                // Background glow
                const bgGrd = ctx.createRadialGradient(
                    cloud.x,
                    cloud.y,
                    0,
                    cloud.x,
                    cloud.y,
                    currentRadius * 1.5
                )

                const hueShift = (hue.current + Math.sin(time / 3000 + cloud.angle) * 10) % 360
                bgGrd.addColorStop(0, `hsla(${hueShift}, 60%, 40%, 0.03)`)
                bgGrd.addColorStop(1, 'transparent')

                ctx.fillStyle = bgGrd
                ctx.beginPath()
                ctx.arc(cloud.x, cloud.y, currentRadius * 1.5, 0, Math.PI * 2)
                ctx.fill()

                // Main nebula layer
                const fgGrd = ctx.createRadialGradient(
                    cloud.x + Math.sin(time / 3000) * wobble,
                    cloud.y + Math.cos(time / 3000) * wobble,
                    0,
                    cloud.x,
                    cloud.y,
                    currentRadius
                )

                fgGrd.addColorStop(0, `hsla(${hueShift}, 70%, 45%, 0.06)`)
                fgGrd.addColorStop(0.5, `hsla(${hueShift}, 60%, 40%, 0.04)`)
                fgGrd.addColorStop(1, 'transparent')

                ctx.fillStyle = fgGrd
                ctx.beginPath()
                ctx.arc(cloud.x, cloud.y, currentRadius, 0, Math.PI * 2)
                ctx.fill()
            })

            hue.current = (hue.current + 0.03) % 360
        }

        const animate = (time: number) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            drawBackground()
            drawStars()
            drawNebula(time)
            animationFrameId.current = requestAnimationFrame(animate)

        }

        const handleMouseMove = (e: MouseEvent) => {
            mousePosition.current = {
                x: e.clientX,
                y: e.clientY
            }
        }

        window.addEventListener('resize', resizeCanvas)
        window.addEventListener('mousemove', handleMouseMove)
        resizeCanvas()
        animate(0)

        return () => {
            window.removeEventListener('resize', resizeCanvas)
            window.removeEventListener('mousemove', handleMouseMove)
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current)
            }
        }
    }, [])

    return (
        <>
            <canvas
                ref={canvasRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1
                }}
            />
            <Container maxWidth={maxWidth as any}>
                {children}
            </Container>
        </>
    )
}

export default BackgroundCanvas