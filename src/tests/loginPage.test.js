import { Provider } from "react-redux";
import { createStore } from "redux";
import LoginPage from "../components/LoginPage";
import { getAllInitialData } from "../redux/actions/firstInitialAction";
import { render, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import configureStore from "../redux/reducers/configureStore";
import { BrowserRouter } from "react-router-dom";

describe("Login page testing", () => {
  //snapshot testing
  it("Snapshot test when login componet was created", () => {
    const store = configureStore();
    const loginPage = render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      </Provider>
    );
    expect(loginPage).toMatchSnapshot();
  });

  it("İf selectbox value is not chosen", () => {
    const store = configureStore();
    const loginPage = render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      </Provider>
    );
    const cred = loginPage.getByTestId("cred");
    const submitButton = loginPage.getByTestId("submitButton");
    fireEvent.change(cred, { target: { value: '' } });
    expect(submitButton).toBeDisabled();
  });

});
