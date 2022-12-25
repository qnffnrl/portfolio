const { kakao } = window;

export default function KakaoMapScript() {
        let mapContainer = document.getElementById('myMap'),
        mapOption = {
            center: new kakao.maps.LatLng(35.1065246, 126.8955428), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };

        let map = new kakao.maps.Map(mapContainer, mapOption); // 지도 생성
        let markerPosition = new kakao.maps.LatLng(35.1065246, 126.8955428);
        let marker = new kakao.maps.Marker({
            position: markerPosition
        });

        marker.setMap(map);
        marker.setDraggable(true);

}