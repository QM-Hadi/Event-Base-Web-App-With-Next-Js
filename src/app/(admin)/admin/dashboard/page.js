


import { AnalyticsChart, BarChart } from "@/components/ui/BarChart/barchart";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="min-h-screen p-4" >
      <h1 className="flex justify-between text-2xl m-2">Dashboard</h1>
      <AnalyticsChart />
    </div>
  );
}
