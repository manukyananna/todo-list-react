import { useSelector } from "react-redux";
import { NotificationContainer } from "react-notifications";
import Auxiliary from "../../hoc/auxiliary";
import BaseRoutes from "../../Routes/baseRoutes";
import Header from "../Components/header";
import PageSpinner from "../../Components/Spinners/pageSpinner";

const BaseLayout = () => {
  const pageSpinners = useSelector(state => state.spinner.pageSpinners);

  return <Auxiliary>
    <Header />
    <BaseRoutes />
    <NotificationContainer />
    <PageSpinner spinners={pageSpinners} />
  </Auxiliary>;
}

export default BaseLayout;