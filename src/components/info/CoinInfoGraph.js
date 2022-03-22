import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

import styles from "./coin-info-graph.module.css";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CoinInfoGraph = ({ graphData }) => {
	return (
		<div className={styles.chartContainer}>
			<Line
				options={{
					responsive: true,
					elements: {
						point: {
							radius: 1,
						},
					},
					plugins: {
						tooltip: {
							mode: "index",
							intersect: false,
						},
					},
				}}
				data={{
					labels: graphData?.map((coin) => {
						let date = new Date(coin[0]);
						let time = date.toLocaleTimeString("en-US", {
							timeZoneName: "short",
							hour12: "true",
							hour: "2-digit",
							minute: "2-digit",
						});
						return `${date.toLocaleDateString("en-Us", {
							month: "2-digit",
							day: "2-digit",
							year: "2-digit",
						})} ${time}`;
					}),
					datasets: [
						{
							label: "Price(USD)",
							data: graphData?.map((coin) => coin[1]),
							borderColor: "#41be7d",
						},
					],
				}}
			/>
		</div>
	);
};

export default CoinInfoGraph;
