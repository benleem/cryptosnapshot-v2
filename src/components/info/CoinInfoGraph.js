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

const CoinInfoGraph = ({ graphData, graphRange, setGraphRange }) => {
	return (
		<div className={styles.chartContainer}>
			<div className={styles.changeRangeContainer}>
				<button
					className={graphRange === "1" ? styles.active : styles.inactive}
					onClick={() => setGraphRange("1")}
				>
					1d
				</button>
				<button
					className={graphRange === "7" ? styles.active : styles.inactive}
					onClick={() => setGraphRange("7")}
				>
					7d
				</button>
				<button
					className={graphRange === "30" ? styles.active : styles.inactive}
					onClick={() => setGraphRange("30")}
				>
					30d
				</button>
				<button
					className={graphRange === "365" ? styles.active : styles.inactive}
					onClick={() => setGraphRange("365")}
				>
					1y
				</button>
				<button
					className={graphRange === "max" ? styles.active : styles.inactive}
					onClick={() => setGraphRange("max")}
				>
					Max
				</button>
			</div>
			<Line
				options={{
					maintainAspectRatio: true,
					responsive: true,
					elements: {
						point: {
							pointRadius: 1,
							hoverRadius: 5,
						},
					},
					hover: {
						mode: "index",
						intersect: false,
					},
					plugins: {
						tooltip: {
							mode: "index",
							intersect: false,
							bodyFont: {
								size: 12,
								family: "'Poppins', sans-serif",
							},
							titleFont: {
								size: 12,
								family: "'Poppins', sans-serif",
							},
						},
						legend: {
							labels: {
								color: "white",
								font: {
									size: 16,
									family: "'Poppins', sans-serif",
								},
							},
						},
					},
					scales: {
						x: {
							ticks: {
								color: "white",
								font: {
									family: "'Poppins', sans-serif",
									size: 11,
								},
							},
						},
						y: {
							ticks: {
								color: "white",
								font: {
									family: "'Poppins', sans-serif",
									size: 14,
								},
							},
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
