import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllInitialData } from "../redux/actions/firstInitialAction";
import Home from "../components/Home";
import Leaderboard from "../components/Leaderboard";
import NewQuestionPage from "../components/NewQuestionPage";
import QuestionDetailPage from "../components/QuestionDetailPage";
import LoginPage from "../components/LoginPage";
import TabBar from "../components/TabBar";
import PrivateRoute from "./PrivateRoute";
import { useSelector } from "react-redux";

const AppRouter = () => {
  const auth = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllInitialData());
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/login" exact element={<LoginPage />}></Route>
        <Route
          path="/"
          exact
          element={
            <PrivateRoute isAuthenticated={auth.isAuthenticated}>
              <TabBar />
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/leaderboard"
          exact
          element={
            <PrivateRoute isAuthenticated={auth.isAuthenticated}>
              <TabBar />
              <Leaderboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/new"
          exact
          element={
            <PrivateRoute isAuthenticated={auth.isAuthenticated}>
              <TabBar />
              <NewQuestionPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/questions/:id"
          exact
          element={
            <PrivateRoute isAuthenticated={auth.isAuthenticated}>
              <TabBar />
              <QuestionDetailPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default AppRouter;
