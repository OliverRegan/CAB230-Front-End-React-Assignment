import { useParams } from "react-router-dom";

// Import function to receive volcano data
import { useVolcanoId } from './api/apiVolcanoId'

// Pigeon maps
import { Map, Marker } from "pigeon-maps"

// Charts from react-vis
import { Chart, Bars, Layer, Ticks } from "rumble-charts";


function Volcano(props) {



    // Get data from route URL
    const id = props.volcanoId;
    const jwt = props.token;
    const jwtType = props.tokenType;

    let { volcanoIdLoading, volcanoId, volcanoIdError } = useVolcanoId(id, jwt);

    return (
        <div>
            <div className="card bg-dark container">
                <div className="card-title pt-5 px-4">
                    <h2 className="text-light">Volcano: {volcanoId.name}</h2>
                </div>
                <hr className='container bg-light '></hr>
                <div className="row card-body text-light">
                    <div className="data-container col-md-6">
                        <p className="data-title">Country: <span className="data">{volcanoId.country}</span></p>
                    </div>
                    <div className="data-container col-md-6">
                        <p className="data-title">Region: <span className="data">{volcanoId.region}</span></p>
                    </div>
                    <div className="data-container col-md-6">
                        <p className="data-title">Subregion: <span className="data">{volcanoId.subregion}</span></p>
                    </div>
                    <div className="data-container col-md-6">
                        <p className="data-title">Last Eruption: <span className="data">{volcanoId.last_eruption}</span></p>
                    </div>
                    <div className="data-container col-md-6">
                        <p className="data-title">Summit: <span className="data">{volcanoId.summit}</span>m</p>
                    </div>
                    <div className="data-container col-md-6">
                        <p className="data-title">Elevation: <span className="data">{volcanoId.elevation}</span>ft</p>
                    </div>
                </div>
                {volcanoIdLoading === true ?
                    console.log('loading')
                    // <Map height={300} width={400} defaultCenter={[-27.477596, 153.028523]} defaultZoom={7}>
                    //     <Marker width={50} anchor={[-27.477596, 153.028523]} />
                    // </Map>
                    :
                    <div>
                        <Map height={500} defaultCenter={[parseFloat(volcanoId.latitude), parseFloat(volcanoId.longitude)]} defaultZoom={3}>
                            <Marker width={30} color={'red'} anchor={[parseFloat(volcanoId.latitude), parseFloat(volcanoId.longitude)]} />
                        </Map>
                        <Chart
                            height={300}
                            minY={0}
                            series={[
                                {
                                    label: "hello",
                                    data: [
                                        1,

                                    ]
                                },
                                {
                                    label: "hello",
                                    data: [
                                        5,

                                    ]
                                },
                                {
                                    label: "hello",
                                    data: [
                                        13,

                                    ]
                                }
                            ]}
                            width={600}
                        >
                            <Layer width='100%' height='70%' position='bottom center'>
                                <Ticks
                                    axis='x'

                                    label={({ props, index }) => props.series[0].series[index].label}
                                    labelVisible={true}
                                    labelStyle={{ textAnchor: 'middle', alignmentBaseline: 'after-edge', fill: 'lightgray' }}

                                />
                                <Bars innerPadding='0.02%' />
                            </Layer>
                        </Chart>
                    </div>}

            </div>

        </div>
    )
}

export default Volcano;