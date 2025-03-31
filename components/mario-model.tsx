"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export default function MarioModel() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x0066b3) // Mario blue background

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      50,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    )
    camera.position.set(0, 1.5, 4)

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.outputEncoding = THREE.sRGBEncoding
    renderer.shadowMap.enabled = true
    containerRef.current.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(5, 10, 7.5)
    directionalLight.castShadow = true
    scene.add(directionalLight)

    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.set(-5, 5, -5)
    scene.add(pointLight)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.enableZoom = false
    controls.autoRotate = true
    controls.autoRotateSpeed = 1
    controls.maxPolarAngle = Math.PI / 1.5
    controls.minPolarAngle = Math.PI / 3

    // Load Mario model
    const loader = new GLTFLoader()
    let mario: THREE.Group

    loader.load(
      "/models/mario.glb",
      (gltf) => {
        mario = gltf.scene
        mario.scale.set(1.5, 1.5, 1.5)
        mario.position.y = -1.5

        // Apply shadows to all meshes
        mario.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true
            child.receiveShadow = true
          }
        })

        scene.add(mario)
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded")
      },
      (error) => {
        console.error("An error happened loading the model:", error)

        // Fallback: Create a simple Mario-colored cube if model fails to load
        const geometry = new THREE.BoxGeometry(1, 2, 1)
        const materials = [
          new THREE.MeshStandardMaterial({ color: 0xcc0000 }), // red
          new THREE.MeshStandardMaterial({ color: 0xcc0000 }), // red
          new THREE.MeshStandardMaterial({ color: 0xcc0000 }), // red
          new THREE.MeshStandardMaterial({ color: 0xcc0000 }), // red
          new THREE.MeshStandardMaterial({ color: 0x0066b3 }), // blue
          new THREE.MeshStandardMaterial({ color: 0xcc0000 }), // red
        ]
        const cube = new THREE.Mesh(geometry, materials)
        cube.position.y = -0.5
        scene.add(cube)
      },
    )

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return

      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return <div ref={containerRef} className="w-full h-full rounded-lg overflow-hidden" />
}

