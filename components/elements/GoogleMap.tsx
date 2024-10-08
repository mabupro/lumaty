'use client'
import React, { useEffect, useRef, useState } from 'react'

// 初期化用の定数
const INITIALIZE_LAT = 35.36019403471916 // 緯度
const INITIALIZE_LNG = 136.61910030849924 // 経度
const INITIALIZE_ZOOM = 16

const INITIALIZE_MAP_WIDTH = '100%'
const INITIALIZE_MAP_HEIGHT = '20rem'

const maturiLocations = [{ name: '本町通り', lat: 35.36019403471916, lng: 136.61910030849924 }]

const parkingLocations = [
    { name: '大垣駅南駐車場', lat: 35.36622775364849, lng: 136.61709462115462 },
    { name: 'パーキング紅葉園 大垣駅前第2', lat: 35.36598787022553, lng: 136.6181685364711 },
    { name: '名鉄協商パーキング 大垣駅前第5', lat: 35.365615349211396, lng: 136.6170246144843 },
    { name: '大垣駅前パーキング', lat: 35.36643717412211, lng: 136.61584322724826 },
    { name: '大垣市東外側駐車場', lat: 35.364125100576636, lng: 136.61527667389456 },
    { name: 'コインパーキングくるわまち', lat: 35.36284225482409, lng: 136.61831626784561 },
    { name: '大垣市営 清水駐車場', lat: 35.36246969686392, lng: 136.62097183130217 }
]

const restroomLocations = [
    { name: '駅前トイレ', lat: 35.36658321267335, lng: 136.61709642218432 },
    { name: '新大橋手洗場', lat: 35.3633659787647, lng: 136.61759307450723 },
    { name: '貴船橋手洗場', lat: 35.363270355947776, lng: 136.61895784441057 },
    { name: '高砂手洗場', lat: 35.363668104001405, lng: 136.61500297487277 },
    { name: '大垣城本丸前 厠', lat: 35.361934901426245, lng: 136.61656605181648 },
    { name: '大垣公園トイレ', lat: 35.361738310867125, lng: 136.61509798891 }
]

const trashcanLocations = [
    { name: 'ゴミ箱1', lat: 35.36398830690888, lng: 136.6173177040648 },
    { name: 'ゴミ箱2', lat: 35.363321380897396, lng: 136.61714882330375 },
    { name: 'ゴミ箱3', lat: 35.36251822176209, lng: 136.61714747904676 },
    { name: 'ゴミ箱4', lat: 35.36242308556901, lng: 136.6172396171546 },
    { name: 'ゴミ箱5', lat: 35.36187953307439, lng: 136.61734237643344 },
    { name: 'ゴミ箱6', lat: 35.3612625579722, lng: 136.6172905622724 }
]

const GoogleMap: React.FC = () => {
    const mapRef = useRef<HTMLDivElement>(null)
    const [map, setMap] = useState<google.maps.Map | null>(null)
    const [markers, setMarkers] = useState<google.maps.Marker[]>([])
    const [activeButton, setActiveButton] = useState<string>('') // 現在アクティブなボタンの状態を追跡

    useEffect(() => {
        if (!mapRef.current) return

        // 地図を初期化
        const initializedMap = new google.maps.Map(mapRef.current, {
            center: { lat: INITIALIZE_LAT, lng: INITIALIZE_LNG },
            zoom: INITIALIZE_ZOOM,
        })

        setMap(initializedMap)

        // 初期マーカーを追加
        new google.maps.Marker({
            position: { lat: INITIALIZE_LAT, lng: INITIALIZE_LNG },
            map: initializedMap,
            title: 'Initial Marker',
        })
    }, [])

    const clearMarkers = () => {
        markers.forEach(marker => marker.setMap(null));
        setMarkers([]);
    };

    const addMarkers = (locations: { name: string, lat: number, lng: number }[], buttonName: string) => {
        if (map) {
            clearMarkers();
            const newMarkers = locations.map(location => new google.maps.Marker({
                position: { lat: location.lat, lng: location.lng },
                map,
                title: location.name,
            }));
            setMarkers(newMarkers);
            if (locations.length > 0) {
                map.setCenter({ lat: locations[0].lat, lng: locations[0].lng });
            }
            setActiveButton(buttonName); // ボタンをアクティブ状態にする
        }
    };

    return (
        <div>
            <div ref={mapRef} style={{ width: INITIALIZE_MAP_WIDTH, height: INITIALIZE_MAP_HEIGHT }} />
            <div className="flex gap-3 mt-4">
                <button
                    className={`mx-auto w-20 h-20 rounded-md shadow-sm ${activeButton === '会場' ? 'bg-blue-500 text-white' : 'bg-slate-300'}`}
                    onClick={() => addMarkers(maturiLocations, '会場')}
                >
                    会場
                </button>
                <button
                    className={`mx-auto w-20 h-20 rounded-md shadow-sm ${activeButton === '駐車場' ? 'bg-blue-500 text-white' : 'bg-slate-300'}`}
                    onClick={() => addMarkers(parkingLocations, '駐車場')}
                >
                    駐車場
                </button>
                <button
                    className={`mx-auto w-20 h-20 rounded-md shadow-sm ${activeButton === 'トイレ' ? 'bg-blue-500 text-white' : 'bg-slate-300'}`}
                    onClick={() => addMarkers(restroomLocations, 'トイレ')}
                >
                    トイレ
                </button>
                <button
                    className={`mx-auto w-20 h-20 rounded-md shadow-sm ${activeButton === 'ゴミ箱' ? 'bg-blue-500 text-white' : 'bg-slate-300'}`}
                    onClick={() => addMarkers(trashcanLocations, 'ゴミ箱')}
                >
                    ゴミ箱
                </button>
            </div>
        </div>
    )
}

export default GoogleMap
