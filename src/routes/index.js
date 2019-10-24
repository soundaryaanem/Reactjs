// import component
import ListPage from "../pages/views/ListPage";
import DetailPage from "../pages/views/DetailPage";

var indexRoutes = [
  { path: '/list', name: 'ItemList', component: ListPage},
  { path: '/detail/:taskId?', name: 'ItemDetail', component: DetailPage}
];

export default indexRoutes;
