import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../views/homeView";
import { Movies } from "../views/moviesView";
import { Series } from "../views/seriesView";
import { InfoViewMovie } from "../views/infoViewMovie";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/movie/:id" element={<InfoViewMovie />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};
