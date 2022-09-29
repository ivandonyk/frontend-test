import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  CardMedia as MuiCardMedia,
  Checkbox,
  FormControlLabel,
  Theme
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import { useState } from "react"

interface CardProps {}

interface StyleProps {
  checked?: boolean
}

const useStyles = makeStyles<Theme, StyleProps>(() => ({
  root: {
    width: "229px",
    height: "150px",
    boxShadow: (props) => (props.checked ? "0px 0px 0px 2px #65E9D9" : "none"),

    "&:hover": {
      boxShadow: "0px 0px 0px 2px #65E9D9"
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
    boxSizing: "border-box",

    "& .MuiFormControlLabel-root": {
      lineHeight: "0",
      height: "20px"
    },

    "& .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked, .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.MuiCheckbox-indeterminate":
      {
        color: "#21B6A8"
      },

    "& .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root": {
      padding: "0",
      height: "13.5px",
      width: "13.5px",
      marginRight: "10.25px",
      marginLeft: "16.25px"
    },

    "& .css-j204z7-MuiFormControlLabel-root": {
      display: "flex",
      alignItems: "center",
      lineHeight: "0.9rem"
    },
    "& .css-j204z7-MuiFormControlLabel-root .MuiFormControlLabel-label": {
      lineHeight: "0.8rem"
    },
    "& .PrivateSwitchBase-input .css-1m9pwf3": {
      height: "13.5px",
      width: "13.5px"
    }
  }
}))

const Card: React.FC<CardProps> = () => {
  const [checked, setChecked] = useState<boolean>(false)

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
          control={<Checkbox checked={checked} onChange={handleChange} />}
          label="Flood zone 3"
        />
      </MuiCardContent>
    </MuiCard>
  )
}

export default Card
