'use client'
import React, { useEffect, useRef, useState } from 'react'

// 初期化用の定数
const INITIALIZE_LAT = 35.569468 // 緯度
const INITIALIZE_LNG = 137.2243978 // 経度
const INITIALIZE_ZOOM = 16

const INITIALIZE_MAP_WIDTH = '100%'
const INITIALIZE_MAP_HEIGHT = '20rem'

const GoogleMap: React.FC = () => {
    const mapRef = useRef<HTMLDivElement>(null)
    const [map, setMap] = useState<google.maps.Map | null>(null)

    useEffect(() => {
        if (!mapRef.current) return

        // 地図を初期化
        const initializedMap = new google.maps.Map(mapRef.current, {
            center: { lat: INITIALIZE_LAT, lng: INITIALIZE_LNG },
            zoom: INITIALIZE_ZOOM,
        })

        setMap(initializedMap)

        // マーカーを追加
        new google.maps.Marker({
            position: { lat: INITIALIZE_LAT, lng: INITIALIZE_LNG },
            map: initializedMap,
            title: 'Initial Marker',
        })

    }, [])

    return (
        <div>
            <div ref={mapRef} style={{ width: INITIALIZE_MAP_WIDTH, height: INITIALIZE_MAP_HEIGHT }} />
        </div>
    )
}

export default GoogleMap
