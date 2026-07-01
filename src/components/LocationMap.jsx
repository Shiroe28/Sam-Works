import React, { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const IMUS_COORDS = [14.4297, 120.9367]

const LocationMap = () => {
  const mapRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    const map = L.map(containerRef.current, {
      center: IMUS_COORDS,
      zoom: 13,
      scrollWheelZoom: false,
      zoomControl: true,
    })

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map)

    L.marker(IMUS_COORDS).addTo(map).bindPopup('Imus, Cavite, Philippines')

    mapRef.current = map

    return () => {
      map.remove()
      mapRef.current = null
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full h-48 sm:h-56 rounded-2xl overflow-hidden border border-border"
      aria-label="Map showing Imus, Cavite"
    />
  )
}

export default LocationMap
