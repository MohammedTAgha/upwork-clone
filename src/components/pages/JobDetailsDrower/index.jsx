import Typography from '@mui/material/Typography';
import JobPage from '@/components/pages/JobPage'
const JobDetailsDrower = ({job}) => {
    return (
        <div>
    <Typography variant="h4" gutterBottom>
        Job Diatails 
      </Typography>
        <JobPage/>
        </div>
    )

}

export default JobDetailsDrower;