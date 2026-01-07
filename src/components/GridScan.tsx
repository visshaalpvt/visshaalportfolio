import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './GridScan.css';

interface GridScanProps {
    sensitivity?: number;
    lineThickness?: number;
    linesColor?: string;
    gridScale?: number;
    scanColor?: string;
    scanOpacity?: number;
    enablePost?: boolean;
    bloomIntensity?: number;
    chromaticAberration?: number;
    noiseIntensity?: number;
    className?: string;
    style?: React.CSSProperties;
}

export default function GridScan({
    lineThickness = 1,
    linesColor = '#392e4e',
    gridScale = 0.1,
    scanColor = '#FF9FFC',
    scanOpacity = 0.4,
    noiseIntensity = 0.01,
    className,
    style
}: GridScanProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number>();

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

        const linesColorVec = new THREE.Color(linesColor);
        const scanColorVec = new THREE.Color(scanColor);

        const fragmentShader = `
      precision highp float;
      uniform float iTime;
      uniform vec2 iResolution;
      uniform vec2 uMouse;
      uniform float uLineThickness;
      uniform vec3 uLinesColor;
      uniform vec3 uScanColor;
      uniform float uGridScale;
      uniform float uScanOpacity;
      uniform float uNoise;
      varying vec2 vUv;

      void main() {
        vec2 uv = vUv;
        vec2 p = (uv * 2.0 - 1.0) * vec2(iResolution.x / iResolution.y, 1.0);
        
        // Create 3D perspective grid
        vec3 ro = vec3(0.0, 0.3, -1.0);
        vec3 rd = normalize(vec3(p, 1.5));
        
        // Mouse tilt
        float tiltX = uMouse.x * 0.15;
        float tiltY = uMouse.y * 0.1;
        
        float cT = cos(tiltY);
        float sT = sin(tiltY);
        rd.yz = mat2(cT, -sT, sT, cT) * rd.yz;
        
        float cY = cos(tiltX);
        float sY = sin(tiltX);
        rd.xz = mat2(cY, -sY, sY, cY) * rd.xz;
        
        // Ground plane intersection
        float t = -ro.y / rd.y;
        vec3 hit = ro + rd * t;
        
        // Grid
        vec2 gridUV = hit.xz / uGridScale;
        float lineWidth = uLineThickness * 0.02;
        
        float fx = abs(fract(gridUV.x) - 0.5);
        float fy = abs(fract(gridUV.y) - 0.5);
        
        float lineX = 1.0 - smoothstep(lineWidth, lineWidth + 0.01, fx);
        float lineY = 1.0 - smoothstep(lineWidth, lineWidth + 0.01, fy);
        float grid = max(lineX, lineY);
        
        // Distance fade
        float dist = length(hit - ro);
        float fade = exp(-dist * 0.3);
        grid *= fade;
        
        // Scanning line effect
        float scanSpeed = 0.5;
        float scanPos = fract(iTime * scanSpeed);
        float scanZ = scanPos * 10.0 - 5.0;
        float scanDist = abs(hit.z - scanZ);
        float scan = exp(-scanDist * scanDist * 2.0);
        
        // Colors
        vec3 gridCol = uLinesColor * grid;
        vec3 scanCol = uScanColor * scan * uScanOpacity;
        
        vec3 color = gridCol + scanCol;
        
        // Noise
        float noise = fract(sin(dot(gl_FragCoord.xy + iTime, vec2(12.9898, 78.233))) * 43758.5453);
        color += (noise - 0.5) * uNoise;
        
        // Alpha
        float alpha = max(grid, scan * uScanOpacity) * (t > 0.0 ? 1.0 : 0.0);
        alpha = clamp(alpha, 0.0, 1.0);
        
        gl_FragColor = vec4(color, alpha);
      }
    `;

        const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            transparent: true,
            uniforms: {
                iTime: { value: 0 },
                iResolution: { value: new THREE.Vector2(container.clientWidth, container.clientHeight) },
                uMouse: { value: new THREE.Vector2() },
                uLineThickness: { value: lineThickness },
                uLinesColor: { value: linesColorVec },
                uScanColor: { value: scanColorVec },
                uGridScale: { value: gridScale },
                uScanOpacity: { value: scanOpacity },
                uNoise: { value: noiseIntensity },
            },
        });

        const geometry = new THREE.PlaneGeometry(2, 2);
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        const resize = () => {
            renderer.setSize(container.clientWidth, container.clientHeight);
            material.uniforms.iResolution.value.set(container.clientWidth, container.clientHeight);
        };

        const onMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
            material.uniforms.uMouse.value.set(x, y);
        };

        window.addEventListener('resize', resize);
        container.addEventListener('mousemove', onMouseMove);

        const animate = () => {
            material.uniforms.iTime.value = performance.now() / 1000;
            renderer.render(scene, camera);
            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            container.removeEventListener('mousemove', onMouseMove);
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
            container.removeChild(renderer.domElement);
            renderer.dispose();
            geometry.dispose();
            material.dispose();
        };
    }, [lineThickness, linesColor, scanColor, scanOpacity, gridScale, noiseIntensity]);

    return (
        <div
            ref={containerRef}
            className={`gridscan${className ? ` ${className}` : ''}`}
            style={style}
        />
    );
}
