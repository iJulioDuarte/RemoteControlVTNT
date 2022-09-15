import { FC } from "react";
import { ContainerStats, DivPieChart } from "./styles";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Link } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ["Vermelhos", "Verdes", "Marrons", "Chumbinho"],
    datasets: [
        {
            label: "# of Votes",
            data: [10, 19, 5, 21],
            backgroundColor: [
                "rgba(255, 000, 000, 1)",
                "rgba(000, 255, 000, 1)",
                "rgba(90, 42, 1, 1)",
                "rgba(90, 90, 90, 1)",
            ],
            borderColor: [
                "rgba(0,0,0,1)",
                "rgba(0,0,0,1)",
                "rgba(0,0,0,1)",
                "rgba(0,0,0,1)",
            ],
            borderWidth: 0,
        },
    ],
};

const Stats: FC = () => {
    return (
        <>
            

            <ContainerStats>
                <h1>Estatisticas grãos</h1>
                <DivPieChart>
                    <Pie data={data} />
                </DivPieChart>
                <Link to="/">Voltar</Link>
            </ContainerStats>
        </>
    )
}

export default Stats;