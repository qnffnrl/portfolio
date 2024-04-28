const { kakao } = window;

export default function KakaoMapScript() {
        let mapContainer = document.getElementById('myMap'),
        mapOption = {
            center: new kakao.maps.LatLng(37.338569, 127.101895), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };

        let map = new kakao.maps.Map(mapContainer, mapOption); // 지도 생성
        let markerPosition = new kakao.maps.LatLng(37.338569, 127.101895);
        let marker = new kakao.maps.Marker({
            position: markerPosition
        });

        marker.setMap(map);
        marker.setDraggable(true);

}