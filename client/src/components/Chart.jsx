import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import { useState, useEffect } from 'react';
import axios from '../api/axiosInstance';
import { useAuth0 } from '@auth0/auth0-react';

const Chart = () => {
  const [scores, setScores] = useState([]);
  const { user, isAuthenticated } = useAuth0();
    useEffect(() => {
    const fetchScores = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/scores/${user.name}`);
        setScores(res.data);
      } catch (error) {
        console.error("Error fetching scores:", error);
      }
    };

    if (isAuthenticated && user?.sub) {
      fetchScores();
    }
  }, [user, isAuthenticated]);

  const data = {
    labels: scores.map(score => new Date(score.createdAt).toLocaleDateString()),
    datasets: [
      {
        label: 'WPM',
        data: scores.map(score => score.wpm),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  return<div className="w-full flex justify-center items-center h-[300px] relative">
  <Line data={data} />
</div>
};



export default Chart
