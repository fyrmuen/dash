import React, {useState, useEffect} from 'react'
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
)

const BarChart = () => {
    const [charData, setChartData] = useState({
        datasets:[]
    })

    const [charOptions, setCharOptions] = useState({})

    useEffect(() =>{
        setChartData({
            labels: ['senin', 'selasa', 'rabu', 'kamis', 'jum\'at', 'sabtu'],
            datasets: [
                {
                    label: 'Data Statistik',
                    data: [16746, 15855, 17896, 13968, 18896, 12023, 21564],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgb(53, 162, 235, 0.4)'
                },
            ]
        })
        setCharOptions({
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Daily Revenue'
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, [])

    return (
        <>
            <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50] m-auto p-4 border rounded-lg bg-white'>
                <Bar data={charData} options={charData}/>
            </div>
        </>
    )
}

export default BarChart