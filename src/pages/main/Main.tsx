import { ReactElement } from "react";
import { useQuery } from "react-query";
import { getNotifications } from "../../api";

function Main(): ReactElement {
  const { data, isLoading } = useQuery("notifications", () =>
    getNotifications()
  );

  return <div>메인</div>;
}

export default Main;
