import { createBrowserRouter } from "react-router";
import App from "./App";
import LocationPage from "./pages/Dashboard/LocationPage";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/Dashboard/ProjectPage";

export const router = createBrowserRouter([
  {
    //전체 레이아웃을 잡는 페이지
    Component: App,
    children: [
      {
        //기본 랜딩 페이지
        index: true,
        Component: HomePage,
      },
      {
        //Todo: 권한 여부 확인하기
        //dashboard prefix
        path: "/dashboard",
        children: [
          {
            //지도 및 현장 리스트 선택 페이지
            //locationId는 선택한 지역 아이디 옵셔널
            path: ":locationId?",
            Component: LocationPage,
          },
          {
            //센서 리스트 및 상세 검색, 시각화 페이지
            //locationId, projectId는 필수, sensorId는 옵셔널
            path: ":locationId/:projectId/:sensorId?",
            Component: ProjectPage,
          },
        ],
      },
    ],
  },
]);
