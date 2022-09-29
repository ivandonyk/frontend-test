import { makeStyles } from "@mui/styles"
import "./App.css"
import Card from "./components/Card"

const useStyles = makeStyles({
  root: {
    padding: "1rem"
  }
})

function App() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Card />
    </div>
  )
}

export default App
