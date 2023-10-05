import Typography from "@mui/material/Typography";
import JobPage from "@/components/pages/JobPage";
import { Box } from "@mui/material";
import { Body } from "@/components/atoms/Typography/";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Link from "next/link";
const JobDetailsDrower = ({ job }) => {
  return (
    <div>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "8px 0 48px 0",
        }}
      >
        <ArrowBackIosIcon />
       
        <Box
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
          }}
        >
          <Body hover>
            <OpenInNewIcon />
            <Link href={`/Job/${job.jobsId}`}>
             Open job in new window 
             </Link>
          </Body>
        </Box>
       
      </Box>

      <JobPage job={job} />
    </div>
  );
};

export default JobDetailsDrower;
