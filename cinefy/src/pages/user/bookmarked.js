import React, { useEffect, useState } from "react";
import Header from "../../Layouts/header/header";
import Footer from "../../Layouts/footer/footer";
import Album from "../../Components/general/jobs/cards";
import { Box, Container, Grid, Typography } from "@mui/material";
import Filiter from "../../Components/general/jobs/filiter";
import styled from "@emotion/styled";
import FreeSolo from "../../Components/general/jobs/SearchBar";

const Page = styled(Box)({
    background: "#F8F8F8",
});

// const FiliterContainer = styled(Container)({});

const LeftSide = styled(Box)({
    display: "flex",
    flexDirection: "column",
    paddingTop: "10px",
    margin: { sx: 0, sm: 0, md: 0, lg: 0, xl: 0 },
    marginTop: { md: 2, lg: 2, xl: 2, sx: 0 },
    marginLeft: { md: 2, lg: 2, xl: 2 },
});

function Jobs() {
    const [filters, setFilters] = useState({ 'Project Type': [], Age: [0, 0], Role: [], Gender: [], 'Date of Posting': [], Languages: [] })

    useEffect(() => {
        console.log(filters);

    }, [filters])

    return (
        <>
            <Page>
                {/* <FiliterContainer> */}
                <Header />
                <div style={{ padding: 22 }}>

                </div>
                <Grid >
                    <LeftSide>
                        <Album filter={filters} bookmark={true} />
                    </LeftSide>
                </Grid>
                <Footer />
                {/* </FiliterContainer>  */}
            </Page>
        </>
    );
}

export default Jobs;
