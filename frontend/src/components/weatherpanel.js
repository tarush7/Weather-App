import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Placeholder from 'react-bootstrap/Placeholder';

import '../CSS/weatherpanel.css'
import { useContext } from 'react';
import { WeatherContext } from '../WeatherContext';


function Weatherpanel() {

    const { loading, error, data } = useContext(WeatherContext);
    if (error) return <p>Error :|</p>
    if (!data) return <p>No data Available</p>

    if (loading) return (<div>
        <Container className='vh-100'>
            <Row>
                <Col md={4}>
                    <Placeholder as="p" animation="glow">
                        <Placeholder xs={6} size="lg" />
                    </Placeholder>
                </Col>
                <Col md={{ span: 4, offset: 4 }}>
                    <Placeholder as="p" animation="glow">
                        <Placeholder xs={6} size="lg" />
                    </Placeholder>
                </Col>
            </Row>
            <Row>
                <Col xs={8}>
                    <Placeholder as="p" animation="glow">
                        <Placeholder xs={12} />
                    </Placeholder>
                </Col>
                <Col className='weather-info p-5'>
                    <Stack direction="vertical">
                        <Placeholder as="span" animation="glow">
                            <Placeholder xs={6} />
                        </Placeholder>

                        <div className='pb-1'>
                            <Placeholder as="span" animation="glow">
                                <Placeholder xs={6} />
                            </Placeholder>
                        </div>

                        <div className='pb-1'>
                            <Placeholder as="span" animation="glow">
                                <Placeholder xs={6} />
                            </Placeholder>
                        </div>

                        <div className='pb-1'>
                            <Placeholder as="span" animation="glow">
                                <Placeholder xs={6} />
                            </Placeholder>
                        </div>
                    </Stack>
                </Col>
            </Row>
        </Container>
    </div>)


    return (
        <Container className='vh-100'>
            <Row>
                <Col md={4}><p className='fs-1 m-5 weather-info-location'>{data.location_name || "REGION"}</p></Col>
                <Col md={{ span: 4, offset: 4 }}><p className='fs-1 m-5 pl-1 weather-info-location'>{data.forecast_date || "DATE"}</p></Col>
            </Row>
            <Row>
                <Col xs={8}>
                    <div className="temperature">{data.current_temp_c || "XX"}°c</div>
                </Col>
                <Col className='weather-info p-5'>
                    <Stack direction="vertical">
                        <div className='pb-1'><i className="bi bi-wind"></i><span className='fs-5 weather-info-location m-3'>Wind Speed</span>
                            <ProgressBar animated now={data.wind_mph} label={`${data.wind_mph}`} max={100} variant="dark" />
                        </div>

                        <div className='pb-1'><i className="bi bi-moisture fs-2"></i><span className='fs-5 weather-info-location m-3'>Humidity</span>
                            <ProgressBar animated now={data.humidity} label={`${data.humidity}`} max={100} variant="dark" />
                        </div>

                        <div className='pb-1'><i className="bi bi-thermometer-sun fs-2"></i><span className='fs-5 weather-info-location m-3'>Feels Like</span>
                            <ProgressBar animated now={data.feelslike_c} label={`${data.feelslike_c}`} max={60} variant="dark" />
                        </div>

                        <div className='pb-1'>
                            <i className="bi bi-cloud-haze fs-2"></i><span className='fs-5 weather-info-location m-3'>AeroPurity Spectrum</span>
                            <ProgressBar animated now={data.air_quality_pm10} label={`${data.air_quality_pm10}`} max={200} variant="dark" />
                        </div>
                    </Stack>
                </Col>
            </Row>
        </Container>
    )
}

export default Weatherpanel;
