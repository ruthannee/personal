import React from "react";
import CustomScrollbar from '../CustomScrollbar/CustomScrollbar';
import { Button } from '@material-ui/core';
import cvpt from "../../documents/CV-PT_Ruth-Anne.pdf";
import cven from "../../documents/CV-EN_Ruth-Anne.pdf";

const Curriculum = () => (
  <CustomScrollbar>
    <div className="div-all">
      <div className="div-left">
        <h1 id="h1-title">Currículo</h1>
      </div>
      <div className="div-right">
        <p id="content">
          <Button variant="outlined" href={cven} target="_blank">Download EN-EN</Button>
        </p>
      </div>
      <br />
      <iframe
        className="responsive-iframe"
        src={`${cvpt}#zoom=110`}
        type="application/pdf"
        title="CV"
        style={{
          borderRadius: 5,
          border: 0,
          width: '100%',
          height: 530
        }} />
    </div>
  </CustomScrollbar>
);

export default Curriculum;