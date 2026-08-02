import { useEffect } from 'react';

import MapButton from '@/pages/HowToCome/components/Map/MapButton';

import naverMapImage from '@/assets/images/naver_map.webp';
import kakaoMapImage from '@/assets/images/kakaomap_basic.png';
import tMapImage from '@/assets/images/t_map.svg';

const WEDDING_HALL_NAME = '건설회관';
const WEDDING_HALL_ADDRESS = '서울 강남구 언주로 711 건설회관';

// Fallback coordinates (won't be used if geocoding succeeds)
const LATITUDE = 37.5173566;
const LONGITUDE = 127.0341427;

const Map = () => {
  useEffect(() => {
    const initMap = () => {
      const mapContainer = document.getElementById('map') as HTMLElement | null;

      if (!mapContainer) {
        console.error('지도 컨테이너를 찾을 수 없습니다.');
        return;
      }

      const naver = (window as any).naver;

      if (!naver?.maps) {
        console.error('네이버 지도 SDK가 로드되지 않았습니다.');
        return;
      }

      const naverMaps = naver.maps;

      // 초기 맵은 기본 좌표로 만들고, 이후 주소로 지오코딩해서 마커를 이동합니다.
      const initialPosition = new naverMaps.LatLng(LATITUDE, LONGITUDE);

      const map = new naverMaps.Map(mapContainer, {
        center: initialPosition,
        zoom: 16,
      });

      let marker: any = new naverMaps.Marker({
        position: initialPosition,
        map,
      });

      const placeMarker = (lat: number, lng: number) => {
        const position = new naverMaps.LatLng(lat, lng);
        if (marker) {
          marker.setPosition(position);
        } else {
          marker = new naverMaps.Marker({ position, map });
        }
        map.setCenter(position);
      };

      // 네이버 지도 Service의 geocode를 이용해 주소 -> 좌표 변환
      if (naverMaps.Service && typeof naverMaps.Service.geocode === 'function') {
        try {
          naverMaps.Service.geocode({ query: WEDDING_HALL_ADDRESS }, (status: any, response: any) => {
            if (status !== naverMaps.Service.Status.OK) {
              console.warn('지오코딩에 실패했습니다. 기본 좌표를 사용합니다. status=', status);
              placeMarker(LATITUDE, LONGITUDE);
              return;
            }

            const result = response?.result;
            const items = result?.items;

            if (!items || items.length === 0) {
              console.warn('지오코딩 결과가 없습니다. 기본 좌표를 사용합니다.');
              placeMarker(LATITUDE, LONGITUDE);
              return;
            }

            // 보통 item.point.x = longitude, item.point.y = latitude
            const item = items[0];
            const point = item.point || {};
            const lat = parseFloat(point.y ?? point.lat ?? String(LATITUDE));
            const lng = parseFloat(point.x ?? point.lng ?? String(LONGITUDE));

            if (Number.isNaN(lat) || Number.isNaN(lng)) {
              console.warn('지오코딩으로 얻은 좌표가 유효하지 않습니다. 기본 좌표를 사용합니다.');
              placeMarker(LATITUDE, LONGITUDE);
              return;
            }

            placeMarker(lat, lng);
          });
        } catch (e) {
          console.error('지오코딩 수행 중 오류가 발생했습니다.', e);
          placeMarker(LATITUDE, LONGITUDE);
        }
      } else {
        // Service.geocode가 없으면 기본 좌표로 마커 표시
        placeMarker(LATITUDE, LONGITUDE);
      }
    };

    initMap();
  }, []);

  const mapStyle = {
    width: '100%',
    height: '300px',
  };

  const openWithNaverMap = () => {
    window.location.href = `https://map.naver.com/p/search/${encodeURIComponent(WEDDING_HALL_ADDRESS)}`;
  };

  const openWithKakaoMap = () => {
    window.location.href = `https://map.kakao.com/link/search/${encodeURIComponent(WEDDING_HALL_ADDRESS)}`;
  };

  const openWithTMap = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const isAndroid = /Android/i.test(navigator.userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isMobile) {
      alert('티맵은 모바일 기기에서만 이용 가능합니다.');
      return;
    }

    const tmapUrl = `tmap://route?rGoName=${encodeURIComponent(WEDDING_HALL_NAME)}&rGoX=${LONGITUDE}&rGoY=${LATITUDE}`;

    const fallbackUrl = isAndroid
      ? 'https://play.google.com/store/apps/details?id=com.skt.tmap.ku'
      : isIOS
        ? 'https://apps.apple.com/kr/app/t-map-%ED%8B%B0%EB%A7%B5/id431589174'
        : '';

    let isAppOpened = false;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        isAppOpened = true;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    window.location.href = tmapUrl;

    setTimeout(() => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);

      if (!isAppOpened && fallbackUrl) {
        window.location.href = fallbackUrl;
      }
    }, 1500);
  };

  return (
    <div className='mb-4'>
      <div id='map' style={mapStyle}></div>

      <div className='flex px-2 py-1 bg-gray-50'>
        <MapButton onClick={openWithNaverMap} icon={naverMapImage}>
          네이버 지도
        </MapButton>

        <MapButton onClick={openWithKakaoMap} icon={kakaoMapImage}>
          카카오 맵
        </MapButton>

        <MapButton onClick={openWithTMap} icon={tMapImage}>
          티맵
        </MapButton>
      </div>
    </div>
  );
};

export default Map;
