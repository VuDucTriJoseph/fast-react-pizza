import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loading from "./Loading";

function AppLayout() {
  const navigation = useNavigation();
  //   console.log(navigation)
  const isLoading = navigation.state === "loading";
  return (
    <div className="layout">
      {isLoading && <Loading />}
      <Header />

      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
