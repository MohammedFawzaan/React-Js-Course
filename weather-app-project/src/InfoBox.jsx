/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css"

const InfoBox = ({ info }) => {

    let coldUrl = "https://plus.unsplash.com/premium_photo-1670493556860-13e006e6faa4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ludGVyfGVufDB8fDB8fHww"
    let hotUrl = "https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    let rainUrl = "https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UmFpbnxlbnwwfHwwfHx8MA%3D%3D"

    return (
        <div className='InfoBox'>
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={(info.humidity) > 80 ? rainUrl : (info.temp) < 15 ? coldUrl : hotUrl}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                            {info.humidity > 80 ? <ThunderstormIcon /> : (info.temp) < 15 ? <AcUnitIcon /> : <WbSunnyIcon/> }
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <div>Temperatur: {info.temp}&deg;C</div>
                            <div>Humidity: {info.humidity}</div>
                            <div>Min Temp: {info.tempMin}</div>
                            <div>Min Temp: {info.tempMax}</div>
                            <div>The Weather can be described as {info.weather} and feels like {info.feelsLike}</div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default InfoBox;