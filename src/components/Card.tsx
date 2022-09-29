import { makeStyles } from "@mui/styles"
import { useState } from "react"
import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  CardMedia as MuiCardMedia,
  Checkbox,
  FormControlLabel,
  Theme
} from "@mui/material"

interface CardProps {
  checked?: boolean
}

interface StyleProps extends CardProps {}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  root: {
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: "10px !important",
    width: "229px",
    height: "150px",
    display: "inline-block ",
    boxShadow: (props) =>
      props.checked ? `0px 0px 0px 2px ${theme.palette.primary.main}` : "none",

    "&:hover": {
      boxShadow: `0px 0px 0px 2px ${theme.palette.primary.main}`
    }
  },

  media: {
    width: "229px"
  },

  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "15px",
    boxSizing: "border-box"
  },

  checkboxLabel: {
    lineHeight: "0",
    height: "20px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "16.5px",

    "& .MuiFormControlLabel-label": {
      paddingLeft: "10.25px",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "20px",
      letterSpacing: "0.17000000178813934px",
      textAlign: "left"
    }
  },
  checkbox: {
    height: "13.5px",
    width: "13.5px",
    padding: "0 !important",
    borderColor: (props) =>
      props.checked
        ? `${theme.palette.primary.main} !important`
        : `${theme.palette.secondary.dark} !important`,
    color: (props) =>
      props.checked
        ? `${theme.palette.primary.main} !important`
        : `${theme.palette.secondary.dark} !important`
  }
}))

const Card: React.FC<CardProps> = ({ checked: muiChecked = false }) => {
  const [checked, setChecked] = useState<boolean>(muiChecked)

  const classes = useStyles({ checked })

  const handleChange = () => {
    setChecked((prevChecked) => !prevChecked)
  }

  return (
    <MuiCard variant="outlined" className={classes.root}>
      <MuiCardMedia
        className={classes.media}
        component="img"
        height="100px"
        image="/images/card_media.png"
        alt="Card media"
      />
      <MuiCardContent className={classes.content}>
        <FormControlLabel
          className={classes.checkboxLabel}
          control={
            <Checkbox
              checked={checked}
              onChange={handleChange}
              className={classes.checkbox}
            />
          }
          label="Flood zone 3"
        />
      </MuiCardContent>
    </MuiCard>
  )
}

export default Card
