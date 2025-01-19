import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ImgMediaCard(project) {
    
    project = project.project
    console.log(project)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={project.name}
        height="140"
        image={project.img}
      />
      <CardContent className="cards">
        <Typography gutterBottom variant="h5" component="div">
          {project.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {project.desicrption}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={project.link} target="_blank" size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
