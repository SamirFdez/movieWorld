import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../views/homeView";
import { Movies } from "../views/moviesView";
import { Series } from "../views/seriesView";
import { InfoView } from "../views/infoView";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/resource/:id" element={<InfoView />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};
