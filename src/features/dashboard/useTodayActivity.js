import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";
import TodayActivity from "../check-in-out/TodayActivity";

export function useTodayActivity() {
    const { isLoading, data: activities } = useQuery({
      queryFn: () => getStaysTodayActivity(),
      queryKey: ["today-activity"],
    });

    return { isLoading, activities };
  }

